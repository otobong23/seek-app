import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'

const EmailAddress = () => {
   const [email, setEmail] = useState('') // inputed email address
   const styles = StyleSheet.create({
      View: {
         padding: 16,
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-between',
      },
      otpInput: {
         width: '100%',
         height: 80,
         fontSize: 16,
         paddingInline: 10,
         paddingBlock: 20,
         marginTop: 40,
         backgroundColor: Colors.CONTAINTER,
         borderWidth: 0,
         borderColor: 'transparent',
         outlineColor: 'transparent',
         borderRadius: 5,
         fontFamily: 'poppins-regular',
      }
   })
   const handleNext = () => {
      console.log('Next Button pressed from Email Address Page')
      // router.push('')
   }
   const handlePhone = () => {

   }
   return (
      <View style={styles.View}>
         <View>
            <Header title='Your Email Address' />
            <TextInput value={email} style={styles.otpInput} onChangeText={(text) => setEmail(text)} placeholder='Your Current Email' placeholderTextColor={'#0007'} />
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, marginBlock: 20, textAlign: 'center' }}>Add your email to recieve a code</Text>
         </View>

         <View style={{ marginTop: 'auto' }}>
            <TouchableOpacity onPress={handlePhone} style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 60 }}>
               <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, }}>Use Phone Number Instead</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default EmailAddress