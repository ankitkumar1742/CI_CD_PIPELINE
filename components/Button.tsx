import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


interface ButtonPress {
    handleClick: (id: number) => void
}


const Button = (props: ButtonPress) => {
    return (
        <TouchableOpacity onPress={() => props.handleClick(1)}>
            <Text>Button</Text>
        </TouchableOpacity>
    )
}

export default Button