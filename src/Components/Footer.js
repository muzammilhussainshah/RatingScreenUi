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
                <TouchableOpacity style={{  padding: 5, alignItems: "center", borderRadius: 5 }}>
                  <Image resizeMode="contain" source={require("../Assets/back.png")} style={{width:50,height:50}} />
                </TouchableOpacity>
                <TouchableOpacity style={{  padding: 5, alignItems: "center", borderRadius: 5 }}>
                  <Image resizeMode="contain" source={require("../Assets/resume.png")} style={{width:50,height:50}} />
                </TouchableOpacity>
                <TouchableOpacity style={{  padding: 5, alignItems: "center", borderRadius: 5 }}>
                  <Image resizeMode="contain" source={require("../Assets/forward.png")} style={{width:50,height:50}} />
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ backgroundColor: "#FF8A00",  padding: 5, alignItems: "center", borderRadius: 5 }}>
                  <Image resizeMode="contain" source={require("../Assets/back.png")} style={{width:50,height:50}} />
                </TouchableOpacity> */}
                {/* <TouchableOpacity style={{ backgroundColor: "#FF8A00", width: 100, padding: 5, alignItems: "center", borderRadius: 5 }}>
                    <Text style={{ color: "white" }}>Next</Text>
                </TouchableOpacity> */}
            </>
        )
    }
}
