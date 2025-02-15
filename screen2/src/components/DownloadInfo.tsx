import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DownloadInfo = (props) => {
    return (
        <View style={{justifyContent: 'center', gap: 10}}>
            <Text style={{ fontSize: 14, fontWeight: 700, color: '#FCFCFC' }}>{props.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <Text style={[styles.subText, { color: props.status === 'Finish' ? '#70EC9A' : '#EC7070' }]}>{props.status}</Text>
                <View style={styles.cardTextDot}></View>
                <Text style={ styles.subText}>{props.duration}</Text>
                <View style={styles.cardTextDot}></View>
                <Text style={ styles.subText}>{props.date}</Text>
            </View>
        </View>
    )
}

export default DownloadInfo

const styles = StyleSheet.create({
    subText: {
        fontSize: 12,
        fontWeight: 600,
        color: '#FCFCFC'
    },
    cardTextDot: {
        backgroundColor: "#FCFCFC",
        width: 6,
        height: 6,
        borderRadius: 6,
    },
})