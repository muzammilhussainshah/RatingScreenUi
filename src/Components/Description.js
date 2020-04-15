import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const screenHeight = Math.round(Dimensions.get('window').height);
export default class Description extends React.Component {
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
            <View style={{ padding: "3%" }}>
                <Text style={{ color: "black" }}>Description</Text>
                <Text style={{ marginTop: "2%" }}>The restaurent has an extensive selection of fresh fish flown in daily from the sea of Japan as well as both the atlantic an pacific oceans.</Text>
            </View>
        )
    }
}
