import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'

const Gender = () => {
   const [selectedOption, setSelectedOption] = useState<string | null>(null); // selected Gender

   const options = [
      { id: 'male', label: 'Male' },
      { id: 'female', label: 'Female' },
      { id: 'non_binary', label: 'Non-Binary' },
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
         marginBottom: 20,
      },
      item: {
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: Colors.CONTAINTER,
         paddingBlock: 16,
         paddingInline: 20,
         borderRadius: 10,
      },
      h2: {
         fontSize: 18,
         fontFamily: 'poppins-bold',
         fontWeight: 'bold'
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
   })

   const handleNext = () => {
      console.log('Next Button pressed from Email Address Page')
      // router.push('')
   }

   return (
      <View style={styles.View}>
         <View>
            <Header title='Your Gender' />
            <View style={styles.ViewSelection}>
               {options.map((option) => (
                  <View style={styles.container} key={option.id}>
                     <TouchableOpacity onPress={() => setSelectedOption(option.id)} style={styles.item}>
                        <View>
                           <Text style={styles.h2}>{option.label}</Text>
                        </View>
                        <View style={styles.radioCircle}>
                           {selectedOption === option.id && <View style={styles.selectedRadio} />}
                        </View>
                     </TouchableOpacity>
                  </View>
               ))}
            </View>
         </View>


         <View style={{ marginTop: 'auto' }}>
            <View nativeID='progress' style={{ flexDirection: 'row', alignItems: 'center', gap: 15, paddingBottom: 40, flex: 1, }}>
               <View style={{ height: 2, backgroundColor: Colors.PRIMARY_G, flex: 0.5, }}></View>
               <View style={{ height: 2, backgroundColor: "#fff8", flex: 0.5, }}></View>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Gender