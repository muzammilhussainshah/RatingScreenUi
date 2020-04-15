import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import { Textarea, Button } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Map from './Map';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class RatingAndReviews extends React.Component {
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
            <View style={{ padding: "3%", }}>
                <Text style={{ fontWeight: "bold" }}>Rating and reviews</Text>
                <View style={{ backgroundColor: "red", flex: 1, flexDirection: "row" }}>
                    <View style={{ backgroundColor: "green", flex: 5, }}>
                        <View style={{ backgroundColor: "orange", paddingHorizontal:"20%",alignItems:"flex-end" }}>
                            <Text style={{ fontSize: 42 }}>4.2</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="star"
                                            size={20}
                                            style={{ color:"orange" }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="star"
                                            size={20}
                                            style={{ color:"orange" }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="star"
                                            size={20}
                                            style={{ color:"orange" }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="star"
                                            size={20}
                                            style={{ color:"orange" }}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <AntDesign
                                            name="star"
                                            size={20}
                                            style={{ color:"orange" }}
                                        />
                                    </TouchableOpacity>
                                </View>
                    </View>
                    <View style={{ backgroundColor: "blue", flex: 5, }}>
                        <Text>asss</Text>

                    </View>
                </View>

            </View>
            // <Text style={{ marginLeft: "5%" }}>+1(828) 832-4256</Text>
        )
    }
}
