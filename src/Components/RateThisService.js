import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Textarea, } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';

export default class RateThisService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: 0
        };
    }
    render() {
        const { star } = this.state
        return (
            <View style={{ padding: "3%", marginTop: "2%" }}>
                <Text style={{ fontWeight: "bold", fontSize: 16, color: Colors.primary, }}>Rate This Service</Text>
                <Text style={{ fontSize: 13, color: Colors.primary, }}>Tell other what you think</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: "5%" }}>
                    {[0, 1, 2, 3, 4].map((v, i) => {
                        return (
                            <TouchableOpacity onPress={() => this.setState({ star: i+1 })}>
                                <AntDesign
                                    name={star > i ? "star" : "staro"}
                                    size={40}
                                    style={{ color: star > i ? "orange" : Colors.primary, }}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Textarea rowSpan={5} bordered placeholder="Write a review" />
                <View style={{ marginTop: "5%" }}>
                    <TouchableOpacity activeOpacity={0.6} style={{ justifyContent: "center", elevation: 3, backgroundColor: Colors.secondry, width: "30%", height: 35, borderRadius: 20 }}>
                        <Text style={{ alignSelf: "center", color: Colors.white, }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
