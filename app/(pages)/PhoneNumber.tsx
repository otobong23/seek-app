import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, FlatList } from 'react-native'
import { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'
import CountryFlag from "react-native-country-flag"
import Modal from "react-native-modal"
import countries from '@/components/countries'


const PhoneNumber = () => {
   const [phone, setPhone] = useState('') // inputed phone number
   const [selected, setSelected] = useState({ name: "united-states", code: "US" }) // selected country
   const [isModalVisible, setModalVisible] = useState(false);
   const [flagLoading, setFlagLoading] = useState(false)

   const styles = StyleSheet.create({
      View: {
         padding: 16,
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'space-between',
      },
      otpInput: {
         width: '100%',
         height: 60,
         fontSize: 16,
         paddingInline: 10,
         paddingBlock: 20,
         backgroundColor: Colors.CONTAINTER,
         borderWidth: 0,
         borderColor: 'transparent',
         outlineColor: 'transparent',
         borderRadius: 5,
         fontFamily: 'poppins-regular',
      },
      flag: {
         backgroundColor: Colors.CONTAINTER,
         padding: 8,
         paddingInline: 20,
         alignItems: 'center',
         borderRadius: 8,
         fontFamily: 'poppins-regular',
         fontSize: 10,
      }
   })
   const handleNext = () => {
      console.log('Next Button pressed from Phone Number Page')
      // router.push('')
   }
   const handleEmail = () => {

   }

   const onPressFlag = async () => {
      setFlagLoading(true)
      const timer = setTimeout(() => {
         setFlagLoading(false)
         setModalVisible(true)
      }, 3000);
   }
   return (
      <View style={styles.View}>
         <View>
            <Header title='Phone Number' />
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 40, gap: 10 }}>
               <TouchableOpacity style={styles.flag} onPress={onPressFlag}>
                  {flagLoading ? <ActivityIndicator style={{ marginBlock: 'auto' }} /> : <View style={{ marginBlock: 'auto' }}><CountryFlag isoCode={selected.code} size={16} /></View>}
               </TouchableOpacity>
               <TextInput value={phone} keyboardType='numeric' style={styles.otpInput} onChangeText={(text) => setPhone(text)} placeholder='' placeholderTextColor={'#0007'} />
            </View>
            <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, marginBlock: 20, textAlign: 'center' }}>Add your number to recieve a code</Text>
            <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{ flex: 1 }}>
               <View style={{ flex: 1 }}>
                  <FlatList
                     showsHorizontalScrollIndicator={false}
                     style={{ gap: 5, }}
                     data={countries}
                     keyExtractor={(item) => item.name}
                     renderItem={({ item }) => (
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5, margin: 5, }} onPress={() => { setSelected(item); setModalVisible(false); }} className="p-3 border-b">
                           <View style={{ marginBlock: 'auto' }}><CountryFlag isoCode={item.code} size={20} /></View>
                           <Text style={{ color: Colors.WHITE, textTransform: "capitalize", fontSize: 16, }}>{item.name}</Text>
                        </TouchableOpacity>
                     )}
                  />
               </View>
            </Modal>
         </View>

         <View style={{ marginTop: 'auto' }}>
            <TouchableOpacity onPress={handleEmail} style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 60 }}>
               <Text style={{ fontFamily: 'poppins-regular', fontSize: 16, color: Colors.WHITE, }}>Use Email Instead</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

export default PhoneNumber