/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        TouchableOpacity,
        TextInput,
        Image,
        WebView,
        Dimensions,
        ScrollView,
        FlatList
       } from 'react-native';
import {Pages} from 'react-native-pages';      
import ImagenExterior from "./ImagenExterior";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props, env){
    super(props, env);

    var heroes = [];
    
    this.cargarElementos();
    this.state = {
      colorFondo: "white",
      direccion: "https://www.google.es/",
      texto: "Bienvenido Borja",
      heroes : heroes
    }
  }
  cambiarColor(){
    if(this.state.colorFondo == "white"){
      this.setState({colorFondo:"green"});
   }else if(this.state.colorFondo == "green"){
      this.setState({colorFondo: "white"});
    }
  }
  cambiarWeb(){
    if(this.state.direccion == "https://www.google.es/"){
      this.setState({direccion:"https://as.com/"});
    }else if(this.state.direccion == "https://as.com/"){
      this.setState({direccion:"https://www.google.es/"});
    }
  }
  cargarElementos(){
    var _this = this;
    fetch("https://firebasestorage.googleapis.com/v0/b/json-c8e52.appspot.com/o/heroess.json?alt=media&token=a8a73108-f75a-483a-80de-2d1c0c9f9647").then(function(res){
      res.json().then(function(json){
        _this.setState({heroes: json});
      });
    });
  }    
  
  render() {
    return (
        <Pages>
          <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:this.state.colorFondo}}>
            <ImagenExterior texto={"Deadpool Feliz"} urlImagen="http://es.web.img2.acsta.net/newsv7/19/03/23/13/17/4353808.jpg"/>
            <Text style={styles.welcome}>
              {this.state.texto}
            </Text>
            <TextInput
              placeholder="Escribe tu texto"
              style={{height: 50, width: 200, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc',margin: 15}}
              onChangeText={(text) => this.setState({text})}
              value = {this.state.text}
              onBlur = {(text) => this.setState({texto:this.state.text})} 
            />
            <TouchableOpacity style={styles.boton} onPress={this.cambiarColor.bind(this)}>
              <Text style={styles.textoBoton}>Cambiar color</Text>
            </TouchableOpacity>
  
          </View>
          <View style={{flex:1,backgroundColor:"black"}}>
            <WebView
              style={{backgroundColor:"black",width:Dimensions.get('window').width}}
              source={{uri: this.state.direccion}}
            />
            <TouchableOpacity style={styles.boton} onPress={this.cambiarWeb.bind(this)}>
              <Text style={styles.textoBoton}>Cambiar web</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"red"}}>
            <Text style={styles.heroes}>HEROES</Text>
            <FlatList
              data={this.state.heroes}
              renderItem={({item}) => <ImagenExterior texto={item.nombre} urlImagen={item.imagen} fecha={item.fecha}/>}
            />
          </View>
        </Pages>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  boton:{
    backgroundColor: "red",
    width: 300,
    height: 60,
    borderWidth:2,
    borderColor: "black",
    borderRadius:5,
    alignItems:"center",
    justifyContent: "center"

  },
  textoBoton:{
    color:"black",
    fontSize: 20,

  },
  heroes:{
    fontSize: 50,
    color: "black"
  }
});
