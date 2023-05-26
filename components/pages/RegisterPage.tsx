import React from 'react';
import { View } from 'react-native';
import RegisterFormOrganism from '../organisms/RegisterForm';

const RegisterScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <RegisterFormOrganism />
    </View>
  );
};

export default RegisterScreen;
