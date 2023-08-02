import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import { Empty, Search, Button } from "@taroify/core"
import { useState } from 'react'

export default function Index() {
    const [value, setValue] = useState("")
    useLoad(() => {
        console.log('Page loaded.')
    })
    function getNumber(event) {
        console.log(event.detail)
    }
    return (
        <View className='index'>
            <Search
                value={value}
                placeholder="请输入搜索关键词"
                inputAlign="center"
                onChange={(e) => setValue(e.detail.value)}
            />
            <Empty>
                <Empty.Image
                    src=""
                    className="custom-empty__image" />
                <Empty.Description>空空如也</Empty.Description>
            </Empty>
            <Button
                open-type="getPhoneNumber"
                onGetPhoneNumber={getNumber}
                style={{ backgroundColor: "#7232dd", color: "#fff" }}>单色按钮</Button>
        </View>
    )
}
