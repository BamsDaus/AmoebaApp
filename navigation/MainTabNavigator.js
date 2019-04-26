import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import CourseScreen from '../screens/CourseScreen';
import PlaygroundScreen from '../screens/PlaygroundScreen';
import DeveloperScreen from '../screens/DeveloperScreen';
import ChallangeScreen from '../screens/ChallangeScreen';

import AlgoritmaScreen from '../screens/courseScreen/AlgoritmaScreen';
import basic from '../screens/courseScreen/algoritmaScreen/basicConcept';
import language from '../screens/courseScreen/algoritmaScreen/Clanguage';
import structure from '../screens/courseScreen/algoritmaScreen/Cstructure';

import VariableScreen from '../screens/courseScreen/VariableScreen';
import konstantaScreen from '../screens/courseScreen/variableScreen/konstanta';
import variables from '../screens/courseScreen/variableScreen/variable';

import TipeDataScreen from '../screens/courseScreen/TipeDataScreen';
import basicConceptTipeData from '../screens/courseScreen/dataTypeScreen/basConcept';
import primitiveScreen from '../screens/courseScreen/dataTypeScreen/primitiveScreen';
import compositeScreen from '../screens/courseScreen/dataTypeScreen/compositeScreen';

import OperatorScreen from '../screens/courseScreen/OperatorScreen';
import basicConceptOperator from '../screens/courseScreen/operatorScreen/basicConceptOperator';
import aritmatikaScreen from '../screens/courseScreen/operatorScreen/aritmatikaScreen';
import logikaScreen from '../screens/courseScreen/operatorScreen/logikaScreen';
import incDecScreen from '../screens/courseScreen/operatorScreen/incDecScreen';
import relasionalScreen from '../screens/courseScreen/operatorScreen/relasionalScreen';
import bitwiseScreen from '../screens/courseScreen/operatorScreen/bitwiseScreen';
import assignmentScreen from '../screens/courseScreen/operatorScreen/assignmentScreen';

import PercabanganScreen from '../screens/courseScreen/PercabanganScreen';
import PerulanganScreen from '../screens/courseScreen/PerulanganScreen';

import appVersion from '../screens/devScreen/appVersionScreen';
import aboutUs from '../screens/devScreen/aboutUsScreen';

const CourseStack = createStackNavigator({
  Course: CourseScreen,
  Algoritma: { screen: AlgoritmaScreen, navigationOptions: { tabBarVisible: false, } },
  basicConcept: { screen: basic, navigationOptions: { tabBarVisible: false, } },
  Clanguage: { screen: language, navigationOptions: { tabBarVisible: false, } },
  Cstructure: { screen: structure, navigationOptions: { tabBarVisible: false, } },

  Variable: { screen: VariableScreen, navigationOptions: { tabBarVisible: false, } },
  konstanta: { screen: konstantaScreen, navigationOptions: { tabBarVisible: false, } },
  varScreen: { screen: variables, navigationOptions: { tabBarVisible: false, } },

  TipeData: { screen: TipeDataScreen, navigationOptions: { tabBarVisible: false, } },
  basConcept: { screen: basicConceptTipeData, navigationOptions: { tabBarVisible: false, } },
  composite: { screen: compositeScreen, navigationOptions: { tabBarVisible: false, } },
  primitive: { screen: primitiveScreen, navigationOptions: { tabBarVisible: false, } },

  Operator: { screen: OperatorScreen, navigationOptions: { tabBarVisible: false, } },
  basicConceptOperator: { screen: basicConceptOperator, navigationOptions: { tabBarVisible: false, } },
  aritmatikaScreen: { screen: aritmatikaScreen, navigationOptions: { tabBarVisible: false, } },
  logikaScreen: { screen: logikaScreen, navigationOptions: { tabBarVisible: false, } },
  incDecScreen: { screen: incDecScreen, navigationOptions: { tabBarVisible: false, } },
  relasionalScreen: { screen: relasionalScreen, navigationOptions: { tabBarVisible: false, } },
  bitwiseScreen: { screen: bitwiseScreen, navigationOptions: { tabBarVisible: false, } },
  assignmentScreen: { screen: assignmentScreen, navigationOptions: { tabBarVisible: false, } },

  Percabangan: { screen: PercabanganScreen, navigationOptions: { tabBarVisible: false, } },
  Perulangan: { screen: PerulanganScreen, navigationOptions: { tabBarVisible: false, } },
});

const PlaygroundStack = createStackNavigator({
  Playground: PlaygroundScreen,
});

const ChallangeStack = createStackNavigator({
  Challange: ChallangeScreen,
});

const DeveloperStack = createStackNavigator({
  Developer: DeveloperScreen,
  appVersion: { screen: appVersion, navigationOptions: { tabBarVisible: false, } },
  aboutUs: { screen: aboutUs, navigationOptions: { tabBarVisible: false, } },
});

CourseStack.navigationOptions = {
  tabBarLabel: 'My Course',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `md-book${focused ? '' : 'md-book'}`
          : 'md-book'
      }
    />
  ),
  tabBarOptions: {
    activeTintColor: '#eb3b5a',
  },
};
PlaygroundStack.navigationOptions = {
  tabBarLabel: 'Playground',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-flash' : 'md-flash'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#eb3b5a',
  },
};
DeveloperStack.navigationOptions = {
  tabBarLabel: 'Dev',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-git-network' : 'md-git-network'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#eb3b5a',
  },
};
ChallangeStack.navigationOptions = {
  tabBarLabel: 'Challange',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-flame' : 'md-flame'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#eb3b5a',
  },
};

export default createBottomTabNavigator(
  {
    CourseStack,
    // PlaygroundStack,
    ChallangeStack,
    DeveloperStack,
  }
);
