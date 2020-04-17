import React from 'react'
import { Text, View, Image, Dimensions, ImageBackground,  } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';
const screenHeight = Math.round(Dimensions.get('window').height);

export default Title = ({ navigation,dummyData }) => {
        return (
            <View style={{elevation: 1, width: "100%", height: screenHeight / 3.5 }}>
                <ImageBackground resizeMode="cover" style={{ width: "100%", height: screenHeight / 3.5 }} source={require("../Assets/ab.png")} >
                    <View style={{ position: "absolute", justifyContent: "flex-end", padding: "5%", height: screenHeight / 3.5 }}>
                        <Image resizeMode="contain" style={{ height: 40, width: 40, }} source={require("../Assets/Image17.png")} />
                        <View style={{ marginTop: "5%" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 22, width: 150, color: Colors.primary, }}>Double Quarter Pounder@ with Cheese</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <View>
                                <Text style={{ color: Colors.primary }}>$20.00</Text>
                            </View>
                            <View style={{ marginLeft: "10%", flexDirection: "row" }}>
                                {/* rating stars */}
                                {[0, 1, 2, 3, 4].map((v, i) => {
                                    return (
                                        <View>
                                            <AntDesign
                                                name="star"
                                                size={20}
                                                style={{ color: dummyData.Services[0].AverageRatings > i ? "orange" : "white" }}
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={{ position: "absolute", width: 200, height: 200, right: 0 }}>
                        <Image source={require("../Assets/burger.png")} resizeMode="contain" style={{ width: "100%", height: "100%" }} />
                    </View>
                </ImageBackground>
            </View>
        )
    }
