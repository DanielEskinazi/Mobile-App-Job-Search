import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {
        text: 'Welcome to PetMate',
        color: "#FAC484"
         
    },
    {
        text: 'Find a match for your Pet!',
        color: "#FBD786"
        
    },
    {
        text: '1) Set your profile\n2) Find local matches\n3) Set a date to PetMate!',
        color: "#f7797d"
    }
];

class WelcomeScreen extends Component {

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <View>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
            </View>
        )
    }
}

export default WelcomeScreen;