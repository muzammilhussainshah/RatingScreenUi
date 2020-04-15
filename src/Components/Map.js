import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const screenHeight = Math.round(Dimensions.get('window').height);
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const { index, url, iSMoreVideo, playPause } = this.state
        const { asset } = this.props
        console.log(asset, "assetasset")
        return (
            <View style={styles.mapContainer}>
              <Text>aaa</Text>
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}></MapView>
          </View>

               
        )
    }
}

const styles = StyleSheet.create({
    topBarContainer: {
      height: 40,
      backgroundColor: "red",
      alignItems: 'center',
    },
    topBarText: { color:"red", fontSize: 16, textAlign: 'center' },
    mapContainer: {
      // ...StyleSheet.absoluteFillObject,
      // flex: 0.9,
      height: 150,
      width: '100%',
      backgroundColor:"red",
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  