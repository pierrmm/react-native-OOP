import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardWithDesc = ({title, desc}) => {
  return (
    <View>
    <View style={styles.container}>
        <Text style={styles.TextJudul}>{title}</Text>
        <Text style={styles.TextDesc}>{desc}</Text>
    </View>
</View>
  )
}

export default CardWithDesc



const styles = StyleSheet.create({
    container: {
       padding: 20,
       alignContent: 'center',
       alignItems: 'center',
       borderWidth: 1,
       borderRadius: 10,
       marginHorizontal: 10,
       marginTop: 10,
    },
    TextJudul: {
        fontSize: 20,
        fontWeight: '400',

    },
    TextDesc: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: '300',
    },
    
})