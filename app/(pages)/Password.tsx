import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const Password = () => {
   const [password, setPassword] = useState('') // inputed Password
   const [isGood, setIsGood] = useState(false)
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
         paddingRight: 45,
         backgroundColor: Colors.CONTAINTER,
         borderWidth: 0,
         borderColor: 'transparent',
         outlineColor: 'transparent',
         borderRadius: 5,
         fontFamily: 'poppins-regular',
      }
   })
   const handleNext = () => {
      console.log('Next Button pressed from Password Page')
      // router.push('')
   }
   return (
      <View style={styles.View}>
         <View>
            <Header title="Your Password" />
            <View style={{ flex: 1, flexDirection: 'row', position: 'relative', marginTop: 40,}}>
               <TextInput value={password} style={styles.otpInput} onChangeText={(text) => setPassword(text)} placeholder='Unique Password' placeholderTextColor={'#0007'} />
               <FontAwesome5 name="check-circle" size={24} color={isGood ? Colors.PRIMARY_G : '#0007'} style={{position: 'absolute', top: '35%', right: 15,}} />
            </View>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, marginTop: 10, }}>8 Characters Minimum.</Text>
         </View>

         <View style={{ marginTop: 'auto' }}>
            <View nativeID='progress' style={{ flexDirection: 'row', alignItems: 'center', gap: 15, paddingBottom: 40, flex: 1, }}>
               <View style={{ height: 2, backgroundColor: Colors.PRIMARY_G, flex: 0.3, }}></View>
               <View style={{ height: 2, backgroundColor: "#fff8", flex: 0.7, }}></View>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Password