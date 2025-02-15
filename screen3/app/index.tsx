import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Category from '@/src/components/Category'

const index = () => {
  return (
    <View style={ styles.container }>
      <Text style={{ fontSize: 36, fontWeight: 400, color: '#FCFCFC', width: '85%' }}>Choose the film you like! Start streaming now!</Text>
      <View style={styles.movieContainer}>
        <Category name="Romance" />
        <Category name="Drama" />
        <Category name="Action" />
        <Category name="Horror" />
        <Category name="Comedy" />
        <Category name="Kids" />
        <Category name="Fantasy" />
        <Category name="Adventure" />
        <Category name="Korean" />
      </View>
      <TouchableOpacity style={ styles.touchableOpacity }>
        <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 600, textAlign: 'center' }}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
    paddingTop: 20
  },
  movieContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    flexWrap: 'wrap',
    marginTop: 20,
    gap: 8
  },
  touchableOpacity: {
    marginTop: 20,
    width: '100%',
    height: 60,
    backgroundColor: '#DD70EC',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})