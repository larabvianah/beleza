import { Image, StyleSheet, Text, View } from "react-native"
import { Button, TextInput } from "react-native-paper"
import logo_icon_pokemon from '../../assets/logo_icon_pokemon.png'
import { signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(null);
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            await AsyncStorage.setItem('email', email);
            console.log('Login realizado com sucesso');
            navigation.navigate('Routes');
        } catch (error) {
            setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    };

    useEffect(() => {
        console.log('Email:', email);
        console.log('Password', password);
    }, [email, password]);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                source={logo_icon_pokemon}
                style={{
                    width: '200px',
                    height: '200px',
                    resizeMode: 'contain',
                    marginBottom: '2em'
                }}
            />
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    width: '80%',
                    borderRadius: '5px',
                    textAlign: 'center',
                }}
            >
                Login
            </Text>
            <Text
                style={{
                    fontSize: 16,
                    marginTop: '1em',
                    marginBottom: '1em',
                    borderRadius: '5px',
                    textAlign: 'center',
                }}
            >
                Faça login com seu email e senha
            </Text>
            <View
                style={{
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1em'

                }}
            >
                {error && <Text style={styles.error}>{error}</Text>}
                <TextInput
                    label="Email"
                    mode="outlined"
                    style={{
                        width: '100%',
                        height: '50px',
                        marginBottom: '1em'
                    }}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    label="Senha"
                    mode="outlined"
                    style={{
                        width: '100%',
                        height: '50px',
                        marginBottom: '1em'
                    }}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    onPress={handleLogin}
                    mode="contained"
                    style={{
                        width: '100%',
                        height: '50px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffde00',
                        border: '4px solid #3b4cca',
                    }}
                    labelStyle={{
                        color: '#3b4cca',
                        fontWeight: 'bold'
                    }}
                >
                    Login
                </Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default Login