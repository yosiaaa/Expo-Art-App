import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Details = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.goBack('Home')}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Details