import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Buttons} from 'react-native/Libraries/Alert/Alert';
import logo from '../assets/home-screen/ranepa.png';

const HomeScreen = () => {
  return (
    <View style={s.container}>
      <View style={s.home}>
        <Image style={s.image} source={logo} alt={'logo'} />
        <Text style={s.main_text}>NIU RANEPA CLIENT</Text>
        <Text
          style={
            s.description
          }>{`Независимый клиент \n Нижегородского филиала РАНХиГС`}</Text>
        <Buttons style={s.login} title="Войти" />
        <Buttons style={s.login} title="Зарегистрироваться" />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
    width: Dimensions.get('window').width,
  },
  home: {
    width: '80%',
  },
  image: {
    marginTop: 200,
    width: 90,
    height: 120,
  },
  main_text: {
    marginTop: 65,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#898181',
  },
  description: {
    fontSize: 15,
    color: '#898181',
    marginTop: 15,
  },
  login: {
    width: '100%',
    fontSize: 20,
  },
});

export default HomeScreen;
