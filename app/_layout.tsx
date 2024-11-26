import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {Stack} from 'expo-router';

const RootLayout = () => {
  return (
    <Stack initialRouteName='HomeScreen'>
         <Stack.Screen name='HomeScreen' options={{headerShown:false}}/>
         <Stack.Screen name='DetailsScreen' options={{headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})