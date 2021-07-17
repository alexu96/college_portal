import React from "react";
import {Text,TouchableOpacity,View,StyleSheet,Image} from "react-native";
import { connect } from "react-redux";
import { Student } from "../actions/student";
import { teacher } from "../actions/teacher"

const participants=({navigation,Student,teacher})=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity  style={[styles.box,{ backgroundColor:'#008080',marginBottom:30}]}
            onPress={()=>{
              teacher();
              navigation.navigate("list")
            }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',width:'50%',marginRight:20}}>
                <Text style={styles.textinput}>Connect to your teachers</Text>
                </View>
                
                <Image source={require('../assets/teacher.png')} style={{width:70,height:70}}/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity  style={[styles.box,{ backgroundColor:'#007BA7',marginBottom:30}]}
            onPress={()=>{
                Student();
                navigation.navigate("list")
            }}
            >
<View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{alignItems:'center',width:'50%',marginRight:20}}>
                <Text style={styles.textinput}>Connect to your friends</Text>
                </View>
                <Image source={require('../assets/student.png')} style={{width:60,height:60}}/>
               
            
            </View>
            </TouchableOpacity>
            

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
      
        borderRadius:20,
        width:'80%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
    },
    textinput:{
    
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        
    },
    input:{
        fontSize:10,
        color:'#fff'
    }
})

export default connect(null,{Student,teacher})(participants);