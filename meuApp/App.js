
import React from 'react';
import {  AppScreen } from './src/screen';

export default function App() {
  return (
    <AppScreen />
  );
}


/*
import { StatusBar } from 'expo-status-bar';
import React from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, Pressable, Linking} from 'react-native';
import fotoRosto from './assets/fotoRosto.jpg';

const colorGitHub = '#010409';

const colorDarkGithub = '#4F565E';

const urlToMyGithub = 'https://github.com/alcemiro';

 
export function App() {

  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image accessibilityLabel="Amauri de kimono preto"
          style={style.avatar}
          source={fotoRosto} />

        <Text accessibilityLabel="Nome: Amauri silva alcemiro" style={[style.defaultText, style.name]}>Amauri Silva Alcemiro</Text>

        <Text accessibilityLabel="Nickiname: alcemiro" style={[style.defaultText, style.nickname]}>alcemiro</Text>

        <Text accessibilityLabel="Descrição: Estudando JavaScript para Front end" style={[style.defaultText, style.description]}>Estudando JavaScript para Front end...</Text>

        <Pressable onPress={handlePressGoToGithub}>

          <View style={style.button}>
            <Text style={[style.content, style.textButton]}> Open in GitHub</Text>
          </View>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //expandi para a tela toda
    justifyContent: "center",
    alignItems: 'center',
  },

  content: {
    alignItems: 'center',
    padding: 20,
  },

 // text:{
 //   fontSize: 50,
 //   fontWeight: 'bold',
 //   color: 'black',
 // },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color:'white',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname:{
    color: colorDarkGithub,
    fontSize: 18,
  },
  description:{
    fontWeight: 'bold',
    fontSize: 14,
  },
  button:{
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 16,
  },
});


*/
