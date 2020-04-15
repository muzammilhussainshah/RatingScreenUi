import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground, Image } from 'react-native'
//componets
import Head from "../../Components/Head"
import CommentBox from "../../Components/CommentBox"
import Comments from "../../Components/Comments"
import Tab from "../../Components/Tab"
import AppContent from "../../Components/AppContent"
import FooterTab from "../../Components/FooterTab"

class Menu extends Component {
    constructor() {
        super()
        this.state = {
        }
    }


    render() {
        return (

            <ImageBackground source={require("../../Assets/Groupground.png")}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    {/*head */}
                    <View style={{ flex: 1, paddingTop: "1%",paddingHorizontal:"3%",justifyContent:"center" }}>
                        <Tab img={require("../../Assets/Rectangle.png")} name="Russel lee" time="01:08:30" />
                    </View>
                    {/* body*/}
                    <View style={{ flex: 8, paddingTop: "1%",paddingHorizontal:"3%",justifyContent:"center" }}>
                       <AppContent/>
                    </View>
                    {/* footer */}
                    <View style={{ flex: 1, paddingTop: "1%",paddingHorizontal:"3%",justifyContent:"center" , }}>
                        <FooterTab />
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // flexDirection: "column",
        // backgroundColor: "red"
    },
})
