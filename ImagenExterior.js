import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        Image,
        Dimensions,
        ScrollView
       } from 'react-native';


export default class ImagenExterior extends Component {

  constructor(props, env){
    super(props, env)
    
    let fecha = "---No Hay Fecha---";
    if(this.props.fecha != undefined){
      fecha = this.props.fecha;
    }

    this.state = {
      colorFondo: "white",
      fecha: fecha
    }
  }
  
   
  
  render() {
    return (
      
    <View style={{backgroundColor:"white",borderColor:"black",borderWidth:2,marginBottom:4}}>  
      <Image style={{width:430, height:400}}
        source={{uri: this.props.urlImagen}}
      />
      <Text style={{fontSize:20,textAlign:"center",color:"black"}}>
        {this.props.texto}
      </Text>
      <Text style={{color:"grey"}}>
        {this.state.fecha}
      </Text>
    </View>
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

  }
});
