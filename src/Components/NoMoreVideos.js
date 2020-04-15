import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Video from 'react-native-af-video-player'
import * as Animatable from 'react-native-animatable';
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
        const { func } = this.props
        return (
            <Animatable.View
                animation="pulse"
                style={{
                    position: "absolute", zIndex: 1, backgroundColor: "white", width: "80%", height: 165,
                    marginHorizontal: "9.5%", marginVertical: "20%",
                    flexDirection: "column",
                    borderWidth: 1,
                    marginVertical: "60%",
                    borderRadius: 12,
                    borderColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 14,
                    elevation: 115,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                    // marginLeft: 5,
                    // marginRight: 5,
                    // marginTop: 10,
                }}>
                <View style={{ height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "orange" }}>
                    <View
                        style={{ flexDirection: "row", color: "white" }}
                    >
                        <Text style={{ color: "white", fontFamily: 'Verdana-Bold', }}>
                            Notification !
</Text>
                    </View>
                </View>
                <View style={{ height: 40, flexDirection: "row", justifyContent: "center", marginTop: 25 }}>
                    <View style={styles.input}>
                        <Text style={{ textAlign: "center", fontFamily: 'Verdana-Bold', color: "grey" }}>
                            {/* Thank You for the Order, Our representative will call you back shortly */}
                            No Videos in Queue
                  </Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity style={{
                        justifyContent: "center", alignItems: "center", height: 45, width: "80%",
                        backgroundColor: "orange", borderWidth: 0.75, borderColor: 'orange',
                    }}
                        onPress={() => func()}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", fontFamily: 'Verdana-Bold', textAlign: "center" }}> Ok </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        )
    }
}
