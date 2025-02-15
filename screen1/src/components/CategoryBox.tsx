import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryBox = (props) => {
  return (
    <View style={styles.box}>
        <Image style={styles.image} source={props.categoryImage} />
        <Text style={{fontSize: 12, fontWeight: 400, color: '#1C1B1B'}}>{props.categoryName}</Text>
    </View>
  )
}

CategoryBox.defaultProps = {
  categoryImage: require('../../assets/images/electronics.png'),
  categoryName: 'Electronics'
}

export default CategoryBox

const styles = StyleSheet.create({
  box: {
    width: '45%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10
  },
  image: {
    height: 38,
    width: 38,
    marginBottom: 10,
  }
})