import React from 'react'
import { Text,  View, TouchableOpacity,  Dimensions,  } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../Const/index';

export default class ClientReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: 0
        };
    }
    UNSAFE_componentWillMount() {
        const { dummyData } = this.props
        this.setState({
            star: dummyData.Ratings[1].UserRating
        })
    }
    render() {
        const { dummyData } = this.props
        const { star } = this.state
        return (
            <View style={{ paddingHorizontal: "3%" }}>
                <View style={{ flexDirection: "row", flex: 1}}>
                    <View style={{ flex: 1.5, }}>
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

                    {[0,1,2,3,4].map((v, i) => {
                        return (
                            <View>
                            <AntDesign
                                name={"star"}
                                size={12}
                                style={{ color: star > i ? "#FFB900" : "#D9D9DE", }}
                            />
                        </View>
                        )
                    })}

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
