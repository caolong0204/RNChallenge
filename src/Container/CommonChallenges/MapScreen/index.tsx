import React from 'react';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import PriceMarker from './PriceMarker';
import MarkerCustom from './markerCustom';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

class Event extends React.Component<any, any> {
  shouldComponentUpdate(nextProps: any) {
    return this.props.event.id !== nextProps.event.id;
  }

  render() {
    const {event} = this.props;
    return (
      <View style={styles.event}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventData}>
          {JSON.stringify(event.data, null, 2)}
        </Text>
      </View>
    );
  }
}

class EventListener extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      events: [],
    };
  }

  makeEvent(e: any, name: any) {
    console.log('====id', id);
    return {
      id: id++,
      name,
      data: e.nativeEvent ? e.nativeEvent : e,
    };
  }

  recordEvent(name: any) {
    return (e: any) => {
      if (e.persist) {
        e.persist(); // Avoids warnings relating to https://fb.me/react-event-pooling
      }
      this.setState((prevState: any) => ({
        events: [this.makeEvent(e, name), ...prevState.events.slice(0, 2)],
      }));
      setTimeout(() => this.setState({events: []}), 2000);
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation
          showsMyLocationButton
          onMarkerPress={this.recordEvent('Map::onMarkerPress')}>
          <MarkerCustom
            lat={LATITUDE}
            long={LONGITUDE}
            onPress={this.recordEvent}
          />
        </MapView>
        <View style={styles.eventList}>
          <ScrollView>
            {this.state.events.map((event: any) => (
              <Event key={event.id} event={event} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
