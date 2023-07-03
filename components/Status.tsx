import { Text, View } from 'react-native'
import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' |'error'
}

const Status = (props:StatusProps) => {
    let message;
    if(props.status==='loading'){
        message='Loading'
    } else if(props.status==='success'){
        message='Data fetched successfully!'
    }else {
        message='Error fetched data!'
    }
    return (
        <View>
            <Text>Status - {message}</Text>
        </View>
    )
}

export default Status

