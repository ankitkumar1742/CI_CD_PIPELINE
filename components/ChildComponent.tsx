import { View, Text } from 'react-native'
import React from 'react'

type ChildComponentType = {
    children: React.ReactNode
}

const ChildComponent = (props:ChildComponentType) => {
    return (
        <View>
            <Text>{props.children}</Text>
        </View>
    )
}

export default ChildComponent