/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Countries from './Countries';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const Stack = createStackNavigator();



export default function App() {

    let [fontsLoaded] = useFonts({
      'TitleFamily1': require('./assets/fonts/Montserrat-SemiBold.otf'),
      'TitleFamily2': require('./assets/fonts/Montserrat-SemiBold.otf'),
      'TitleFamily3': require('./assets/fonts/Nexa-Black.otf'),
      'TitleFamily4': require('./assets/fonts/Nexa-Black.otf'),
      'Family1': require('./assets/fonts/Montserrat-Medium.otf'),
      'Family2': require('./assets/fonts/Nexa-Light.otf'),
      'Family3': require('./assets/fonts/Nexa-Light.otf'),
      'Family4': require('./assets/fonts/Nexa-Light.otf'),
    });

    if (!fontsLoaded){
      return <Text>Fonts Loading</Text>;
    }
    else
    {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Countries">
            <Stack.Screen
              name="Countries"
              component={Countries}

              options={{
                title: 'Countries',
                headerStyle: {
                  backgroundColor: '#6481b0',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',

                },
              }}/>
              <Stack.Screen
                name="Home"
                component={Home}

                options={{
                  title: 'Statistics',
                  headerStyle: {
                    backgroundColor: '#6481b0',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
