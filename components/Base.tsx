import { View, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import Colors from './Colors'
import { LinearGradient } from 'expo-linear-gradient'

const Base = ({ children }: { children: React.ReactNode }) => {
   const windowHeight = Dimensions.get('window').height;
   
   return (
      <LinearGradient colors={[Colors.PRIMARY_G, Colors.SECONDARY_G]} style={{ flex: 1 }}>
         <SafeAreaView style={{ flex: 1 }}>
            <ScrollView 
               contentContainerStyle={{ flexGrow: 1 }} 
               style={{ flex: 1 }} 
            >
               <View style={{ flex: 1, minHeight: windowHeight }}>
                  {children}
               </View>
            </ScrollView>
         </SafeAreaView>
      </LinearGradient>
   )
}

export default Base
