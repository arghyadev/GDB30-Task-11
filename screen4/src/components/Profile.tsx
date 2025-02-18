import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = (props) => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.image}></View>
      <View style={{ gap: 5}}>
        <Text style={[styles.profileName, {color: props.nameColor}]}>{props.name}</Text>
        <Text style={styles.profileDesignation}>{props.designation}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.profileImage} source={require('@/assets/images/clock-in.png')} />
        <Text style={{ fontSize: 14, fontWeight: 400, color: props.status === 'On Time' ? '#404040' : '#D84639'}}>{props.clockIn}</Text>
        <View style={{width: 1, height: 20, backgroundColor: '#E0E0E0', marginLeft: 10, marginRight: 10}}></View>
        <Image style={styles.profileImage} source={require('@/assets/images/clock-out.png')} />
        <Text style={{ fontSize: 14, fontWeight: 400, color: '#404040'}}>{props.clockOut}</Text>
        </View>
        
      </View>
      <View style={{flexDirection: 'row', gap: 4, marginLeft: 'auto', backgroundColor: props.status === 'On Time' ? '#8DD4B429' : '#EBA29C29', width: 80, height: 30, paddingHorizontal: 8, alignItems: 'center', borderRadius: 6}}>
        <View style={{backgroundColor: props.status === 'On Time' ? '#1BAA69' : '#D84639', height: 8, width: 8, borderRadius: 4}}></View>
        <Text style={{fontSize: 12, fontWeight: 400, color: '#404040'}}>{props.status}</Text>
    </View>
    </View>
  )
}


export default Profile

const styles = StyleSheet.create({
    boxContainer: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        height: 100,
        padding: 10,
        gap: 15,
        //flex: 1,
        backgroundColor: '#fff',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        flexDirection: 'row',

    },
    image: {
        height: 48, 
        width: 48, 
        borderRadius: 24, 
        backgroundColor: '#E0E0E0'
    },
    profileName: {
        fontSize: 14,
        fontWeight: 500,
        color: '#0A0A0A',
        //marginBottom: 4
    },
    profileDesignation: {
        fontSize: 12,
        fontWeight: 400,
        color: '#616161'
    },
    profileImage: {
        height: 16,
        width: 16,
        marginRight: 4
    }
})