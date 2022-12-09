import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';

const CustomInput = ({label, password, error, onFocus, ...props}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <View style={{marginBottom: 20}}>
      <Text style={{
        marginVertical: 5,
        fontSize: 16, 
        fontWeight: '600',
        lineHeight: 22,
        letterSpacing: 0.08
      }}>
        {label}
      </Text>
      <View style={[
        styles.inputContainer,
        {borderColor: error ? '#ff0000' : isFocus ? '#CBC0C0' : '#F2F2F2'},
        ]}>
        <TextInput 
        secureTextEntry={hidePassword}
        {...props} 
        style={{
          marginLeft: 10, 
          flex: 1
        }}
        onFocus={() => {
          onFocus();
          setIsFocus(true);
        }}
        onBlur = {() => {
          setIsFocus(false);
        }}
        />
        {password && (
          <TouchableOpacity onPress={() => {
            setHidePassword(!hidePassword);
            }}>
            {hidePassword ? (
              <Feather name="eye" size={24} color="black" />
            ) : (
              <Feather name="eye-off" size={24} color="black" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 320,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default CustomInput