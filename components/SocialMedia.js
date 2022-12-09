import { View, Text, Image } from 'react-native'
import React from 'react'

const SocialMedia = () => {
  return (
    <View style={{
      flexDirection: 'row', 
      justifyContent: 'space-between',
      marginHorizontal: 20,
      flexGrow: 0
      }}>
      <Image source={{uri: 'https://img.icons8.com/fluency/48/null/facebook-new.png'}} style={{width: 48, height: 48}}/>
      <Image source={{uri: 'https://img.icons8.com/sf-regular/48/null/mac-os.png'}} style={{width: 48, height: 48}}/>
      <Image source={{uri: 'https://img.icons8.com/color/48/null/google-logo.png'}} style={{width: 48, height: 48}}/>
      <Image source={{uri: 'https://img.icons8.com/fluency/48/null/twitter.png'}} style={{width: 48, height: 48}}/>
    </View>
  )
}

export default SocialMedia