import { Text, View } from 'react-native'
import React from 'react'

type ChildProps = {
  children:string
}

const CheckChildData = (props:ChildProps) => {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  )
}

export default CheckChildData
