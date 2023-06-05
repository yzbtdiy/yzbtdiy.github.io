---
title: Golang后端数分页
date: 2022-09-10 16:14:03
categories: golang
tags:
  - golang
  - database
  - pagination
---

前端对于请求数据条数过多时, 可以考虑数据分页显示, 可以通过两个参数`pageSize`(每页显示的条数) 和`pageNumber`(页数)来进行控制.

## 前端请求数据传参

发送 ajax 请求时传递 `psize` 和 `pnum` 两个参数, `psize` 为10 期望每页返回10条数据, `pnum` 为 1 期望返回第一页的数据.

```url
http://localhost:8848/api/datalist?psize=10&pnum=1
```
<!--more-->

## 后端获取参数处理

###  HandleFunc 如下

从请求的url中读取 `psize` 和 `pnum` 的值, 由于从url 中获取的值为字符串类型, 所以要先转化为整数类型, 然后传递给数据库处理

```go
func DataListApi(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()
	pageSize, _ := strconv.Atoi(params.Get("psize"))
	pageNum, _ := strconv.Atoi(params.Get("pnum"))
	dataList := GetDataFromDbByPages(pageSize, pageNum)
	if dataList != nil {
		jsonData, _ := json.Marshal(dataList)
		_, err := w.Write(jsonData)
		if err != nil {
			log.Println(err)
		}
	}
}
```

### Gorm 查询操作如下

从数据库中查询指定条件数据, 查询成功返回一个结构体数组, 没有查询到数据返回 nil

偏移量为 `(pnum-1)*psize` 的值, 限制返回条数为 `psize`

```go
func GetDataFromDbByPages(psize, pnum int) (dataList *[]UserDataModel) {
	result := db.Offset((pnum - 1) * psize).Limit(psize).Find(&dataList)
	if result.RowsAffected == 0 {
		log.Println("获取数据失败")
		return nil
	} else {
		return dataList
	}
}
```

## 完整后端代码(demo)

```go
package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

// 监听本地8848端口, 处理来自 /api/datalist 的请求
func main() {
	server := http.Server{
		Addr: "127.0.0.1:8848",
	}
	http.HandleFunc("/api/datalist", DataListApi)
	log.Println("Server is runing on http://127.0.0.1:8848")
	if err := server.ListenAndServe(); err != nil {
		log.Println(err)
	}
}

// 处理 /api/datalist 请求, 请求需要携带psize和pnum参数
func DataListApi(w http.ResponseWriter, r *http.Request) {
	params := r.URL.Query()
	pageSize, _ := strconv.Atoi(params.Get("psize"))
	pageNum, _ := strconv.Atoi(params.Get("pnum"))
	dataList := GetDataFromDbByPages(pageSize, pageNum)
	if dataList != nil {
		jsonData, _ := json.Marshal(dataList)
		_, err := w.Write(jsonData)
		if err != nil {
			log.Println(err)
		}
	}
}

// 数据库存储数据的结构体
type UserDataModel struct {
	Id   int    `gorm:"column:id;type:INTEGER NOT NULL;primaryKey;autoIncrement;"`
	Name string `gorm:"column:name;type:TEXT NOT NULL UNIQUE;"`
	Desc string `gorm:"column:desc;type:TEXT NOT NULL;"`
}

// 自定义表名
func (UserDataModel) TableName() string {
	return "user_data"
}

var db *gorm.DB

// 在 main 函数执行前用 init 初始化 sqlite 数据库
func init() {
	var err error
	db, err = gorm.Open(sqlite.Open("./data.db"), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	sqlDB, _ := db.DB()
	sqlDB.SetMaxOpenConns(1)

	tableInit(&UserDataModel{})
}

// 检查表是否存在, 不存在则创建
func tableInit(table interface{}) {
	if db.Migrator().HasTable(table) {
		return
	} else {
		db.Migrator().CreateTable(table)
		genTestData()
	}
}

// 从数据库根据 psize 和 pnum 读取数据
func GetDataFromDbByPages(psize, pnum int) (dataList *[]UserDataModel) {
	result := db.Offset((pnum - 1) * psize).Limit(psize).Find(&dataList)
	if result.RowsAffected == 0 {
		log.Println("获取数据失败")
		return nil
	} else {
		return dataList
	}
}

// 生成测试数据 100 条
func genTestData() {
	for i := 1; i <= 100; i++ {
		testData := UserDataModel{
			Id:   i,
			Name: "user" + strconv.Itoa(i),
			Desc: "Hello, I'm user" + strconv.Itoa(i),
		}
		db.Create(&testData)
	}
}
```

## 测试

demo 下载: [https://yzbtdiy.lanzoul.com/iICXi0pung7c](https://yzbtdiy.lanzoul.com/iICXi0pung7c)

初次运行会在当前目生成 sqlite 数据库, 文件名为 `data.db`,

然后创建 user_data 表, 插入 100 条测试数据,

监听 8848端口, 可以访问 `/api/datalist` 获取数据, 需要传递 `psize` 和 `pnum` 两个参数

可以通过浏览器访问测试, 也可以用命令行测试

```
~ $ curl "http://127.0.0.1:8848/api/datalist?psize=10&pnum=1"
[{"Id":1,"Name":"user1","Desc":"Hello, I'm user1"},{"Id":2,"Name":"user2","Desc":"Hello, I'm user2"},{"Id":3,"Name":"user3","Desc":"Hello, I'm user3"},{"Id":4,"Name":"user4","Desc":"Hello, I'm user4"},{"Id":5,"Name":"user5","Desc":"Hello, I'm user5"},{"Id":6,"Name":"user6","Desc":"Hello, I'm user6"},{"Id":7,"Name":"user7","Desc":"Hello, I'm user7"},{"Id":8,"Name":"user8","Desc":"Hello, I'm user8"},{"Id":9,"Name":"user9","Desc":"Hello, I'm user9"},{"Id":10,"Name":"user10","Desc":"Hello, I'm user10"}]

~ $ curl "http://127.0.0.1:8848/api/datalist?psize=5&pnum=3"
[{"Id":11,"Name":"user11","Desc":"Hello, I'm user11"},{"Id":12,"Name":"user12","Desc":"Hello, I'm user12"},{"Id":13,"Name":"user13","Desc":"Hello, I'm user13"},{"Id":14,"Name":"user14","Desc":"Hello, I'm user14"},{"Id":15,"Name":"user15","Desc":"Hello, I'm user15"}]
```