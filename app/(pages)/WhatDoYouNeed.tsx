
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'

const WhatDoYouNeed = () => {
   const [selectedOption, setSelectedOption] = useState<Array<'date' | 'have_fun'>>([]);

   const handleNext = () => {
      console.log('Next Button pressed from WhatDoYouNeed Page')
      // router.push('')
   }
   const options = [
      { id: 'date', label: 'Date', text: 'Find that amazing person for you in a place filed with amazing people' },
      { id: 'have_fun', label: 'Have Fun', text: 'Make your frends at every stage of your life and have fun meeting new people' },
   ];

   const styles = StyleSheet.create({
      View: {
         padding: 16,
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-between',
      },
      ViewSelection: {
         marginTop: 40,
      },
      container: {
         marginBottom: 40,
      },
      item: {
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: Colors.CONTAINTER,
         gap: 10,
         paddingBlock: 16,
         paddingInline: 20,
         borderRadius: 10,
      },
      h2: {
         fontSize: 18,
         fontFamily: 'poppins-bold',
         fontWeight: 'bold'
      },
      p: {
         fontSize: 12,
         fontFamily: 'poppins-regular',
         fontWeight: '500'
      },
      radioCircle: {
         height: 20,
         width: 20,
         borderRadius: 10,
         borderWidth: 2,
         borderColor: Colors.BASE,
         alignItems: 'center',
         justifyContent: 'center',
         marginLeft: 'auto',
      },
      selectedRadio: {
         height: 10,
         width: 10,
         borderRadius: 5,
         backgroundColor: Colors.BASE,
      },
      data: {
         flexDirection: 'row',
         alignItems: 'stretch',
         marginTop: 10,
         justifyContent: 'space-between',
      },
   })
   const handleSelectedOption = (id: 'date' | 'have_fun') => {
      setSelectedOption(prev => {
         const updatedCategory = prev.includes(id)
            ? prev.filter(item => item !== id) 
            : [...prev, id];
         return updatedCategory;
      })
   }
   return (
      <View style={styles.View}>
         <View>
            <Header title="What Do You Need?" />
            <View style={styles.ViewSelection}>
               {options.map((option) => (
                  <View style={styles.container} key={option.id}>
                     <TouchableOpacity onPress={() => handleSelectedOption(option.id as 'date' | 'have_fun')} style={styles.item}>
                        <View style={{flex: 1}}>
                           <Text style={styles.h2}>{option.label}</Text>
                           <Text style={styles.p}>{option.text}</Text>
                        </View>
                        <View style={styles.radioCircle}>
                           {selectedOption?.includes(option.id as 'date' | 'have_fun') && <View style={styles.selectedRadio} />}
                        </View>
                     </TouchableOpacity>
                  </View>
               ))}
            </View>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, textAlign: 'center', lineHeight: 27 }}>Choose a mode to help us find the right match for you. You will be able to switch mode when you're all setup.</Text>
         </View>


         <View style={{ marginTop: 'auto' }}>
            <View nativeID='progress' style={{ flexDirection: 'row', alignItems: 'center', gap: 15, paddingBottom: 40, flex: 1, }}>
               <View style={{height: 2, backgroundColor: Colors.PRIMARY_G, flex: 0.8,}}></View>
               <View style={{height: 2, backgroundColor: "#fff8", flex: 0.2,}}></View>
            </View>

            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>

      </View>
   )
}

export default WhatDoYouNeed