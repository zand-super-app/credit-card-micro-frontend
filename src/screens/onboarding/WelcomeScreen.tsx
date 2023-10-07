import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text, Button, Title} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.headingContainer}>
      <Text style={styles.pageTitle}>
          Welcome to Zand!
        </Text>
      <Image
        style={{width: 160, height: 160, marginVertical: 16}}
        source={require('../../assets/images/zand-logo-360x320.png')}
      />
        <Text style={styles.heading}>
        Open a Zand Corporate banking account instantly! Please keep the following documents ready.
        </Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>- Your original Emirates ID</Text>
        <Text style={styles.listItem}>- Your original passport</Text>
        <Text style={styles.listItem}>- Your original Trade License Document</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('BasicDetails')}
      >
        Start
      </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f1f2',
  },
  headingContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: 16,
  },
  listItem: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 12,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    padding: 16,
  },
  button: {
    width: '100%',
  },
});

export default WelcomeScreen;
