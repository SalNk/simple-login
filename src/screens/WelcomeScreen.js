import { View, Text, Image } from 'react-native'
import React from 'react'
import Template from './Template'
import welcomeStyle from './style'
import IconReturn from './IconReturn'


export default function WelcomeScreen({ navigation }) {
    return (
        <Template>
            <Text style={welcomeStyle.title}>Login Template</Text>
            <Text style={welcomeStyle.paragraph}>The easiest way to start with your amazing application.</Text>
            {/* <ArrowSmallLeftIcon size="25" color="black" /> */}

            <Text
                onPress={() => navigation.navigate('login')}
                style={welcomeStyle.button}>
                login
            </Text>

            <Text
                onPress={() => navigation.navigate('signup')}
                style={welcomeStyle.buttonSign}>
                Sign up
            </Text>
        </Template>
    )
}