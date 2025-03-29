
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'

const WhatDoYouWant = () => {
   const [selectedOption, setSelectedOption] = useState<Array<'men' | 'women' | 'non_binary'>>([]);

   const handleNext = () => {
      console.log('Next Button pressed from WhatDoYouWant Page')
      // router.push('')
   }
   const options = [
      { id: 'men', label: 'Men', text: 'Meet amazing men with diverse cultures, great personalities and more' },
      { id: 'women', label: 'Women', text: 'Connect with awesome ladies of every type, vibrant with unique stories' },
      { id: 'non_binary', label: 'Non-Binary', text: 'People with determination to live on the outside of definition are here as well' },
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
   const handleSelectedOption = (id: 'men' | 'women' | 'non_binary') => {
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
            <Header title="What Do You Want?" />
            <View style={styles.ViewSelection}>
               {options.map((option) => (
                  <View style={styles.container} key={option.id}>
                     <TouchableOpacity onPress={() => handleSelectedOption(option.id as 'men' | 'women' | 'non_binary')} style={styles.item}>
                        <View style={{flex: 1}}>
                           <Text style={styles.h2}>{option.label}</Text>
                           <Text style={styles.p}>{option.text}</Text>
                        </View>
                        <View style={styles.radioCircle}>
                           {selectedOption?.includes(option.id as 'men' | 'women' | 'non_binary') && <View style={styles.selectedRadio} />}
                        </View>
                     </TouchableOpacity>
                  </View>
               ))}
            </View>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, textAlign: 'center' }}>You can choose more than one answer</Text>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, textAlign: 'center' }}>and change any time.</Text>
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

export default WhatDoYouWant