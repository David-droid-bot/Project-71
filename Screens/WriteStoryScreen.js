import React from 'react';
import {TouchableOpacity,StyleSheet,View,TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class Writestoryscreen extends React.Component{
    constructor(){
        super();
        this.state={
            scannedstorytitle:'',
            scannedauthor:'',
            scannedwriteyourstory:'',
            submittedstory:'',
        }
    }

   submitstory=async()=>{
        var summarymessage
        db.collection("story").doc(this.state.submittedstory).get()
        .then((doc)=>{
            console.log(doc.data())
    
            var storie=doc.data();
            if (storie.submitted){
                this.InitiateStorySubmission();
            summarymessage="Story Submitted"
                
            }
            else{
                this.InitiateStoryUnsubmission();
                summarymessage="Story Unsubmitted"
    
    
                
            }
        })
    }
    render(){
        return(
            <View style={design.forView}>

                <Header
                backgroundColor='cyan'
                centerComponent={{text:"Story Hub",fontWeight:'bold'}}/>
                
                <View>
                    <TextInput
                    style={design.forInputBox}
                    placeholder="Story Title"
                    value={this.state.scannedstorytitle}
                    />
                </View>

                <View>
                    <TextInput
                    style={design.forInputBox}
                    placeholder="Author"
                    value={this.state.scannedauthor}
                    />
                </View>

                <View>
                    <TextInput
                    style={design.forInputBox}
                    placeholder="Write your story"
                    value={this.state.scannedwriteyourstory}
                    />
                </View>
                <TouchableOpacity
                onPress={async()=>{this.submitstory()}}>
                    <Text style={design.forText}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const design=StyleSheet.create({
    forText:{
        fontSize:30,
        color:'black'
    },
    forInputBox:{
        marginTop:20,
        borderWidth:4,
        borderColor:'pink',
        borderRadius:30
    },
    forView:{
        flex:1,
        alignItems:'center'
    }
})