import { StyleSheet, Text, View, LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import TabBottom from './navigation/TabBottom';
import Details from './screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen 
          name='Splash' 
          component={SplashScreen} 
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen 
          name='Register' 
          component={Register} 
          options={{
            headerTitle: 'Create an Account',
            headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen 
          name='Home'
          component={TabBottom} 
          options={{headerShown: false}}
        />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
