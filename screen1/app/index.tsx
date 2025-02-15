import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import CategoryBox from '@/src/components/CategoryBox'

const index = () => {
  return (
    <View style={{flex:1, gap: 10, backgroundColor: 'white'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backIconContainer}>
          <Image style={styles.backIcon} source={require('../assets/images/arrow.png')} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 500}}>Categories</Text>
      </View>
      <View style={styles.categoryContainer}>
        <CategoryBox categoryName="Electronics" categoryImage={require('../assets/images/electronics.png')} />
        <CategoryBox categoryName="Fashion" categoryImage={require('../assets/images/fashion.png')} />
        <CategoryBox categoryName="Furniture" categoryImage={require('../assets/images/furniture.png')} />
        <CategoryBox categoryName="Industrial" categoryImage={require('../assets/images/industrial.png')} />
        <CategoryBox categoryName="Home Decor" categoryImage={require('../assets/images/homedecor.png')} />
        <CategoryBox categoryName="Electronics" categoryImage={require('../assets/images/tv.png')} />
        <CategoryBox categoryName="Health" categoryImage={require('../assets/images/health.png')} />
        <CategoryBox categoryName="Construction & Real State" categoryImage={require('../assets/images/home.png')} />
        <CategoryBox categoryName="Fabrication Service" categoryImage={require('../assets/images/fabrication.png')} />
        <CategoryBox categoryName="Electrical Equipment" categoryImage={require('../assets/images/electrical.png')} />
        <CategoryBox />
      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  headerContainer: {
    //backgroundColor: 'blue',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  backIconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 15,
    //backgroundColor: 'red'
  },
  backIcon: {
    //width: 24,
    //height: 24,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
})