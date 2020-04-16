import React from 'react'
import {  View,  ScrollView, Dimensions } from 'react-native'
import Title from './Title';
import Description from './Description';
import Phone from './Phone';
import Map from './Map';
import RateThisService from './RateThisService';
import RatingChart from './RatingChart';
import dummyData from './dummyData';
import ClientReview from './ClientReview';

export default class VideoExample extends React.Component {
    render() {
        return (
            <ScrollView >
                <View style={{  paddingBottom: 50 }}>
                    <Title dummyData={dummyData} />
                    <Description />
                    <Phone />
                    <Map />
                    <RateThisService />
                    <RatingChart dummyData={dummyData} />
                    <ClientReview dummyData={dummyData} />
                </View>
            </ScrollView>
        )
    }
}
