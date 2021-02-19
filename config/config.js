/**
 * @Title: config
 * @ProjectName antd-course
 * @Description:
 * @author yulan
 * @date 2021/2/1811:22
 */
export default {
    singular: true,
    theme: {
        "@primary-color": "#30b767",
    },
    plugins: [
        ['umi-plugin-react',{
        // 配置内容
            antd: true,
            dva: true,
            locale: {
                enable: true,
            },
        }]
    ],
    routes:[{
        path: '/',
        component: '../layout',
        routes: [
            {
            path: '/hello',
            component: 'HelloWorld'
            },
            {
                path: '/detail',
                routes: [
                    {
                        path: '/detail/one',
                        component: './detail/One'
                    },
                    {
                        path: '/detail/two',
                        component: './Detail/Two'
                    },
                    {
                        path: '/detail/interal',
                        component: './Detail/Interal'
                    }
                ]
            }
        ]
    }]
}