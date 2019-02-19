import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    {
        text: 'Welcome to JobApp',
        color: "#FAC484"
    },
    {
        text: 'Use this to find the perfect Job!',
        color: "#FBD786"
    },
    {
        text: 'Set your location, then swipe away!',
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