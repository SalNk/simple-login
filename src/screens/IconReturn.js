import { Image } from 'react-native'
import React from 'react'
import welcomeStyle from './style'

export default function IconReturn({ navigation }) {
    return (

        <Image
            onPress={() => navigation.navigate('welcome')}
            source={require('./../../assets/arrow_back.png')}
            style={welcomeStyle.iconReturn}
        />
    )
}