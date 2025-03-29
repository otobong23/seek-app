import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * 
 * @name usePin
 * @returns {Object} - An object containing functions to save, verify, and clear the PIN
 * @description This hook provides functions to save, verify, and clear a PIN using AsyncStorage.
 * It allows you to securely store a PIN on the device and retrieve it when needed.
 * The PIN is stored as a string in AsyncStorage.
 * It is recommended to use this hook for managing PINs in your application.
 * @author Miracle Boniface
 */
const usePin = () => {
   /**
    * 
    * @name savePIN
    * @param pin - The PIN to be saved
    * @returns {Promise<void>} - A promise that resolves when the PIN is saved
    * @description This function saves the provided PIN to AsyncStorage.
    * It uses AsyncStorage to store the PIN securely on the device.
    * The PIN is stored as a string.
    * @author Miracle Boniface
    */
   const savePIN = async (pin: string) => {
      await AsyncStorage.setItem("userPIN", pin);
   };

   /**
    * 
    * @name verifyPIN
    * @param enteredPIN - The PIN entered by the user
    * @returns {Promise<boolean>} - A promise that resolves to true if the entered PIN matches the saved PIN, false otherwise
    * @description This function verifies if the entered PIN matches the saved PIN.
    * It retrieves the saved PIN from AsyncStorage and compares it with the entered PIN.
    * @author Miracle Boniface
    */
   const verifyPIN = async (enteredPIN: string) => {
      const savedPIN = await AsyncStorage.getItem("userPIN");
      return savedPIN === enteredPIN;
   };

   /**
    * 
    * @name clearPIN
    * @returns {Promise<void>} - A promise that resolves when the PIN is cleared
    * @description This function clears the saved PIN from AsyncStorage.
    * It removes the PIN from the device storage.
    * @author Miracle Boniface
    */
   const clearPIN = async () => {
      await AsyncStorage.removeItem("userPIN");
   }
   return (
      {
         savePIN,
         verifyPIN,
         clearPIN,
      }
   )
}

export default usePin