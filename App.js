import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView>
      {/* View para iamgem da logo */}
      <View>
        <Image 
          source={require('./assets/logo-civa.png')}
        />
      </View>

      {/* View para entradas */}
      <View>
        <TextInput 
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </View>
      <View>
        <TextInput 
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />
      </View>

      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>Não possui uma conta?</Text><TouchableOpacity><Text>Crie uma agora</Text></TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
