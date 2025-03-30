import Colors from '@/components/Colors'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Index() {
  const router = useRouter()
  const handleNext = () => {
    router.push('/EnterPassword')
  }
  return (
    <View style={{ padding: 16, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text className='font-[poppins-medium] pb-5 text-2xl'>THIS IS THE HOME PAGE, DIDN'T KNOW WHICH SCREEN TO PUT HERE</Text>

      <TouchableOpacity style={{ backgroundColor: Colors.BASE, padding: 13, borderRadius: 12, alignItems: 'center', width: '100%' }} onPress={handleNext}>
        <Text style={{ color: Colors.WHITE, fontFamily: 'poppins-medium', fontSize: 18, letterSpacing: 8 }}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}
