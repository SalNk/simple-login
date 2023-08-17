import { View, Text } from 'react-native'
import React from 'react'
import Template from './Template'
import welcomeStyle from './style'
// import ArrowSmallLeftIcon from 'react-native-heroicons/outline'


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


            <Text style={{ position: 'absolute', bottom: 20 }}>
                Designed with ❤ by @Sal_Aime
            </Text>
        </Template>
    )
}