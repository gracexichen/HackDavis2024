// code by https://developer.tomtom.com/blog/build-different/using-tomtom-maps-web-sdk-react-native-web-view-app/
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
//import Geolocation from '../node_modules/react-native-geolocation-service';
//import Geolocation from '@react-native-community/geolocation';
export const Sighting = () => {
  return (
    <View>
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} onDragEnd={ (e) => alert(JSON.stringify(e.nativeEvent.coordinate)) } 
          title={'Doug'} description="Last seen: Today -- Address: U-Center"> 
          </Marker>
        </View>
);
}

export default function Map() {    
    const get_currLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("Permission to access location was denied");
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        return {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
      };

    const [curr_location, setLocation] = useState(() => get_currLocation());
    
    useEffect(() => {
      const watchID = Location.watchPositionAsync({ accuracy: Location.Accuracy.Highest,  distanceInterval: 2 }, (position) => {
        setLocation(JSON.parse(JSON.stringify(position.coords)));
      });
    }, [])

  return (
    <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          mapType={'hybrid'}
          initialRegion={
            curr_location
          }
          customMapStyle={mapStyle}>
          <Sighting></Sighting>
          <Marker coordinate={ curr_location } onDragEnd={ (e) => alert(JSON.stringify(e.nativeEvent.coordinate)) } 
          title={'Your Location'}> 
            <Image source={require('../assets/blue_nav_circle.png')} style={{height: 35, width:35 }} />
          </Marker>
        </MapView>
      </View>
  );
}

const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
  ];
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    markerStyle: {
      position: 'relative',
    },
  });