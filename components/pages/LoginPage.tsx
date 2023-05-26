import React from 'react';
import { View } from 'react-native';
import LoginFormOrganism from '../organisms/LoginForm';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <LoginFormOrganism />
    </View>
  );
};

export default LoginScreen;
