import { StyleSheet } from "react-native";


const textLabelStyle = (topPosition) => StyleSheet.create({
    textlabel:{
        position: 'absolute',
        top: topPosition, // Adjust this value as needed
        left: '10%',
        textAlign: 'center', // Center the text horizontally
        fontFamily: 'Lexend_400Regular',
        fontSize: 18, // Adjust the font size as needed
        color: 'black', // Text color
    },
})

const textInputStyle = (topPosition) => StyleSheet.create({
    textinput: {
        position: 'absolute',
        top: topPosition, // Adjust this value as needed
        left: '10%',
        right: '10%',
        height: '6%',
        textAlign: 'center', // Center the text horizontally
        fontFamily: 'Lexend_700Bold',
        fontSize: 20, // Adjust the font size as needed
        color: 'black', // Text color
        backgroundColor: 'white',
        borderColor: '#016A97',
        borderWidth: 1.5,
        borderRadius: 10,
    },
})

const styles = StyleSheet.create({
    signupButton: {
        position: 'relative',
        top: "85%",
        alignSelf: 'center',
        height: 200,
        zIndex: 9999,
    },
    text: {
        position: 'absolute',
        top: '18%', // Adjust this value as needed
        left: 0,
        right: 0,
        textAlign: 'center', // Center the text horizontally
        fontFamily: 'Lexend_700Bold',
        fontSize: 20, // Adjust the font size as needed
        color: 'black', // Text color
    },
    topLogo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '15%',
        resizeMode: 'stretch',
    },
    backgroundImage: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '85%',
      resizeMode: 'stretch',
    },
});

module.exports = {
    styles,
    textInputStyle,
    textLabelStyle
}