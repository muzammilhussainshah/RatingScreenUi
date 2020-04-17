import React from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default MapComp = () => {
        return (
            <View style={styles.mapContainer}>
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

const styles = StyleSheet.create({
    topBarContainer: {
      height: 40,
      backgroundColor: "red",
      alignItems: 'center',
    },
    topBarText: { color:"red", fontSize: 16, textAlign: 'center' },
    mapContainer: {
      height: 150,
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      height: 150,
      width: '100%',
      // ...StyleSheet.absoluteFillObject,
    },
  });
  