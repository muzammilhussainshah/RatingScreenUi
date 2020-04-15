import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const screenHeight = Math.round(Dimensions.get('window').height);

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
                style={{flexDirection:"row",alignItems:"center",padding:"2%" }}>
                 <Image style={{width:50,height:50}} source={require("../Assets/1.jpg")} />
                <Text  style={{marginLeft:"5%"}}>+1(828) 832-4256</Text>
                </TouchableOpacity>

               
        )
    }
}
