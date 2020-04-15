import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import { Textarea, Button } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Map from './Map';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class RateThisService extends React.Component {
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
            <View style={{ padding: "3%", marginTop: "2%" }}>
                <Text style={{ fontWeight: "bold" }}>Rate This Service</Text>
                <Text style={{ fontSize: 13 }}>Tell other what you think</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: "5%" }}>
                    <TouchableOpacity>
                        <AntDesign
                            name="staro"
                            size={40}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign
                            name="staro"
                            size={40}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign
                            name="staro"
                            size={40}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign
                            name="staro"
                            size={40}
                            style={{}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign
                            name="staro"
                            size={40}
                            style={{}}
                        />
                    </TouchableOpacity>
                </View>
                <Textarea rowSpan={5} bordered placeholder="Textarea" />
                <Button rounded info style={{ width: "30%", justifyContent: "center",marginTop:"5%" }}>
                    <Text>Submit</Text>
                </Button>

            </View>
            // <Text style={{ marginLeft: "5%" }}>+1(828) 832-4256</Text>
        )
    }
}
