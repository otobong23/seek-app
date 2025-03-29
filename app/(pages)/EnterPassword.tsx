import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import Colors from '@/components/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import useBiometrics from '@/hooks/useBiometrics';


const EnterPassword = () => {
   const [password, setPassword] = useState<Array<number>>([])
   const [isLoading, setIsLoading] = useState(false)
   const [isBiometricSupported, handleBiometricAuth] = useBiometrics()

   const style = StyleSheet.create({
      ViewScreen: {
         flex: 1,
         padding: 16,
      },
      profile: {
         width: 100,
         height: 100,
         borderRadius: 999,
         backgroundColor: Colors.GRAY1,
         marginInline: 'auto',
         justifyContent: 'center',
         alignItems: 'center',
         marginBlock: 10
      },
      text: {
         fontSize: 14,
         fontFamily: 'poppins-regular',
         textAlign: 'center',
         marginBlock: 15,
         color: Colors.GRAY
      },
      indicator: {
         width: 20,
         height: 20,
         borderRadius: 999,
         backgroundColor: Colors.GRAY,
      },
      // indicatorActive: {
      //    width: 20,
      //    height: 20,
      //    borderRadius: 999,
      //    backgroundColor: Colors.BASE,
      // },
      digit: {
         fontSize: 30,
         fontFamily: 'poppins-medium',
         color: Colors.BASE
      },
      button: {
         width: 80,
         height: 80,
         borderRadius: 999,
         justifyContent: 'center',
         alignItems: 'center'
      }
   })

   const buttons = [
      { id: 1, title: <Text style={style.digit}>1</Text> },
      { id: 2, title: <Text style={style.digit}>2</Text> },
      { id: 3, title: <Text style={style.digit}>3</Text> },
      { id: 4, title: <Text style={style.digit}>4</Text> },
      { id: 5, title: <Text style={style.digit}>5</Text> },
      { id: 6, title: <Text style={style.digit}>6</Text> },
      { id: 7, title: <Text style={style.digit}>7</Text> },
      { id: 8, title: <Text style={style.digit}>8</Text> },
      { id: 9, title: <Text style={style.digit}>9</Text> },
      { id: 'fingerID', title: <Ionicons name="finger-print" size={30} color="#fff" /> },
      { id: 0, title: <Text style={style.digit}>0</Text> },
      { id: 'backSpace', title: <Ionicons name="backspace-outline" size={30} color="#fff" /> },
   ]
   const onButtonPress = (id: number | string) => {
      if (id === 'backSpace') {
         if (password.length > 0) {
            setPassword(prev => prev.slice(0, -1))
         }
      } else if (typeof id === 'number' && password.length < 6) {
         setPassword((prev) => [...prev, id]);
      }
      else if (id === 'fingerID') {
         if (isBiometricSupported) {
            handleBiometricAuth()
         } else {
            Alert.alert('Biometric authentication not supported')
         }
      }
   }
   const onButtonLongPress = (id: number | string) => {
      if (id === 'backSpace') {
         setPassword([])
      }
   }
   return (
      <View style={style.ViewScreen}>
         <View style={style.profile}>
            <FontAwesome6 name="user" size={30} color={Colors.BASE} />
         </View>
         <Text style={style.text}>Enter Password</Text>
         <View style={{ marginBlock: 20, flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
            {new Array(6).fill("").map((_, index) => (
               <View style={{ ...style.indicator, backgroundColor: index < password.length ? Colors.BASE : Colors.GRAY }} key={index} />
            ))}
         </View>
         <View style={{ marginBlock: 20, }}>
            <FlatList data={buttons}
               numColumns={3}
               nativeID='buttons'
               keyExtractor={item => item.id.toString()}
               contentContainerStyle={{ gap: 20, marginTop: 20 }}
               columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10, }}
               renderItem={({ item }) => item.id === 'fingerID' && isBiometricSupported ? (
                  <TouchableOpacity onPress={() => onButtonPress(item.id)} style={{ ...style.button, backgroundColor: Colors.PRIMARY_G }}>
                     {item.title}
                  </TouchableOpacity>
               ) : item.id === 'fingerID' && !isBiometricSupported ? (<View style={{ ...style.button, backgroundColor: 'none' }}></View>) : (
                  <TouchableOpacity onLongPress={() => onButtonLongPress(item.id)} onPress={() => onButtonPress(item.id)} style={{ ...style.button, backgroundColor: item.id === 'backSpace' ? '#000' : item.id === 'fingerID' ? Colors.PRIMARY_G : '#fff' }}>
                     {item.title}
                  </TouchableOpacity>
               )}
            />
         </View>
         <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ ...style.text, marginTop: 20, color: Colors.BASE }}>Forgot Password?</Text>
         </TouchableOpacity>
      </View>
   )
}

export default EnterPassword