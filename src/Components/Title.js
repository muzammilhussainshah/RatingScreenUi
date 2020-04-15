import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Title extends React.Component {
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
                <View style={{ backgroundColor: "green",elevation:1, width: "100%", height: screenHeight / 3.5 }}>
                    <Image resizeMode="cover" style={{ width: "100%", height: screenHeight / 3.5 }} source={require("../Assets/1.jpg")} />
                    <View style={{ position: "absolute" }}>
                        {/* <View>
                        </View> */}
                        <View style={{ padding: "5%" }}>
                            <Image resizeMode="contain" style={{ height: 40, width: 40, }} source={require("../Assets/Oval.png")} />
                            <Text style={{ fontWeight: "bold", fontSize: 22, width: 150,marginTop:"5%", }}>Double Quarter Pounder@ with Cheese</Text>
                            <View style={{ flexDirection: "row",alignItems:"center",bottom:"10%" }}>
                                <View>
                                    <Text>$20.00</Text>
                                </View>
                                <View style={{ marginLeft:"10%",flexDirection: "row" }}>
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
                        </View>
                    </View>

                </View>

               
        )
    }
}
