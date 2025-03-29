import { View, Text, TouchableOpacity, StyleSheet, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import Colors from '@/components/Colors';
import { useState, useRef, FC } from 'react';
import * as Clipboard from 'expo-clipboard';
import Header from '@/components/Header';

const VerifyEmail = () => {
  const [email, setEmail] = useState('some@gmail.com');
  const [VCode, setVCode] = useState<string[]>(new Array(5).fill(""));
  const inputRefs = useRef<TextInput[]>([]); // Create refs for TextInput components

  const handleChange = (text: string, i: number) => {
    if (isNaN(Number(text))) return;
    setVCode([
      ...VCode.map((data, indx) => (indx === i ? text : data)),
    ]);
    if (text && i < VCode.length - 1) {
      inputRefs.current[i + 1]?.focus(); // Focus the next input
    }
  };

  const handleBackspace = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, indx: number) => {
    if (e.nativeEvent.key === 'Backspace' && indx > 0 && !VCode[indx]) {
      inputRefs.current[indx - 1]?.focus(); // Focus the previous input
    }
  };

  const handlePaste = async () => {
    const pasteData = await Clipboard.getStringAsync(); // Get clipboard content
    const pasteValues = pasteData.split('').slice(0, 5); // Limit to 5 digits
    if (pasteValues.length === 5 && pasteValues.every((char) => !isNaN(Number(char)))) {
      setVCode(pasteValues); // Update the state with the pasted values
    }
  };

  const handleResend = () => { }

  const styles = StyleSheet.create({
    View: {
      padding: 16,
    },
    EmailText: {
      fontFamily: 'poppins-regular',
      fontSize: 16,
      marginTop: 40,
      marginBottom: 10,
      textAlign: 'center',
      color: Colors.CONTAINTER,
    },
    otpInput: {
      width: 60,
      height: 80,
      fontSize: 20,
      textAlign: 'center',
      margin: 5,
      backgroundColor: Colors.CONTAINTER,
      borderWidth: 0,
      borderColor: 'transparent',
      outlineColor: 'transparent',
      borderRadius: 5,
      fontFamily: 'poppins-regular',
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    Resend: {
      fontFamily: 'poppins-medium',
      fontSize: 16,
      color: Colors.CONTAINTER,
    },
    Code: {
      fontFamily: 'poppins-regular',
      fontSize: 16,
      color: Colors.CONTAINTER,
    }
  });

  return (
    <View style={styles.View}>
      <Header title="Verify Your Email" />

      <Text style={styles.EmailText}>
        Your temporary login code was sent to <Text style={{ fontFamily: 'poppins-bold' }}>{email}</Text>
      </Text>

      <View style={styles.otpContainer}>
        {VCode.map((data, indx) => (
          <TextInput
            key={indx}
            ref={(ref) => (inputRefs.current[indx] = ref!)} // Assign refs to inputs
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            value={data}
            onChangeText={(text) => handleChange(text, indx)}
            onKeyPress={(e) => handleBackspace(e, indx)}
            onFocus={handlePaste}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text style={styles.Code}>Didn't receive the code?</Text>
        <TouchableOpacity onPress={handleResend}>
          <Text style={styles.Resend}> Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmail;