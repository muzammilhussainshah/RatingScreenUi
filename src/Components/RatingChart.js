import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import { Textarea, Button } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';
// import Map from './Map';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class RatingChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { index, url, iSMoreVideo, playPause } = this.state
        const { dummyData} = this.props
        return (
            <View style={{ padding: "3%", }}>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: Colors.primary, }}>Rating and reviews</Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 5,alignItems:"flex-end", }}>
                        <View style={{width:"100%",alignItems:"center",}}>
                            <View style={{alignItems: "flex-end" }}>
                                <Text style={{ fontSize: 42,color: Colors.primary, }}>4.2</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end",  }}>
                                <View>
                                    <AntDesign
                                        name="star"
                                        size={15}
                                        style={{ color: "orange" }}
                                    />
                                </View>
                                <View>
                                    <AntDesign
                                        name="star"
                                        size={15}
                                        style={{ color: "orange" }}
                                    />
                                </View>
                                <View>
                                    <AntDesign
                                        name="star"
                                        size={15}
                                        style={{ color: "orange" }}
                                    />
                                </View>
                                <View>
                                    <AntDesign
                                        name="star"
                                        size={15}
                                        style={{ color: "orange" }}
                                    />
                                </View>
                                <View>
                                    <AntDesign
                                        name="star"
                                        size={15}
                                        style={{ color: "orange" }}
                                    />
                                </View>
                            </View>
                            <View style={{  alignItems: "flex-end" }}>
                                <Text style={{color: Colors.primary,}}>31,459</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{  flex: 5 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <View><Text>5</Text></View>
                            <View style={{ backgroundColor: "#EBEBF3", width: "80%", borderRadius: 100, height: 10 }}>
                                <View style={{ backgroundColor: "#509AFF", width: "70%", borderRadius: 100, height: 10 }}>
                                    <Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <View><Text>4</Text></View>
                            <View style={{ backgroundColor: "#EBEBF3", width: "80%", borderRadius: 100, height: 10 }}>
                                <View style={{ backgroundColor: "#509AFF", width: "30%", borderRadius: 100, height: 10 }}>
                                    <Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <View><Text>3</Text></View>
                            <View style={{ backgroundColor: "#EBEBF3", width: "80%", borderRadius: 100, height: 10 }}>
                                <View style={{ backgroundColor: "#509AFF", width: "20%", borderRadius: 100, height: 10 }}>
                                    <Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <View><Text>2</Text></View>
                            <View style={{ backgroundColor: "#EBEBF3", width: "80%", borderRadius: 100, height: 10 }}>
                                <View style={{ backgroundColor: "#509AFF", width: "10%", borderRadius: 100, height: 10 }}>
                                    <Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                            <View><Text>1</Text></View>
                            <View style={{ backgroundColor: "#EBEBF3", width: "80%", borderRadius: 100, height: 10 }}>
                                <View style={{ backgroundColor: "#509AFF", width: "25%", borderRadius: 100, height: 10 }}>
                                    <Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            // <Text style={{ marginLeft: "5%" }}>+1(828) 832-4256</Text>
        )
    }
}
