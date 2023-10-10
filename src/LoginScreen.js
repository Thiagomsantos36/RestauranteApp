import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  // Estados para armazenar o nome de usuário e a senha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com a tentativa de login
  const handleLogin = () => {
    // Verifique se o nome de usuário e a senha estão corretos.
    if (username === 'Supremo' && password === '1234') {
      // Se a autenticação for bem-sucedida, navegue para a tela de vendas.
      navigation.navigate('Vendas');
    } else {
      // Caso contrário, exiba uma mensagem de erro.
      alert('Nome de usuário ou senha incorretos');
    }
  };

  return (
    // Imagem de fundo da tela de login
    <ImageBackground
      source={require('../assets/logo1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>LJ Supremo Sabor</Text>
        {/* Input para o nome de usuário */}
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        {/* Input para a senha (com campo de senha) */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry // Para ocultar a senha
        />
        {/* Botão de login */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}// verifica se as funções da linda 10 estão corretas.
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

// Estilos para a tela de login
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    borderWidth: 6,
  },
  header: {
    fontSize: 34,
    marginBottom: 30,
    color: '#663300',
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    height: 70,
    borderWidth: 5,
    borderColor: '#663300',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    color: 'black',
    fontSize: 25,
  },
  button: {
    width: '50%',
    height: 60,
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Login;
// Este código representa a tela de login do aplicativo.
// Ele exibe uma imagem de fundo, campos de entrada para o nome de usuário e senha, 
//e um botão de login. Quando o botão é pressionado, 
//a função handleLogin verifica as credenciais e navega para a tela de vendas 
//se forem corretas. Caso contrário, exibe uma mensagem de erro.