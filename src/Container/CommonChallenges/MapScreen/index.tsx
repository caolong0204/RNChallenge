import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MarkerCustom from './markerCustom';

const {width, height} = Dimensions.get('window');

// 1
const LATITUDE1 = 37.82825;
const LONGITUDE1 = -122.4824;
// NW
const LATITUDE_NE = 37.8658;
const LONGITUDE_NE = -122.4424;
// center
const LATITUDE_CENTER = 37.8458;
const LONGITUDE_CENTER = -122.4684;

// SW
const LATITUDE_SW = 37.8188;
const LONGITUDE_SW = -122.4924;
// 4
const LATITUDE4 = 37.8358;
const LONGITUDE4 = -122.4524;
// out of side
const LATITUDE_OVER = 37.8958;
const LONGITUDE_OVER = -122.4324;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

const EventListener = () => {
  const mapRef = useRef<MapView>(null);
  const [region, setRegion] = useState({
    latitude: LATITUDE_CENTER,
    longitude: LONGITUDE_CENTER,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const northEast = {latitude: LATITUDE_NE, longitude: LONGITUDE_CENTER};
  const southWest = {latitude: LATITUDE_SW, longitude: LONGITUDE_SW};
  const p1 = {latitude: LATITUDE1, longitude: LONGITUDE1};
  const p2 = {latitude: LATITUDE4, longitude: LONGITUDE4};
  const pOver = {latitude: LATITUDE_OVER, longitude: LONGITUDE_OVER};

  useEffect(() => {
    console.log('====hello');
    // setTimeout(() => {
    //   console.log('move');
    //   mapRef.current?.setMapBoundaries(northEast, southWest);
    // }, 500);

    // mapRef.current?.fitToCoordinates([northEast, southWest], {
    //   edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
    //   animated: true,
    // });
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        showsUserLocation
        showsMyLocationButton
        setMapBoundaries={[southWest, northEast]}
        ref={mapRef}>
        {/* top */}
        <MarkerCustom lat={LATITUDE1} long={LONGITUDE1} value="1" />
        <MarkerCustom lat={LATITUDE_NE} long={LONGITUDE_NE} value="NE" />
        {/* center */}
        <MarkerCustom
          lat={LATITUDE_CENTER}
          long={LONGITUDE_CENTER}
          value="Center"
        />
        {/* bottom */}
        <MarkerCustom lat={LATITUDE_SW} long={LONGITUDE_SW} value="SW" />
        <MarkerCustom lat={LATITUDE4} long={LONGITUDE4} value="4" />
        {/* out of side */}
        <MarkerCustom lat={LATITUDE_OVER} long={LONGITUDE_OVER} value="Over" />
      </MapView>
      <TouchableOpacity
        style={{backgroundColor: 'red', marginBottom: 50}}
        onPress={() => {
          mapRef.current?.fitToCoordinates(
            [southWest, northEast, p1, p2, pOver],
            {
              animated: true,
            },
          );
          // mapRef.current?.setMapBoundaries(p1, southWest);
        }}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  event: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 8,
  },
  eventData: {
    fontSize: 10,
    fontFamily: 'courier',
    color: '#555',
  },
  eventName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },
  eventList: {
    position: 'absolute',
    top: height / 1.8,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: height / 3,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default EventListener;
