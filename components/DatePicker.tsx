import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Colors from './Colors';
import Entypo from '@expo/vector-icons/Entypo';

const DatePicker = () => {
   const [selectedDate, setSelectedDate] = useState('');
   const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
   const [isYearPickerVisible, setYearPickerVisible] = useState(false);

   // Configure Locale for Short Month and Day Names
   LocaleConfig.locales['eng'] = {
      monthNames: [
         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      monthNamesShort: [
         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      dayNames: [
         'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
      ],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
   };

   // Set the locale to 'eng'
   LocaleConfig.defaultLocale = 'eng';

   const styles = StyleSheet.create({
      container: {
         flex: 1,
         borderRadius: 10,
         marginTop: 20,
         overflow: 'hidden',
      },
      yearPickerModal: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      yearItem: {
         padding: 16,
         backgroundColor: Colors.BASE,
         marginVertical: 4,
         borderRadius: 8,
         width: 100,
         alignItems: 'center',
      },
      yearText: {
         color: '#fff',
         fontSize: 16,
         fontWeight: 'bold',
      },
   });

   const renderYearPicker = () => {
      const years = Array.from({ length: 50 }, (_, i) => 2025 - i); // Generate the last 50 years

      return (
         <Modal
            visible={isYearPickerVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setYearPickerVisible(false)}
         >
            <View style={styles.yearPickerModal}>
               <FlatList
                  data={years}
                  keyExtractor={(item) => item.toString()}
                  renderItem={({ item }) => (
                     <TouchableOpacity
                        style={styles.yearItem}
                        onPress={() => {
                           setCurrentYear(item);
                           setYearPickerVisible(false);
                        }}
                     >
                        <Text style={styles.yearText}>{item}</Text>
                     </TouchableOpacity>
                  )}
               />
            </View>
         </Modal>
      );
   };

   return (
      <View style={styles.container}>
         {renderYearPicker()}
         <Calendar
            onDayPress={(day: any) => setSelectedDate(day.dateString)}
            hideExtraDays={true}
            markedDates={{
               [selectedDate]: { selected: true, selectedColor: '#6a0dad' },
            }}
            renderArrow={(direction: string) =>
               direction === 'left' ? (
                  <Entypo name="chevron-left" size={24} color={Colors.BASE} />
               ) : (
                  <Entypo name="chevron-right" size={24} color={Colors.BASE} />
               )
            }
            enableSwipeMonths={true}
            renderHeader={(date:any) => {
               const month = LocaleConfig.locales['eng'].monthNames[new Date(date).getMonth()];
               return (
                  <TouchableOpacity onPress={() => setYearPickerVisible(true)}>
                     <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.BASE }}>
                        {month} {currentYear}
                     </Text>
                  </TouchableOpacity>
               );
            }}
            theme={{
               backgroundColor: '#9c27b0',
               calendarBackground: '#e1bee7',
               selectedDayBackgroundColor: '#6a0dad',
               todayTextColor: '#6a0dad',
               arrowColor: Colors.BASE,
               textSectionTitleColor: Colors.BASE,
               monthTextColor: '#6a0dad',
               textDayFontFamily: 'poppins-bold',
               textDayFontWeight: 'bold',
               textDayStyle: { color: Colors.BASE },
               textMonthFontFamily: 'poppins-bold',
               textDayHeaderFontFamily: 'poppins-regular',
            }}
         />
      </View>
   );
};

export default DatePicker;
