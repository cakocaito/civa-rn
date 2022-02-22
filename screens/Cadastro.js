import { StyleSheet, Text, View, KeyboardAvoidingView, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { 
  RedHatDisplay_400Regular,
  RedHatDisplay_400Regular_Italic,
  RedHatDisplay_500Medium,
  RedHatDisplay_500Medium_Italic,
  RedHatDisplay_700Bold,
  RedHatDisplay_700Bold_Italic,
  RedHatDisplay_900Black,
  RedHatDisplay_900Black_Italic, 
} from '@expo-google-fonts/red-hat-display'
import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
// import { Button } from 'react-native-web';

export default function Cadastro({navigation}) {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  let[fontsLoaded, error]=useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic ,
    RedHatDisplay_400Regular,
    RedHatDisplay_400Regular_Italic,
    RedHatDisplay_500Medium,
    RedHatDisplay_500Medium_Italic,
    RedHatDisplay_700Bold,
    RedHatDisplay_700Bold_Italic,
    RedHatDisplay_900Black,
    RedHatDisplay_900Black_Italic 
  })
  if (!fontsLoaded){
    return <AppLoading />
  }

  
  return (
    <KeyboardAvoidingView style={styles.background}>
      {/* View para iamgem da logo */}
      <View style={styles.viewLogo}>
        {/* <Image 
          source={req"uire('./assets/logo-civa.png')}
        /> */}
        <Text style={styles.textoTopo}>CIVA</Text>
      </View>

      {/* View para entradas */}
      <Text style={styles.textoEntradas}>Nome Completo</Text>
      <View style={styles.viewEntradas}>
        <TextInput 
          style={styles.entradas}
          // placeholder="Email"
          placeholderTextColor="#A9A9A9" 
          autoCorrect={false}
          value = {nomeCompleto}
          onChangeText={value => setNomeCompleto(value)}
        />
      </View>
      <Text style={styles.textoEntradas}>Email</Text>
      <View style={styles.viewEntradas}>
        <TextInput 
          style={styles.entradas}
          // placeholder="Email"
          placeholderTextColor="#A9A9A9" 
          autoCorrect={false}
          value = {email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <Text style={styles.textoEntradas}>Senha</Text>
      <View style={styles.viewEntradas}>
        <TextInput 
          style={styles.entradas}
          // placeholder="Senha"
          placeholderTextColor="#A9A9A9" 
          passwordRules='true'
          autoCorrect={false}
          value = {senha}
          onChangeText={value => setSenha(value)}
          />
      </View>    
      <TouchableOpacity style={styles.viewBotao} onPress={() => {}}>
        <LinearGradient colors={['rgba(111, 207, 151, 1)', 'rgba(102, 210, 234, 1)']} style={styles.botao}>
          <Text style={styles.textoBotao}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.cadastro}>
      <TouchableOpacity>
            <Text 
                style={styles.textoCadastro}
                onPress={() => 
                    navigation.navigate("Login")
                }>Voltar</Text> 
                
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  viewLogo:{
    // flex:1,
    // justifyContent: 'center',
    // textAlign: 'center',
    top: '15%',
  },
  viewEntradas:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    top: '20%',
    padding: 10,
  }, 
  entradas:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'snow',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgb(169,169,169)',
    padding: 10,
  },
  textoEntradas:{
    position:'relative',
    color: 'rgb(169,169,169)',
    top: '20%',
    left: '10%',
    fontFamily: 'Roboto_700Bold',
  },
  textoTopo:{
    fontFamily: 'RedHatDisplay_400Regular',
    fontSize: 100,
    fontWeight:'100',
    color: 'rgba(188, 156, 255, 1)',
    textAlign:'center',
    // top:'15%',
  },
  viewBotao:{
    position: 'relative',
    top:'23%',
    alignItems: 'center',
  },
  botao:{
    justifyContent: 'center',
    width:150,
    height:68,
    backgroundColor:'rgba(111, 207, 151, 1)',
    borderRadius: 22,
    top: 0,
  },
  textoBotao:{
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color:'snow',
  },
  cadastro:{
    top: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCadastro:{
    color: 'blue',
  }
})