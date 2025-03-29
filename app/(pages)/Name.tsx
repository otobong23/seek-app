import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'

const Name = () => {
   const [firstName, setFirstName] = useState('') // inputed firstName
   const [lastName, setLastName] = useState('') // inputed lastName
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
         marginTop: 10,
         backgroundColor: Colors.CONTAINTER,
         borderWidth: 0,
         borderColor: 'transparent',
         outlineColor: 'transparent',
         borderRadius: 5,
         fontFamily: 'poppins-regular',
      }
   })
   const handleNext = () => {
      console.log('Next Button pressed from Name Page')
      // router.push('')
   }
  return (
   <View style={styles.View}>
   <View>
      <Header title="What's your Name?" />
      <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, marginTop: 40, }}>First Name</Text>
      <TextInput value={firstName} style={styles.otpInput} onChangeText={(text) => setFirstName(text)} placeholder='Your Real Name' placeholderTextColor={'#0007'} />
      <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, marginTop: 20, }}>Last Name</Text>
      <TextInput value={lastName} style={styles.otpInput} onChangeText={(text) => setLastName(text)} placeholder='Your Real Surname' placeholderTextColor={'#0007'} />
   </View>

   <View style={{ marginTop: 'auto' }}>
   <View nativeID='progress' style={{ flexDirection: 'row', alignItems: 'center', gap: 15, paddingBottom: 40, flex: 1, }}>
               <View style={{ height: 2, backgroundColor: Colors.PRIMARY_G, flex: 0.1, }}></View>
               <View style={{ height: 2, backgroundColor: "#fff8", flex: 0.9, }}></View>
            </View>
      <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
         <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
      </TouchableOpacity>
   </View>
</View>
  )
}

export default Name