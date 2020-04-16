import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import { Textarea, Button } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Map from './Map';
const screenHeight = Math.round(Dimensions.get('window').height);
import { Colors } from '../Const/index';

export default class RateThisService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: 0
        };
    }
    render() {
        const { star } = this.state
        const { asset } = this.props
        console.log(asset, "assetasset")
        return (
            <View style={{ padding: "3%", marginTop: "2%" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: Colors.primary, }}>Rate This Service</Text>
                <Text style={{ fontSize: 13, color: Colors.primary, }}>Tell other what you think</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: "5%" }}>
                    <TouchableOpacity onPress={() => this.setState({ star: 1 })}>
                        <AntDesign
                            name={star > 0 ? "star" : "staro"}
                            size={40}
                            style={{ color: star > 0 ? "orange" : Colors.primary, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ star: 2 })}>
                        <AntDesign
                            name={star > 1 ? "star" : "staro"}
                            size={40}
                            style={{ color: star > 1 ? "orange" : Colors.primary, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ star: 3 })}>
                        <AntDesign
                            name={star > 2 ? "star" : "staro"}
                            size={40}
                            style={{ color: star > 2 ? "orange" : Colors.primary, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ star: 4 })}>
                        <AntDesign
                            name={star > 3 ? "star" : "staro"}
                            size={40}
                            style={{ color: star > 3 ? "orange" : Colors.primary, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ star: 5 })}>
                        <AntDesign
                            name={star > 4 ? "star" : "staro"}
                            size={40}
                            style={{ color: star > 4 ? "orange" : Colors.primary, }}
                        />
                    </TouchableOpacity>
                </View>
                <Textarea rowSpan={5} bordered placeholder="Write a review" />
                <View style={{ marginTop: "5%" }}>
                    <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: "center",elevation:3, backgroundColor: Colors.secondry, width: "30%",height:35,borderRadius:20 }}>
                        <Text style={{ alignSelf: "center", color: Colors.white,  }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            // <Text style={{ marginLeft: "5%" }}>+1(828) 832-4256</Text>
        )
    }
}
