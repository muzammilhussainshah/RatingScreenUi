import React from 'react'
import { Text, TouchableOpacity, Image, } from 'react-native'
import { Colors } from '../Const/index';

export default Phone = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: "row", alignItems: "center", padding: "2%" }}>
            <Image style={{ width: 40, height: 40 }} source={require("../Assets/call.png")} />
            <Text style={{ marginLeft: "5%", color: Colors.primary, }}>+1(828) 832-4256</Text>
        </TouchableOpacity>
    )
}
