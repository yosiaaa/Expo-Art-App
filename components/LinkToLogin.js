import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LinkToLogin = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={{
        color: '#FF004D',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 26,
        textTransform: 'uppercase',
      }}>Create an account ?</Text>
    </TouchableOpacity>
  )
}

export default LinkToLogin