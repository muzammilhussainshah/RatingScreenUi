import React from 'react'
import { Text, View, } from 'react-native'
import { Colors } from '../Const/index';

export default Description = ({ navigation }) => {
    return (
        <View style={{ padding: "3%" }}>
            <Text style={{ color: Colors.primary, fontWeight: "bold", fontSize: 16 }}>Description</Text>
            <Text style={{ marginTop: "2%", color: Colors.primary, fontSize: 13 }}>The restaurent has an extensive selection of fresh fish flown in daily from the sea of Japan as well as both the atlantic an pacific oceans.</Text>
        </View>
    );
};