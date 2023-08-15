import { StyleSheet } from "react-native";
import { COLORS, FORM_LOGIN, SIZE } from "../outils/constants";

let iconSize = 150

 const welcomeStyle = StyleSheet.create({
    screen:{
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 45,
    },
    icon:{
        width: iconSize,
        height: iconSize,
    },
    title:{
        fontSize: SIZE.h1,
        fontWeight: 'bold',
        color: COLORS.main,
        marginTop: 15
    },
    paragraph:{
        textAlign: "center"
    },
    button:{
        width: '100%',
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        textTransform: 'uppercase',
        backgroundColor: COLORS.main,
        padding: FORM_LOGIN.vertical,
        borderRadius: FORM_LOGIN.radius,
        marginTop: 15,
        fontWeight: 'bold'
    },
    buttonSign:{
        width: '100%',
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        textTransform: 'uppercase',
        padding: FORM_LOGIN.vertical,
        borderRadius: FORM_LOGIN.radius,
        marginTop: 15,
        borderWidth: 0.5,
        fontWeight: 'bold',
        color: COLORS.main
    },
     input: {
         width: '100%',
         padding: FORM_LOGIN.vertical,
         borderRadius: FORM_LOGIN.radius,
         marginTop: 20,
         borderWidth: 0.5,
         fontWeight: 'bold'
     },
     absolute:{
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign:'right',
     }
}) 
export default welcomeStyle