import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import Writestoryscreen from './Screens/WriteStoryScreen';
import Readstoryscreen from './Screens/ReadStoryScreen';

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const TabNavigator=createBottomTabNavigator({
  Write:{screen:Writestoryscreen},
  Read:{screen:Readstoryscreen}
},

{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routename=navigation.state.routename;
      console.log(routename);
      if(routename==='Read'){
        return(
          <Image
          source={
            require(
              "./assets/book.png"
            )
          }
          style={{
          width:50,
          height:50
        }}/>
        )
      }
      else if(routename==="Write"){
        return(
          <Image
          source={
            require(
              "./assets/searchingbook.png"
            )
          }
          style={{
            height:50,
            width:50
          }}
          />
        )
      }
    }
  })
}
)
const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
