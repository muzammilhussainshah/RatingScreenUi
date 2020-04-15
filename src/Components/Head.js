import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Video from 'react-native-af-video-player'
import { Container, Header, Content, Button, } from 'native-base';
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
        const { index, url } = this.state
        return (
            <>
                <View style={{ flex: 2 }}>
                    <Image resizeMode="contain" source={require("../Assets/1.png")} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={{ flex: 8 }}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Video App</Text>
                </View>
            </>
        )
    }
}
