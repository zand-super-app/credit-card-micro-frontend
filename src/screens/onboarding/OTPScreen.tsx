import React, {useState, useRef} from 'react';

import {StyleSheet, View, TextInput, SafeAreaView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Header from '../../components/Header';
import theme from '../../components/Theme';

type OTPScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const OTPScreen = ({navigation}: OTPScreenProps) => {
  const [passcode, setPasscode] = useState('');
  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChangePasscode = (text: string, index: number) => {
    const newPasscode = passcode.split('');
    newPasscode[index] = text;
    setPasscode(newPasscode.join(''));

    if (text && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      !passcode[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const renderPasscodeInputs = () => {
    const passcodeInputs = [];

    for (let i = 0; i < 6; i++) {
      const isFilled = passcode[i] !== undefined;
      const inputStyle = isFilled ? styles.filledInput : styles.outlineInput;

      passcodeInputs.push(
        <View key={i} style={styles.inputContainer}>
          <View style={[styles.circle, inputStyle]}>
            {isFilled && <View style={styles.filledCircle} />}
          </View>
          <TextInput
            caretHidden={true}
            ref={ref => (inputRefs.current[i] = ref)}
            style={styles.input}
            value={passcode[i] || ''}
            onChangeText={text => handleChangePasscode(text, i)}
            onKeyPress={event => handleKeyPress(event, i)}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={i === 0}
          />
        </View>,
      );
    }

    return passcodeInputs;
  };

  return (
    <>
      <SafeAreaView style={theme.styles.safeAreContainer}>
        <Header title="One time password" />
        <View style={theme.styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.pageTitle}>Enter OTP</Text>

            <Text style={styles.heading}>An OTP has been sent via mobile.</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.heading}>Enter code</Text>
          </View>

          <View style={styles.passcodeContainer}>{renderPasscodeInputs()}</View>

          <View style={styles.expiryContainer}>
            <Text style={styles.heading}>Expires in: </Text>
            <Text style={styles.timer}>1:40 </Text>
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
              onPress={() => console.log('Resend')}>
              Resend
            </Button>
            <Button
              mode="contained"
              style={[theme.styles.button]}
              onPress={() => navigation.navigate('BasicDetails')}>
              Next
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({  
  headingContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  otpContainer: {
    marginVertical: 16,
    alignItems: 'center',
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  pageTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  timer: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ff7f41',
  },
  listContainer: {
    marginVertical: 16,
  },
  expiryContainer: {
    marginVertical: 16,
    flexDirection: 'row',    
    alignSelf: 'center',
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
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: 14,
    marginVertical: 20,
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ff7f41',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineInput: {
    borderColor: '#ff7f41',
  },
  filledInput: {
    backgroundColor: '#ff7f41',
  },
  filledCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ff7f41',
  },
  input: {
    position: 'absolute',
    width: 40,
    height: 40,
    fontSize: 20,
    textAlign: 'center',
    color: 'transparent',
  },
});

export default OTPScreen;
