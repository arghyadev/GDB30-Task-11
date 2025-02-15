import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <View style={{width: 115, height: 115, borderRadius: 10, backgroundColor: '#D9D9D9'}}></View>
        <Text style={{color: '#FFF', fontSize: 14, fontWeight: 500, marginTop: 5}}>{props.name}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})