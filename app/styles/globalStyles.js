import { StyleSheet } from 'react-native';
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

export const colors = {
    primary: '#049DD9',
    secondary: '#05DBF2',
    accent: '#0b739cff',

    background: '#e7e7eeff',
    surface: '#F8F9FA',
    text: '#012340',
    subtext: '#0367A6',
    border: '#CCCCCC',

    success: '#2ECC71',
    warning: '#F1C40F',
    error: '#E63946',
    info: '#3498DB',

    dark: {
        background: '#121212',
        surface: '#1E1E1E',
        text: '#EEEEEE',
        subtext: '#BBBBBB'
    }
};

// 💅 Estilos globais reutilizáveis (para telas)
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    textAlign: 'center',
    color: colors.text,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 12,
    borderRadius: 100,
    width: '100%'
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 12,
    marginVertical: 8
  },
  buttonSpacing: {
    marginVertical: 8
  },
  divInput: {
    width: '100%',
    marginBottom: 20
  },
  textoAuxiliar: {
    marginTop: -10,
  }
});

// 🔘 Componente de botão customizado
export default function CustomButton({ title, onPress, loading, disabled }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        (loading || disabled) && styles.buttonDisabled
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={loading || disabled}
    >
      {loading ? (
        <ActivityIndicator color={colors.background} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

// 🎨 Estilos específicos do botão
const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',        // ocupa toda a largura disponível do container
        paddingVertical: 14,
        borderRadius: 10,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        marginTop: -20
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    buttonDisabled: {
        backgroundColor: colors.border,
        opacity: 0.7
    }
});