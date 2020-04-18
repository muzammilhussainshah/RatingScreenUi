import React from 'react'
import { View, ScrollView, } from 'react-native'
import Title from './Title';
import Description from './Description';
import Phone from './Phone';
import Map from './Map';
import RateThisService from './RateThisService';
import RatingChart from './RatingChart';
import dummyData from './dummyData';
import ClientReview from './ClientReview';

export default AppContent = () => {
    return (
        <ScrollView style={{}} >
            {/* <View style={{ }}> */}
                <Title dummyData={dummyData} />
                <Description />
                <Phone />
                <Map />
                <RateThisService />
                <RatingChart dummyData={dummyData} />
                <ClientReview dummyData={dummyData} />
            {/* </View> */}
        </ScrollView>
    )
}
