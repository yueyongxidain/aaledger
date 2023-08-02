export default defineAppConfig({
    pages: [
        'pages/record/index',
        'pages/list/index',
        'pages/my/index',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        custom: false, // 该属性默认时也可以不写
        color: "#000000",
        selectedColor: "#A4462A",
        list: [
            {
                pagePath: "pages/list/index",
                iconPath: "images/list_noSelected.png",
                selectedIconPath: "images/list.png",
                text: "账本"
            },
            {
                pagePath: "pages/record/index",
                iconPath: "images/record_noSelected.png",
                selectedIconPath: "images/record.png",
                text: "记账"
            },
            {
                pagePath: "pages/my/index",
                iconPath: "images/my_noSelected.png",
                selectedIconPath: "images/my.png",
                text: "个人中心"
            }
        ]
    }
})
