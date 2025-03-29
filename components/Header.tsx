import { FC } from 'react'
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from './Colors';



const Header: FC<headerProps> = ({ title }) => {
   const navigation = useNavigation();
   const styles = StyleSheet.create({
      TouchableOpacity: {
         flexDirection: 'row',
         alignItems: 'center',
         backgroundColor: Colors.CONTAINTER,
         padding: 12,
         borderRadius: 10,
      },
      Text: {
         fontFamily: 'poppins-medium',
         fontSize: 20,
         textAlign: 'center',
         marginInline: 'auto'
      },
   })
   return (
      <View>
         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.TouchableOpacity}>
            <Ionicons name="chevron-back" size={24} color="black" />
            <Text style={styles.Text}>{title}</Text>
         </TouchableOpacity>
      </View>
   )
}

export default Header