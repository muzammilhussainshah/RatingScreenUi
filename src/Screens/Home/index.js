import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, } from 'react-native'
import {  Button } from 'native-base'
import Head from '../../Components/Head';
import { connect } from 'react-redux';
import Footer from '../../Components/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppContent from '../../Components/AppContent';
import Video, { ScrollView, Container } from 'react-native-af-video-player'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { asset } = this.props
        console.log(asset, "stateee")
        return (
            <View style={{ flex: 1, }}>
                {/* body */}
                <View style={{ flex: 9, backgroundColor: "white" }}>
                    <AppContent/>
                </View>
                {/* Footer */}
                <View style={{ flex: 1, backgroundColor: "brown" }}>
                <Button rounded info style={{ justifyContent: "center" }}>
                    <Text>GO THERE</Text>
                </Button>
                </View>
            </View>
        )
    }
}

Home['navigationOptions'] = ({ navigation }) => {
    return {
        title: 'Big Mac@ss',
        headerStyle: {
            elevation: 0,
            shadowColor: 'transparent',
        },
        headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                    name="md-arrow-back"
                    size={24}
                    style={{ paddingLeft: 15 }}
                />
            </TouchableOpacity>
        ),
    };
    // }
};
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    videoContainer: {
        // margin: 10
    }
})
function mapStateToProps(state) {
    return ({
        asset: state.root.fetchQueue,
    })
}
function mapDispatchToProps(dispatch) {
    return {
        fetchQueue: (asset) => {
            dispatch(fetchQueue(asset));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
