import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, } from 'react-native'
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppContent from '../../Components/AppContent';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
            {/* body */}
            <View style={{ flex: 8.6, backgroundColor: "white" }}>
                <AppContent />
            </View>
            {/* Footer */}
            <View style={{ flex: 1.4, alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#fff" }}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                        backgroundColor: "#57A4FF", justifyContent: "center", width: "80%", height: 50, borderRadius: 50, justifyContent: "center",
                        alignItems: "center",
                        elevation: 5,
                    }}>
                    <Text style={{ color: Colors.white }}>GO THERE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

Home['navigationOptions'] = ({ navigation }) => {
    return {
        headerTitle: <Text style={{fontSize:16}}>Big Mac@</Text>,
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
};

function mapStateToProps(state) {
    return ({
    })
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
