
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import Colors from '@/components/Colors'
import CountryFlag from "react-native-country-flag"
import AntDesign from '@expo/vector-icons/AntDesign'
import Modal from "react-native-modal"
import countries from '@/components/countries'
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router'
import { Image } from 'react-native'
// import { ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";


const Verification = () => {
   const router = useRouter()
   const [selectedOption, setSelectedOption] = useState<string | null>(null);
   const [selected, setSelected] = useState({ name: "united-states", code: "US" })
   const [isModalVisible, setModalVisible] = useState(false);
   const [flagLoading, setFlagLoading] = useState(false)

   const [image, setImage] = useState<any | null>(null);

   const handleNext = () => {
      console.log('Next Button pressed from Verification Page')
      router.push('/Birthday')
   }


   // // Function to request permissions
   // const requestPermissions = async () => {
   //    if (Platform.OS === "android") {
   //       try {
   //          const granted = await PermissionsAndroid.request(
   //             PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
   //             {
   //                title: "Storage Permission Required",
   //                message: "This app needs access to your storage to select photos",
   //                buttonPositive: "OK",
   //             }
   //          );

   //          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
   //             console.log("Storage permission denied");
   //          }
   //       } catch (err) {
   //          console.warn(err);
   //       }
   //    }
   // };

   // // Call permissions request on mount
   // useEffect(() => {
   //    requestPermissions();
   // }, []);

   // const pickImage = async () => {
   //    launchImageLibrary({ mediaType: "photo" }, (response: ImagePickerResponse) => {
   //       if (response.didCancel) {
   //          console.log("User cancelled image picker");
   //       } else if (response.errorCode) {
   //          console.log("ImagePicker Error:", response.errorMessage);
   //       } else if (response.assets && response.assets.length > 0) {
   //          setImage(response.assets[0]); // Save image details to state
   //       }
   //    });
   // };

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ['images', 'videos'],
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });
      if (!result.canceled) {
         setImage(result.assets[0].uri);
      }
   };

   const options = [
      { id: 'id_card', label: 'National/Social Security ID', text: 'Capture a clear photo of your ID' },
      { id: 'bill', label: 'Tax/Bill Payment', text: 'Capture a clear photo of your Bill Payment' },
   ];
   const onPressFlag = async () => {
      setFlagLoading(true)
      const timer = setTimeout(() => {
         setFlagLoading(false)
         setModalVisible(true)
      }, 3000);
   }
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
         fontWeight: '600'
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
      input: {
         backgroundColor: Colors.CONTAINTER,
         width: '50%',
         height: 40,
         padding: 10,
         borderRadius: 8,
         fontFamily: 'poppins-regular',
      },
      flag: {
         backgroundColor: Colors.CONTAINTER,
         padding: 8,
         alignItems: 'center',
         borderRadius: 8,
         fontFamily: 'poppins-regular',
         fontSize: 10,
      },
      addPhoto: {
         backgroundColor: Colors.CONTAINTER,
         flexDirection: 'row',
         alignItems: 'center',
         padding: 8,
         borderRadius: 8,
         fontFamily: 'poppins-regular',
         fontSize: 10,
         gap: 5,
      },
   })
   return (
      <View style={styles.View}>
         <View>
            <Header title="Verification" />
            <View style={styles.ViewSelection}>
               {options.map((option) => (
                  <View style={styles.container} key={option.id}>
                     <TouchableOpacity onPress={() => setSelectedOption(option.id)} style={styles.item}>
                        <View>
                           <Text style={styles.h2}>{option.label}</Text>
                           <Text style={styles.p}>{option.text}</Text>
                        </View>
                        <View style={styles.radioCircle}>
                           {selectedOption === option.id && <View style={styles.selectedRadio} />}
                        </View>
                     </TouchableOpacity>
                     {selectedOption === option.id && (
                        <View style={styles.data}>
                           <TouchableOpacity style={styles.flag} onPress={onPressFlag}>
                              {flagLoading ? <ActivityIndicator style={{ marginBlock: 'auto' }} /> : <View style={{ marginBlock: 'auto' }}><CountryFlag isoCode={selected.code} size={16} /></View>}
                           </TouchableOpacity>
                           <TextInput placeholder={option.id === 'id_card' ? 'ID Number' : 'Tax Number'} style={styles.input} />
                           <TouchableOpacity style={styles.addPhoto} onPress={pickImage}>
                              <AntDesign name="plus" size={16} color="black" />
                              <Text style={{ fontFamily: 'poppins-medium', color: Colors.BASE }}>Add photo</Text>
                           </TouchableOpacity>

                           <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{ flex: 1 }}>
                              <View style={{flex: 1}}>
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
                     )}
                  </View>
               ))}
            </View>
         </View>

         {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, marginTop: 10 }}/>} */}

         <View style={{ marginTop: 'auto' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3, paddingBottom: 40 }}>
               <View><MaterialIcons name="vpn-key" size={16} color={Colors.GRAY} /></View>
               <Text style={{ fontFamily: 'poppins-regular', fontSize: 12, color: Colors.GRAY, }}>Your personal data is secure and entirely private</Text>
            </View>
            <View nativeID='progress' style={{ flexDirection: 'row', alignItems: 'center', gap: 15, paddingBottom: 40, flex: 1, }}>
               <View style={{height: 2, backgroundColor: Colors.PRIMARY_G, flex: 0.6,}}></View>
               <View style={{height: 2, backgroundColor: "#fff8", flex: 0.4,}}></View>
            </View>

            <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', }} onPress={handleNext}>
               <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
            </TouchableOpacity>
         </View>

      </View>
   )
}

export default Verification