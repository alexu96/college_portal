import React, {useState} from "react";
import {Text,TouchableOpacity,View,StyleSheet,Image} from "react-native";
import ProgressCircle from 'react-native-progress-circle';
import { useSelector } from "react-redux";

const home=()=>{

const item=useSelector(state=>state.Login.studentLogin)


const [value,setvalue]=useState({
    assign:((item.users.marks.assign)/5)*100,
    quiz:((item.users.marks.quiz)/5)*100,
    cie:((item.users.marks.cie)/25)*100,    
})


console.log(value)

    return(
   <View style={styles.container}>
        <TouchableOpacity  style={[styles.box,{ backgroundColor:'#dc143c'}]}
            onPress={()=>{
              
            }}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{alignItems:'center',width:'50%',marginRight:20}}>
                <Text style={styles.textinput}>Assignments</Text>


                </View>
                <View>
                <ProgressCircle
            percent={value.assign}
            radius={40}
            borderWidth={5}
            color="#fff"
            shadowColor="#999"
            bgColor="#dc143c"
        >
            <Text style={{ fontSize: 15 ,color:'#fff'}}>{item.users.marks.assign}</Text>
        </ProgressCircle>
        </View>
                
               
            </View>
            </TouchableOpacity>
        <TouchableOpacity  style={[styles.box,{ backgroundColor:'#5f9ea0'}]}
            onPress={()=>{
              
            }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',width:'50%',marginRight:20}}>
                <Text style={styles.textinput}>Quiz</Text>
                </View>
                
                <View>
                <ProgressCircle
            percent={value.quiz}
            radius={40}
            borderWidth={5}
            color="#fff"
            shadowColor="#999"
            bgColor="#5f9ea0"
        >
            <Text style={{ fontSize: 15 ,color:'#fff'}}>{item.users.marks.quiz}</Text>
        </ProgressCircle>
        </View>
            </View>
            </TouchableOpacity>
        <TouchableOpacity  style={[styles.box,{ backgroundColor:'#808080'}]}
            onPress={()=>{
              
            }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',width:'50%',marginRight:20}}>
                <Text style={styles.textinput}>Internals</Text>
                </View>
                
                <View>
                <ProgressCircle
            percent={value.cie}
            radius={40}
            borderWidth={5}
            color="#fff"
            shadowColor="#999"
            bgColor="#808080"
        >
            <Text style={{ fontSize: 15 ,color:'#fff'}}>{item.users.marks.cie}</Text>
        </ProgressCircle>
        </View>
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
        height:'27%',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
        marginBottom:10

    },
    textinput:{
    
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        
    },

})

export default home;