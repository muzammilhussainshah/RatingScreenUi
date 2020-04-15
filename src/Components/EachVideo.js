import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Video from 'react-native-af-video-player'
import { Container, Header, Content, Button, } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default class VideoExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { func,title,time } = this.props
        return (
            <TouchableOpacity
                onPress={() => func()}
                activeOpacity={0.6}
                style={{
                    flexDirection: "row", backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: '#ddd',
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                }}>
                <View style={{ flex: 2,justifyContent:"center",alignItems:"center",padding:5 }}>
                    <AntDesign name='play' style={{ fontSize: 50, color: "#1E90FF" }} />

                    {/* <Image resizeMode="cover" source={require("../Assets/1.png")} style={{ width: 70, height: 70 }} /> */}
                </View>
                <View style={{ flex: 8, justifyContent: "center" }}>
            <Text style={{ fontSize: 14, color: "#3C3E3C" }}>{title}</Text>
            <Text style={{ fontSize: 12, color: "#3C3E3C" }}>0:{time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
