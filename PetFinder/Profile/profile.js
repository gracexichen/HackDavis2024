import React from 'react';

import { Text, TextInput, Image , View, TouchableOpacity} from 'react-native';
// import { useFonts } from 'expo-font';

import {styles, textLabelStyle, textInputStyle} from './profileStyleSheet';

const Profile = () => {
    // const [fontsLoaded] = useFonts({
    //     'Lexend-Bold': require("./fonts/Lexand-Bold.ttf"),
    //     'Lexend-Regular': require("./fonts/Lexand-Regular.ttf")
    // });

    // if(!fontsLoaded){
    //     return <></>
    // }
    
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [email, onChangeEmail] = React.useState('');
    const [confirmPassword, onChangeConfirmPassword] = React.useState('');

    return (
        <View style = {{flex : 1}}>
            <Image source={require('./assets/logo1.png')} style={styles.topLogo} />
            <Image source={require('./assets/profile_background.png')} style={styles.backgroundImage} />
            <Text style={styles.text}>Let’s Get Started!</Text>
            <Text style={textLabelStyle('25%').textlabel}>Username</Text>
            <TextInput editable placeholder = 'Username' value = {username} onChangeText={username => onChangeUsername(username)} style={textInputStyle('30%').textinput}></TextInput>
            <Text style={textLabelStyle('40%').textlabel}>Email</Text>
            <TextInput editable placeholder = 'yourname@mail.com' value = {email} onChangeText={email => onChangeEmail(email)} style={textInputStyle('45%').textinput}></TextInput>
            <Text style={textLabelStyle('55%').textlabel}>Password</Text>
            <TextInput editable placeholder = 'Password' value = {password} onChangeText={password => onChangePassword(password)} style={textInputStyle('60%').textinput}></TextInput>
            <Text style={textLabelStyle('70%').textlabel}>Confirm Password</Text>
            <TextInput editable placeholder = 'Confirm Password' value = {confirmPassword} onChangeText={confirmPassword => onChangeConfirmPassword(confirmPassword)} style={textInputStyle('75%').textinput}></TextInput>
            <TouchableOpacity style={styles.signupButton} onPress={()=>onSubmit(username, email, password, confirmPassword)}>
                <Image source={require('./assets/signup_button.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const onSubmit = (usr, email, pwd, confirmPassword) => {
    console.log(usr);
    console.log(email);
    console.log(pwd);
    console.log(confirmPassword);
    fetch('http://10.0.0.66:4000/addUser/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: usr,
            password: pwd,
        }),
    })
    .then(
        console.log("User added")
    );
}

export default Profile;