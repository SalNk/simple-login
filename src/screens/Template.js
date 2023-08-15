import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import './style.js'
import welcomeStyle from './style.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function WelcomeScreen({ children }) {
    return (
        <SafeAreaView style={welcomeStyle.screen}>
            <StatusBar style="auto" />

            <Image
                style={welcomeStyle.icon}
                source={require('./../../assets/logoreact.png')}
            />

            {children}

        </SafeAreaView>
    )
}