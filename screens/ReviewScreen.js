import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerRight: (
                <Button 
                title="Settings" 
                type="clear"
                onPress={ () => navigation.navigate('settings') } 
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0,122,255,1)"
                />
            ),
            headerStyle: {
                
            }, 
            
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        };
       
    };
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        )
    }
}

export default ReviewScreen;