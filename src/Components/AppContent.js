import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Title from './Title';
import Description from './Description';
import Phone from './Phone';
import Map from './Map';
import RateThisService from './RateThisService';
import RatingChart from './RatingChart';
import dummyData from './dummyData';
import ClientReview from './ClientReview';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class VideoExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { index, url, iSMoreVideo, playPause } = this.state
        const { asset } = this.props
        console.log(dummyData,"dummyData")
        console.log(asset, "assetasset")
        return (
            <ScrollView style={{ }}>
                <Title dummyData={dummyData}/>
                <Description/>
                <Phone/>
                <Map/>
                <RateThisService/>
                <RatingChart dummyData={dummyData}/>
                <ClientReview dummyData={dummyData}/>
               
            </ScrollView>
        )
    }
}
