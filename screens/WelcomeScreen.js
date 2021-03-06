import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
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

    state = { token: null }

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');
        
        if (token) {
            this.props.navigation.navigate('map');
            this.setState({ token });
        } else {
            this.setState({ token: false })
        }
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        if (_.isNull(this.state.token)){
            return <AppLoading />
        }
        return (
            <View>
                <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
            </View>
        )
    }
}

export default WelcomeScreen;