import { View, StyleSheet, Text } from 'react-native';
import TextInputAtom from '../../atoms/TextInput';
import { useEffect, useState } from 'react';
import Lng from '../../../i18n';
import LoginButtonMolecule from '../../molecules/Button';
import * as Location from 'expo-location';
import Http from '../../../services/http.service';
import { Link, useNavigation, useRouter } from 'expo-router';
import PickerAtom from '../../atoms/Picker';

const RegisterFormOrganism = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [church, setChurch] = useState('');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const navigation = useNavigation();
    const isPresented = navigation.canGoBack();



    function handleLogin(): void {
        router.replace('/(auth)/sign-in')
    }

    function handleSignUp(): void {

    }

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                // setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            // const getAddressApi = await new Http().get(`http://api.positionstack.com/v1/reverse?access_key=571819899cbf694605195b0c3888d548&query=${location.coords.latitude},${location.coords.longitude}&limit=1`)
            // console.log(getAddressApi)
            //   setLocation(location);
        })();
    }, []);


    return (
        <View style={styles.container}>
            {!isPresented && <Link href="../">Dismiss</Link>}
            <Text>Register</Text>

            <TextInputAtom
                placeholder={Lng.t('fullname')}
                value={name}
                onChangeText={text => setName(text)}
                secureTextEntry={false}
                backgroundColor="#C3E311"
            />

            <TextInputAtom
                placeholder={Lng.t('church')}
                value={church}
                onChangeText={text => setChurch(text)}
                secureTextEntry={false}
                backgroundColor="#C3E311"
            />

            <TextInputAtom
                placeholder={Lng.t('phone')}
                value={phone}
                onChangeText={text => setPhone(text)}
                secureTextEntry={false}
                backgroundColor="#C3E311"
            />

            <PickerAtom
                backgroundColor='#C3E311' 
                items={[
                    { id: 1, label: Lng.t('yes'), value: "yes" },
                    { id: 2, label: Lng.t('no'), value: "no" },
                ]}
            />

            <TextInputAtom
                placeholder={Lng.t('discipler')}
                value={phone}
                onChangeText={text => setPhone(text)}
                secureTextEntry={false}
                backgroundColor="#C3E311"
            />
            

            <TextInputAtom
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                secureTextEntry={false}
                backgroundColor="#C3E311"
            />

            <TextInputAtom
                placeholder={Lng.t('password')}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
                backgroundColor="#C3E311"
            />

            <LoginButtonMolecule
                onPress={handleSignUp}
                text={Lng.t('register')}
                backgroundColor="green"
            />

            <LoginButtonMolecule
                onPress={handleLogin}
                text={Lng.t('loginSignUp')}
                backgroundColor="none"
                borderColor='#C3E311'
            />

        </View>
    )
}

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
});


export default RegisterFormOrganism;