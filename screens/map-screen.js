import React, {Component} from 'react';
import MapboxGL from "@react-native-mapbox-gl/maps";
import {StyleSheet, View} from "react-native";

MapboxGL.setAccessToken(
    'pk.eyJ1IjoibWFmYWhlcyIsImEiOiJjazV6cW5xdDUwMDRrM21ueHF2Z3EzY3VyIn0.RRuRqnVCy3VWno0v3Xk__w',
);
const width = '80%';
const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    container: {
        height: 900,
        width: 900,
        backgroundColor: 'tomato',
    },
    map: {
        flex: 1,
    },
});
class MapScreen extends Component {
    componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
    }

    render() {
        return (
            <View>
                <View style={styles.page}>
                    <View style={styles.container}>
                        <MapboxGL.MapView
                            styleURL={'mapbox://styles/mafahes/ck5zqz49333o11intge32b2pf'}
                            style={styles.map}>
                            <MapboxGL.Camera
                                zoomLevel={12}
                                centerCoordinate={[43.991, 56.307]}
                            />
                        </MapboxGL.MapView>
                    </View>
                </View>
            </View>
        );
    }
}

export default MapScreen
