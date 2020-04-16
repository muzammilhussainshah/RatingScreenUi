import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Map from './Map';
const screenHeight = Math.round(Dimensions.get('window').height);
import { Colors } from '../Const/index';

export default class Phone extends React.Component {
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
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ flexDirection: "row", alignItems: "center", padding: "2%" }}>
                    <Image style={{ width: 40, height: 40 }} source={require("../Assets/call.png")} />
                    <Text style={{ marginLeft: "5%",color: Colors.primary, }}>+1(828) 832-4256</Text>
                </TouchableOpacity>
        )
    }
}
