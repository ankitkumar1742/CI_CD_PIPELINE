import { Text, View } from 'react-native'
import React from 'react'

type nameListType = {
    nameList: {
        firstName:string,
        lastName:string
    }[]
}

const ArrayType = (props:nameListType) => {
  return (
    <View>
     {
        props.nameList.map((item,i)=>{
            return (
                <Text key={i} >{item.firstName} {item.lastName}</Text>
            )
        })
     }
    </View>
  )
}

export default ArrayType

