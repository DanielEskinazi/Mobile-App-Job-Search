import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';
import axios from 'axios';

//const google_maps_API_KEY = '&key=AIzaSyB6BoeEmA0nRg2mzvnzL2VkHILnSx2npOs';  
//const GOOGLE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const Locations_url = 'https://authenticjobs.com/api/?api_key=ae14c2e712c6c2cffa632aa9ec8a1386&method=aj.jobs.getlocations'



function getlocations () {
  //  const url = GOOGLE_URL + city + google_maps_API_KEY;
   // const temp = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=';
   axios.get(Locations_url)
   .then(function (response) {
        //console.log(response);   
        return response; 
   })
   .catch(function(error){
       console.log("ERROR: "+error)
   })
 
    
}

class DeckScreen extends Component {

    

    renderCard(job) {

        const Locations = getlocations();
        console.log("===========*=============");
        console.log("===========***=============");
        console.log("===========*****=============");
        console.log("===========*******=============");
        console.log("===========*********=============");
        console.log(Locations);
        
        const initialRegion = { 
            longitude: 0,
            latitude: 0,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        }    

        return (
            <Card title={job.title}>
                {/* 
                MAP if you are able to get latitude and longitude in API
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{flex:1}}
                        cacheEnabled={ Platform.OS === 'android' ? true : false }
                        initialRegion={initialRegion}
                    >

                    </MapView>
                </View> */}
                
                <View style={styles.detailWrapper}>
                    <Text>{job.company.name}</Text>
                    {/* <Text>{job.company.location}</Text> */}
                    <Text>{job.post_date.substr(0,10)}</Text>
                </View>
                <Text>
                    {job.description.replace(/<b>/g,'').replace(/<\/b/g,'')}
                </Text>
            </Card>
        );
    }

    renderNoMoreCards() {
        return(
            <Card title="No more jobs">

            </Card>
        );
    }

    render() {
        return (
            <View>
                <Swipe 
                    data={this.props.jobs}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards}
                />
            </View>
        )
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}


function formatDate({ date }) {
    var str = String(date);
    return str.substr(0,9);
}

function mapStateToProps({ jobs }) {
    const { listings } = jobs;
    const { listing }  = listings;
    console.log('\n=\n=\n=\n=\n\n=\n=\n=\n=\n\n=\n=\n=\n=\n\n=\n=\n=\n=\n job_list:', listing);
    // console.log('\n=\n=\n=\n=\n\n=\n=\n=\n=\n\n=\n=\n=\n=\n\n=\n=\n=\n=\n data:', jobs);
    // console.log('\n=\n=\n=\n=\n\n=\n=\n=\n=\n\n=\n=\n=\n=\n\n=\n=\n=\n=\nlistings:', listings);
    return { jobs: listing }
}

export default connect(mapStateToProps)(DeckScreen);