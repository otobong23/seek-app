import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'
import DatePicker from '@/components/DatePicker'

const Birthday = () => {
   const style = StyleSheet.create({
      View: {
         padding: 16,
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-between',
      },
   })
   const handleNext = () => {
      // Handle the next button press
      console.log('Next button pressed from birthday page');
   }
   return (
      <View style={style.View}>
         <View>
            <Header title="Your Birthday" />
            <DatePicker />
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

export default Birthday