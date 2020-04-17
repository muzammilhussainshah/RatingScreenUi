import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';

export default RatingChart = () => {
    return (
        <View style={{ padding: "3%", }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: Colors.primary, }}>Rating and reviews</Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 5, alignItems: "flex-end", }}>

                    <View style={{ width: "100%", alignItems: "center", }}>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={{ fontSize: 42, color: Colors.primary, }}>4.2</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", }}>
                            {[0, 1, 2, 3, 4].map((v, i) => {
                                return (
                                    <View>
                                        <AntDesign
                                            name="star"
                                            size={15}
                                            style={{ color: "orange" }}
                                        />
                                    </View>
                                )
                            })}
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={{ color: Colors.primary, }}>31,459</Text>
                        </View>
                    </View>

                </View>
                <View style={{ flex: 5 }}>

                    {[{rate:5,percent:"70%"}, {rate:4,percent:"30%"},{rate:3,percent:"20%"}, {rate:2,percent:"10%"}, {rate:1,percent:"25%"}].map((v, i) => {
                        return (
                            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                <View><Text>{v.rate}</Text></View>
                                <View style={{ backgroundColor: "#EBEBF3", width: "80%", borderRadius: 100, height: 10 }}>
                                    <View style={{ backgroundColor: "#509AFF", width: v.percent, borderRadius: 100, height: 10 }}>
                                        <Text></Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}

                </View>
            </View>
        </View>
    )
}
