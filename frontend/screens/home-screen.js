import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import logo from '../assets/home-screen/ranepa.png'


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={logo}/>
            </View>
            <Text style={styles.headerText}>NIU RANEPA CLIENT</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b20000'
    },
    headerText: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: '600',
        color: '#fff'
    }

})


export default HomeScreen
