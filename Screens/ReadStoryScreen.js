import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

export default class Readstoryscreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={design.textdesign}>
                    This is the reading space!!!!!
                </Text>
            </View>
        );
    }
}

const design=StyleSheet.create({
    textdesign:{
        alignItems:'center'
    }
})