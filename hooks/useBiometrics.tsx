import { Alert } from 'react-native'
import { FC, useEffect, useState } from 'react'
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from 'expo-router';

/**
 * 
 * @name useBiometrics
 * @returns {[boolean, () => Promise<void>]} - A tuple containing a boolean indicating if biometric authentication is supported and a function to handle biometric authentication
 * @description This hook checks if the device supports biometric authentication (Face ID or Fingerprint) and provides a function to handle the authentication process.
 * It uses the `expo-local-authentication` library to check for hardware support and perform the authentication.
 * The hook returns a boolean indicating if biometric authentication is supported and a function to handle the authentication process.
 * The function checks if the user has enrolled their biometrics and then prompts them to authenticate.
 * If the authentication is successful, it navigates to the verification screen.
 * @author Miracle Boniface
 */
const useBiometrics:useBiometricsProps = (activateDeviceFallback = false) => {
   const [isBiometricSupported, setIsBiometricSupported] = useState(false);
   const router = useRouter()

   useEffect(() => {
      (async () => {
         // Check if device supports Face ID or Fingerprint
         const compatible = await LocalAuthentication.hasHardwareAsync();
         setIsBiometricSupported(compatible);
      })();
   }, []);

   /**
    * 
    * @name handleBiometricAuth
    * @returns {Promise<void>} - A promise that resolves when the authentication is successful
    * @description This function handles biometric authentication using Face ID or Fingerprint.
    * It checks if the user has enrolled their biometrics and then prompts them to authenticate.
    * If the authentication is successful, it navigates to the verification screen.
    * @author Miracle Boniface
    */

   const handleBiometricAuth = async () => {
      // Check if user has enrolled Face ID or Fingerprint
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
         Alert.alert("Biometric authentication is not set up");
         return;
      }

      // Authenticate with biometrics
      const result = await LocalAuthentication.authenticateAsync({
         disableDeviceFallback: !activateDeviceFallback,
         promptMessage: "Unlock App",
         // fallbackLabel: "Enter PIN",
      });

      if (result.success) {
         console.log("Authentication Successful", "Welcome back!");
         router.push('/Verification')
      } else {
         console.log("Authentication Failed", "Try again.");
      }
   };
   return [isBiometricSupported, handleBiometricAuth] as const;
}

export default useBiometrics