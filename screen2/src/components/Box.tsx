import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Box = () => {
  return (
    <View style={styles.box}>
    </View>
  )
}

export default Box

const styles = StyleSheet.create({
    box: {
      width: 140,
      height: 80,
      borderRadius: 8,
      backgroundColor: '#D9D9D9',
    },
  
})