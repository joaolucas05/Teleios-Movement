import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputAtom from '../../atoms/TextInput';
import Lng from '../../../i18n'
import ButtonMolecule from '../../molecules/Button';
import { Link, useRouter } from 'expo-router';

const LoginFormOrganism = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    
  };

  function handleSignUp(): void {
    router.replace('/(auth)/sign-up')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Lng.t('loginscreenmessage')}</Text>

      <TextInputAtom
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        secureTextEntry={false}
        backgroundColor='#C3E311'
      />

      <TextInputAtom
        placeholder={Lng.t('password')}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        backgroundColor='#C3E311'
      />

      <ButtonMolecule
        onPress={handleLogin}
        text={Lng.t('login')}
        backgroundColor="none"
        borderColor="#C3E311"
      />

      <Link style={styles.text}href="/sign-up">{Lng.t('register')}</Link>


      {/* <ButtonMolecule
        onPress={handleSignUp}
        text={Lng.t('register')}
        backgroundColor="green"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  text: {
    color: 'white',
  }
});

export default LoginFormOrganism;
