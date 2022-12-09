import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Search from '../screens/Search'
import AddEntry from '../screens/AddEntry'
import Menu from '../screens/Menu'
import Home from '../screens/Home'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabBottom = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}
    }}>
      <Tab.Screen name='Home2' component={Home} options={{
        headerShown: false,
        tabBarIcon: ({}) => (
          <Entypo name="home" size={24} color="black" />
        )
      }}/>
      <Tab.Screen name='Seach' component={Search} options= {{
        tabBarIcon: ({}) => (
          <Feather name="search" size={24} color="#595959" />
        )
      }}/>
      <Tab.Screen name='AddEntry' component={AddEntry} options={{
        tabBarIcon: ({}) => (
          <Ionicons name="add-circle" size={32} color="#FF004D" />
        ),
        headerShown: false
      }}/>
      <Tab.Screen name='Menu' component={Menu} options={{
        tabBarIcon: ({}) => (
          <EvilIcons name="navicon" size={24} color="#595959" />
        )
      }}/>
    </Tab.Navigator>
  )
}

export default TabBottom