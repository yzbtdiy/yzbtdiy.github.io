module.exports = {
	"title": "YZBTDIY",
	"description": "拥抱开源",
	"dest": "public",
	"head": [
		[
			"link",
			{
				"rel": "icon",
				"href": "/favicon.ico"
			}
		],
		[
			"meta",
			{
				"name": "viewport",
				"content": "width=device-width,initial-scale=1,user-scalable=no"
			}
		]
	],
	"theme": "reco",
	"themeConfig": {
		"nav": [{
				"text": "首页",
				"link": "/",
				"icon": "reco-home"
			},
			{
				"text": "时间轴",
				"link": "/timeline/",
				"icon": "reco-date"
			},
			{
				"text": "关于",
				"link": "/about/",
				"icon": "reco-account"
			},
			{
				"text": "其它",
				"icon": "reco-message",
				"items": [{
					"text": "GitHub",
					"link": "https://github.com/yzbtdiy",
					"icon": "reco-github"
				}, ]
			}
		],
		"type": "blog",
		"blogConfig": {
			"category": {
				"location": 2,
				"text": "归档"
			},
			"tag": {
				"location": 3,
				"text": "标签"
			}
		},
		"friendLink": [{
			"title": "vuepress-theme-reco",
			"desc": "A simple and beautiful vuepress Blog & Doc theme.",
			"avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
			"link": "https://vuepress-theme-reco.recoluan.com"
		}, ],
		"search": true,
		"searchMaxSuggestions": 10,
		"sidebar": "auto",
		"sidebarDepth": 2,
		"lastUpdated": "Last Updated",
		"author": "yzbtdiy",
		"authorAvatar": "/avatar.png",
		"record": "晋ICP备17000349号",
		"recordLink": 'http://www.beian.miit.gov.cn/',
		"startYear": "2019"
	},
	"markdown": {
		"lineNumbers": true
	}
}
