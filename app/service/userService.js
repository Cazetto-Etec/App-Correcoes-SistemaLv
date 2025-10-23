import AsyncStorage from '@react-native-async-storage/async-storage';
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL_API;

export async function loginUser(email, senha) {
  try {
    const res = await fetch(`${BASE_URL}/usuario/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha })
    });

    const json = await res.json();
    if (!json.success) throw new Error(json.message || 'Falha no login');

    // Salvar dados localmente
    await AsyncStorage.setItem('token', json.data.token);
    await AsyncStorage.setItem('usuario', JSON.stringify(json.data.usuario));

    return json;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function logoutUser() {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('usuario');
  } catch (err) {
    throw new Error('Erro ao realizar logout');
  }
}

export async function getStoredUser() {
  const userData = await AsyncStorage.getItem('usuario');
  return userData ? JSON.parse(userData) : null;
}
