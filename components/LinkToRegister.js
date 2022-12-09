import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LinkToRegister = ({navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text style={{
        color: '#000',
      }}>
        Have an account ?
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack('Splash')}>
        <Text style={{
          color: '#FF004D',
          marginLeft: 5,
        }}>
          Sign in here!
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LinkToRegister