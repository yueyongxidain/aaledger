import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'

function App({ children }: PropsWithChildren<any>) {
    useLaunch((option) => {
        wx.login({
            success: ({ code }) => {
                if (code) {
                    console.log('获取用户code的成功', code)
                }
            },
            fail: (err) => {
                console.log('获取用户code 失败', err.errMsg)
            }
        })
    })

    // children 是将要会渲染的页面
    return children
}

export default App
