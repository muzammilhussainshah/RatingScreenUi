import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Title from './Title';
import Description from './Description';
import Phone from './Phone';
import Map from './Map';
import RateThisService from './RateThisService';
import RatingAndReviews from './RatingAndReviews';
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
        console.log(asset, "assetasset")
        return (
            <ScrollView style={{ }}>
                <Title/>
                <Description/>
                <Phone/>
                <Map/>
                <RateThisService/>
                <RatingAndReviews/>
               
            </ScrollView>
        )
    }
}
