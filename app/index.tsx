import * as React from 'react';
import Weather from "./Weather";
import SearchScreen from "./SearchScreen";
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Weather,
      options: {title: 'Welcome'},
    },
    SearchCity: {
      screen: SearchScreen,
      options: {title: 'Welcome'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);
export default function Index() {
   return <Navigation />;
}

