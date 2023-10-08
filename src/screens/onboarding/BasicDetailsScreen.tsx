import React, {useState} from 'react';
import {Image, StyleSheet, View, SafeAreaView} from 'react-native';
import {Text, Button, TextInput} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Header from '../../components/Header';
import theme from '../../components/Theme';

type BasicDetailsScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const BasicDetailsScreen = ({navigation}: BasicDetailsScreenProps) => {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleChangeName = (text: string) => {
    setName(text);
  };

  const handleChangeCompanyName = (text: string) => {
    setCompanyName(text);
  };

  const handleChangeMobileNumber = (text: string) => {
    setMobileNumber(text);
  };

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Header title="Basic Details" />

        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.pageTitle}>Let's get started!</Text>

            <Text style={styles.heading}>
              Please provide the following information to get started.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput
              mode="flat"
              autoComplete="off"
              label="Your Name"
              value={name}
              onChangeText={handleChangeName}
              style={styles.input}
              underlineColor="#fff"
              underlineStyle={{width: 0}}
            />
            <TextInput
              mode="flat"
              autoComplete="off"
              label="Company Name"
              value={companyName}
              onChangeText={handleChangeCompanyName}
              style={styles.input}
              underlineColor="#fff"
              underlineStyle={{width: 0}}
            />
            <TextInput
              mode="flat"
              autoComplete="off"
              keyboardType="phone-pad"
              label="Mobile Number"
              value={mobileNumber}
              onChangeText={handleChangeMobileNumber}
              style={styles.input}
              underlineColor="#fff"
              underlineStyle={{width: 0}}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              mode="outlined"
              textColor={theme.colors.primary}
              style={[
                theme.styles.button,
                styles.button,
                {borderColor: '#fff', backgroundColor: '#fff'},
              ]}
              onPress={() => navigation.goBack()}>
              Prev
            </Button>
            <Button
              mode="contained"
              style={[theme.styles.button]}
              onPress={() => navigation.navigate('OTPEntry')}>
              Next
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
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
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  formContainer: {
    marginVertical: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderColor: '#f5f1f2',
    borderWidth: 2,
    borderTopEndRadius: 14,
    borderTopStartRadius: 14,
    borderBottomStartRadius: 14,
    borderBottomEndRadius: 14,
    borderBottomWidth: 0,
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
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 16,
    left: 0,
    right: 0,
    padding: 16,
  },
  button: {
    flex: 1,
    minWidth: '45%',
    marginHorizontal: 8,
  },
});

export default BasicDetailsScreen;
