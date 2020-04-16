import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions, ImageBackground } from 'react-native'
import { Picker, Item } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';
const screenHeight = Math.round(Dimensions.get('window').height);

export default class ClientReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: 0
        };
    }
    UNSAFE_componentWillMount() {
        const { dummyData } = this.props
        const { star } = dummyData.Ratings[1].UserRating
        this.setState({
            star: dummyData.Ratings[1].UserRating
        })
    }
    render() {
        const { dummyData } = this.props
        const { star } = this.state
        return (
            <View style={{ padding: "3%" }}>
                <View style={{ flexDirection: "row", flex: 1.5 }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ backgroundColor: "#BC1CEA", width: 42, height: 42, borderRadius: 21, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: Colors.white }}>{dummyData.Ratings[0].UserRatingName[0]}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 7, justifyContent: "center", paddingHorizontal: 25 }}>
                        <Text style={{ color: Colors.primary }}>{dummyData.Ratings[0].UserRatingName}</Text>
                    </View>
                    <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity>
                            <Entypo name="dots-three-vertical" style={{ color: Colors.primary, fontSize: 18 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingVertical: "3%" }}>
                    <View style={{ flexDirection: "row", }}>
                        <View onPress={() => this.setState({ star: 1 })}>
                            <AntDesign
                                name={"star"}
                                size={15}
                                style={{ color: star > 0 ? "orange" : "#D9D9DE", }}
                            />
                        </View>
                        <View onPress={() => this.setState({ star: 2 })}>
                            <AntDesign
                                name={"star"}
                                size={15}
                                style={{ color: star > 1 ? "orange" : "#D9D9DE", }}
                            />
                        </View>
                        <View onPress={() => this.setState({ star: 3 })}>
                            <AntDesign
                                name={"star"}
                                size={15}
                                style={{ color: star > 2 ? "orange" : "#D9D9DE", }}
                            />
                        </View>
                        <View onPress={() => this.setState({ star: 4 })}>
                            <AntDesign
                                name={"star"}
                                size={15}
                                style={{ color: star > 3 ? "orange" : "#D9D9DE", }}
                            />
                        </View>
                        <View onPress={() => this.setState({ star: 5 })}>
                            <AntDesign
                                name={"star"}
                                size={15}
                                style={{ color: star > 4 ? "orange" : "#D9D9DE", }}
                            />
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <Text style={{ color: Colors.primary, }}>{dummyData.Ratings[1].RatingDate}</Text>
                        </View>

                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ color: Colors.primary, }}>{dummyData.Ratings[1].UserComment}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
