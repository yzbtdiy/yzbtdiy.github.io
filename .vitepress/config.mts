import { defineConfig } from 'vitepress'
import { setSidebar } from "./utils/generateSidebar.mts"
// https://vitepress.dev/reference/site-config

export default defineConfig( {
    lang: 'zh-CN',
    srcDir: './docs',
    title: "yzbtdiy's notes",
    description: 'Powered by VitePress',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '前端', link: '/frontend/' },
            { text: '后端', link: '/backend/' },
            { text: '运维', link: '/devops/' }
        ],

        sidebar: {
            "/frontend/": [
                setSidebar( "frontend/html" ),
                setSidebar( "frontend/css" ),
                setSidebar( "frontend/javascript" ),
            ],
            "/backend/": [
                setSidebar( "backend/golang" ),
                setSidebar( "backend/python" ),
            ],
            "/devops/": [
                setSidebar( "devops/linux" ),
                setSidebar( "devops/tools" ),
                setSidebar( "devops/windows" )
            ]
        },
        socialLinks: [ { icon: 'github', link: 'https://github.com/vuejs/vitepress' } ],
        search: {
            provider: 'local'
        }
    }
} )
