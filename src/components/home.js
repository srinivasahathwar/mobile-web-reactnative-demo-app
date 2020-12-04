import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.myState}> 1223 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: '100%',
    width: '100%',
  },
  myState: {
    padding: 10,
    marginTop: 0,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Home;
