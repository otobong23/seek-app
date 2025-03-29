import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { FC } from 'react'
import Header from '@/components/Header';
import Colors from '@/components/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const work = <MaterialIcons name="work-outline" size={24} color="#0007" />
const entertainment = <Ionicons name="game-controller-outline" size={24} color="#0007" />
const topics = <MaterialCommunityIcons name="bookmark-box-multiple-outline" size={24} color="#0007" />


const Interest: FC<interestProps> = ({ gender }) => {
   const [selectedInterest, setSelectedInterest] = React.useState<selectedInterestType>({
      'work': [],
      'entertainment': [],
      'topics': [],
   })
   const interests = [
      {
         name: 'work',
         icon: work,
         text: `Meet amazing ${gender === 'non-binary' ? 'persons' : gender} with diverse cultures, great personalities and more`,
         actionButtons: ['Music', 'Movies', 'Books', 'Travel', 'Food', 'Sports', 'Fitness', 'Fashion', 'Art', 'Technology'],
      },
      {
         name: 'entertainment',
         icon: entertainment,
         text: `Meet amazing ${gender === 'non-binary' ? 'persons' : gender} with diverse cultures, great personalities and more`,
         actionButtons: ['Music', 'Movies', 'Books', 'Travel', 'Food', 'Sports', 'Fitness', 'Fashion', 'Art', 'Technology'],
      },
      {
         name: 'topics',
         icon: topics,
         text: `Meet amazing ${gender === 'non-binary' ? 'persons' : gender} with diverse cultures, great personalities and more`,
         actionButtons: ['Music', 'Movies', 'Books', 'Travel', 'Food', 'Sports', 'Fitness', 'Fashion', 'Art', 'Technology'],
      },
   ]
   const style = StyleSheet.create({
      View: {
         padding: 16,
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-between',
      },
   })

   const handleActiveButtons = (button: string, name: 'work' | 'entertainment' | 'topics') => {
      setSelectedInterest((prev) => {
         // Create a new copy of the category array
         const updatedCategory = prev[name].includes(button)
            ? prev[name].filter(item => item !== button) 
            : [...prev[name], button];
         return { 
            ...prev, 
            [name]: updatedCategory 
         };
      });
   };
   

   const handleNext = () => {
      // Handle the next button press
      console.log('Next button pressed from Interest page');
   }
   return (
      <View style={style.View}>
         <View>
            <Header title="What are you into?" />
            <View style={{ marginTop: 40, paddingBottom: 20 }}>
               <FlatList
                  data={interests}
                  renderItem={({ item }) => (
                     <View style={{ marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row', gap: 10, padding: 20, borderRadius: 10, backgroundColor: Colors.CONTAINTER }}>
                           <View style={{ flex: 1, }}>
                              <Text style={{ fontFamily: 'poppins-bold', fontSize: 18, color: '#000', marginBottom: 5 }}>{item.name.toLowerCase()}</Text>
                              <Text style={{ fontFamily: 'poppins-regular', fontSize: 14, color: '#000' }}>{item.text}</Text>
                           </View>
                           {item.icon}
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
                           {item.actionButtons.map((button, index) => (
                              <TouchableOpacity onPress={() => handleActiveButtons(button, item.name as 'work' | 'entertainment' | 'topics')} key={index} style={{ backgroundColor: selectedInterest[item.name as 'work' | 'entertainment' | 'topics'].includes(button) ? Colors.BASE : Colors.CONTAINTER, paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12, }}>
                                 <Text style={{ color: selectedInterest[item.name as 'work' | 'entertainment' | 'topics'].includes(button) ? Colors.WHITE : Colors.BASE, fontFamily: 'poppins-medium', fontSize: 14 }}>{button}</Text>
                              </TouchableOpacity>)
                           )}
                        </View>
                     </View>
                  )}
                  keyExtractor={(item) => item.name}
                  showsVerticalScrollIndicator={false}
                  style={{ marginBottom: 20 }}
               />
            </View>
         </View>

         <View style={{ marginTop: 'auto' }}>
            <View nativeID='progress' style={{ flexDirection: 'row', alignItems: 'center', gap: 15, paddingBottom: 40, flex: 1, }}>
               <View style={{ height: 2, backgroundColor: Colors.PRIMARY_G, flex: 0.9, }}></View>
               <View style={{ height: 2, backgroundColor: "#fff8", flex: 0.1, }}></View>
            </View>

            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default Interest