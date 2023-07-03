import { Text, View } from 'react-native'
import React from 'react'

type personProps = {
    name: {
        firstName: string,
        lastName: string
    }
}

function ObjectType(props: personProps) {
    return (
        <View>
            <Text>{props.name.firstName}{props.name.lastName}</Text>
        </View>
    )
}


export default ObjectType