import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { index, url, iSMoreVideo, playPause } = this.state
        const { dummyData } = this.props
        return (
            <View style={{ backgroundColor: "green", elevation: 1, width: "100%", height: screenHeight / 3.5 }}>
                <ImageBackground resizeMode="cover" style={{ width: "100%", height: screenHeight / 3.5 }} source={require("../Assets/ab.png")} >
                    <View style={{ position: "absolute", }}>
                        {/* <View>
                        </View> */}
                        <View style={{ padding: "5%", }}>
                            <View>
                                <Image resizeMode="contain" style={{ height: 50, width: 50, }} source={require("../Assets/Image17.png")} />
                                <Text style={{ fontWeight: "bold", fontSize: 22, width: 150, marginTop: "5%", color: Colors.primary }}>Double Quarter Pounder@ with Cheese</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", bottom: "10%" }}>
                                    <View>
                                        <Text style={{ color: Colors.primary }}>$20.00</Text>
                                    </View>
                                    <View style={{ marginLeft: "10%", flexDirection: "row" }}>
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="star"
                                                size={20}
                                                style={{ color: dummyData.Services[0].AverageRatings > 0 ? "orange" : "white" }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="star"
                                                size={20}
                                                style={{ color: dummyData.Services[0].AverageRatings > 1 ? "orange" : "white" }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="star"
                                                size={20}
                                                style={{ color: dummyData.Services[0].AverageRatings > 2 ? "orange" : "white" }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="star"
                                                size={20}
                                                style={{ color: dummyData.Services[0].AverageRatings > 3 ? "orange" : "white" }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <AntDesign
                                                name="star"
                                                size={20}
                                                style={{ color: dummyData.Services[0].AverageRatings > 4 ? "orange" : "white" }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                      <View style={{position:"absolute",width:200,height:200,right:0}}>
                                <Image source={require("../Assets/burger.png")} resizeMode="contain" style={{width:"100%",height:"100%"}} />
                            </View>
                </ImageBackground>
            </View>


        )
    }
}
