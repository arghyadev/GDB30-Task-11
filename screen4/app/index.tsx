import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Box from '@/src/components/Profile'
import Profile from '@/src/components/Profile'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={ styles.navBarContainer}>
        <Ionicons name="search-outline" size={24} color="#9E9E9E" />
        <TextInput placeholder='Search here....' placeholderTextColor={'#9E9E9E'} />
        <Ionicons name="options-outline" size={24} color="#283fce" style={{ marginLeft: 'auto' }} />
      </View>
      <View style={styles.bodyContainer}>
        <Profile name='Jessica Veranda' designation='Jr. UI/UX Designer' clockIn='08.50' clockOut='18.32' status='On Time' />
        <Profile name='Melvin Og' nameColor='#E4E4E4' designation='Product Manager' clockIn='09.50' clockOut='18.32' status='Overdue' />
        <Profile name='John Keller' designation='Sr. UI/UX Designer' clockIn='08.50' clockOut='18.32' status='On Time' />
        <Profile name='Timothy Stanley' designation='Jr. UI/UX Designer' clockIn='09.50' clockOut='18.32' status='Overdue' />
        <Profile name='James Brown' designation='Full Stack Developer' clockIn='09.50' clockOut='18.32' status='On Time' />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  navBarContainer: {
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  bodyContainer: {
    flex: 1,
    marginTop: 10,
    gap: 10,
  }
})