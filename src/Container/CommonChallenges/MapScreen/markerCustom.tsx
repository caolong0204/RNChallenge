import * as React from 'react';
import {useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Callout, MapMarker, Marker} from 'react-native-maps';

interface MarkerCustomProps {
  lat: number;
  long: number;
  onPress?: (event: string) => void;
  value?: string;
}

const MarkerCustom = (props: MarkerCustomProps) => {
  const {lat, long, onPress, value} = props;
  const markerRef = useRef<MapMarker>(null);
  const handlePress = () => {
    onPress?.('Callout::onPress');
  };
  React.useEffect(() => {
    markerRef.current?.showCallout();
  }, []);
  return (
    <Marker
      coordinate={{
        latitude: lat,
        longitude: long,
      }}
      ref={markerRef}
      calloutAnchor={{x: 0.5, y: 1}}>
      <View style={{backgroundColor: '#fff', padding: 5}}>
        <Text>{value}</Text>
      </View>
    </Marker>
  );
};

export default MarkerCustom;

const styles = StyleSheet.create({
  callout: {
    width: 30,
    height: 40,
    backgroundColor: 'red',
  },
});
