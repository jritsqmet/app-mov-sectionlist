//import { StatusBar } from 'expo-status-bar';
import {StatusBar, SectionList, StyleSheet, Text, TouchableOpacity, View, Alert, Image } from 'react-native';

import crashJSON from './assets/data/crash.json'

export default function App() {

  const datos = crashJSON

  const secciones = [
    { title: 'Personajes de Crash Bandicoot', data: datos.personajes }
  ]

  function mensaje( item ){
    Alert.alert(item.name, item.description)
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={secciones}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={ ()=> mensaje(item)}
            style={styles.btnLista}  
          >
            <View>
            <Text style={styles.txtPersonajes} >{item.name}</Text>
            <Text style={styles.txtAtributos}>{item.atributos.join('\n')} </Text>
            </View>
            <Image
            source ={{ uri: item.image }}
              style={styles.img}
              />
          </TouchableOpacity>
        )}

        renderSectionHeader={({ section }) => (
          <View style={styles.txtTitulo}>
            <Text style={{ fontSize:25, fontWeight:'bold'}}>{section.title}</Text>
          </View>

        )}

      />

      <StatusBar style="auto" backgroundColor={'#7d9136'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70
  },
  txtPersonajes: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  txtAtributos: {
    fontSize: 15,
    color: '#1b1eda',
   
  },
  txtTitulo: {
    backgroundColor: "#f0f0f0",
    borderRadius:20
    
  },
  btnLista:{
    paddingVertical: 8,
    borderBottomWidth:1,
    borderColor: '#ccc',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    //ESTILOS
    backgroundColor: "#e5edc9",
    borderRadius:20,
    paddingHorizontal:10,
    marginBottom:10,
    elevation:5,
    shadowColor:'#000'
  },
  img:{
    width:65,
    height:80,
    borderRadius:40
  }
});
