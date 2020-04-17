import React from 'react'
import { Text, TouchableOpacity, Image, } from 'react-native'
import { Colors } from '../Const/index';

export default Phone = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: "3%",height:70 }}>
            <Image style={{ width: 35, height: 35 }} source={require("../Assets/call.png")} />
            <Text style={{ marginLeft: "5%", color: Colors.primary, }}>+1(828) 832-4256</Text>
        </TouchableOpacity>
    )
}
