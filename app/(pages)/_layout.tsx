import { Slot } from 'expo-router'
import Base from '@/components/Base'

const PagesLayout = () => {
   return (
      <Base>
         <Slot />
      </Base>
   )
}

export default PagesLayout
