import React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Text, Button, Title} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import theme from '../../components/Theme';

type WelcomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  return (
    <SafeAreaView style={theme.styles.safeAreContainer}>
      <View style={theme.styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.pageTitle}>Welcome to Zand!</Text>
          <Image
            style={{width: 160, height: 160, marginVertical: 16}}
            source={{
              uri: 'https://www.zand.ae/-/media/zand/Articles/listing-278x350-572x350/zand-logo-360x320.png',
            }}
          />
          <Text style={styles.heading}>
            Apply for a Zand Corporate credit card instantly! Please keep the
            following documents ready.
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>- Your original Emirates ID</Text>
          <Text style={styles.listItem}>- Your original passport</Text>
          <Text style={styles.listItem}>
            - Your original Trade License Document
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            style={theme.styles.button}
            onPress={() => navigation.navigate('BasicDetails')}>
            Start
          </Button>
          {/* <Button
            mode="outlined"
            textColor={theme.colors.primary}
            style={[theme.styles.outlineButton, {marginTop: 16}]}
            onPress={() => console.log('Exit')}>
            Back to main app
          </Button> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
