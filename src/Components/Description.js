import React from 'react'
import { Text, View, } from 'react-native'
import { Colors } from '../Const/index';

export default Description = () => {
    return (
        <View style={{ padding: "3%", borderBottomColor: "#D1D8E3", borderBottomWidth: 0.2 }}>
            <Text style={{ color: Colors.primary, fontSize: 16 }}>Description</Text>
            <Text style={{ marginTop: "2%", color: Colors.primary, fontSize: 13, flex: 1 }}>The restaurent has an extensive selection of fresh fish flown in daily from the sea of Japan as well as both the atlantic an pacific oceans.</Text>
        </View>
    );
};