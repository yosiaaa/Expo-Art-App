import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({label, onPress}) => {
  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TouchableOpacity onPress={onPress} style={{
        backgroundColor: '#FF004D',
        height: 60,
        width: 320,
        borderRadius: 60,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 27.24,
          fontFamily: 'sans-serif',
          color: '#FFFFFF'
        }}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton