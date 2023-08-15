import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import { COLORS } from '../outils/constants'
import React from 'react'
import welcomeStyle from '../screens/style'

export default function Button({ title }) {
    return (
        <Pressable style={welcomeStyle.button}>
            <Text style={{ color: 'white', textTransform: 'uppercase'}}>{title}</Text>
        </Pressable>
    )
}