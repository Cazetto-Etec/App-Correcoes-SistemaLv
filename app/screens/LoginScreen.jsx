import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { loginUser } from '../service/userService';
import CustomButton, { globalStyles } from '../styles/globalStyles';


export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        setLoading(true);

        try {
            const result = await loginUser(email, senha);

            Alert.alert('Sucesso', result.message);

            setEmail('');
            setSenha('');

            navigation.navigate('Home');
        } catch (err) {
            Alert.alert('Erro', err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Faça login!</Text>

            <View style={globalStyles.divInput}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={globalStyles.input}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <TextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    style={globalStyles.input}
                    secureTextEntry
                />
            </View>

            <View style={globalStyles.buttonSpacing && globalStyles.buttonWrapper}>
                <CustomButton title={loading ? 'Entrando...' : 'Entrar'} onPress={handleLogin} />
            </View>

            <Text style={globalStyles.textoAuxiliar}>
                Não possui uma conta ainda?{' '}
                <Text
                    style={{ color: '#0b739cff', textDecorationLine: 'underline' }}
                    onPress={() => navigation.navigate('Register')}
                >
                    Crie agora!
                </Text>
            </Text>
        </View>
    );
}