import React, {useState} from 'react';
import { Button, TextInput, View, StyleSheet} from 'react-native';

const Login = props => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const onLogin = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={getname => setusername(getname)}
        placeholder={'Username'}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={getpassword => setpassword(getpassword)}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title={'Login'} style={styles.input} onPress={onLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default Login;
