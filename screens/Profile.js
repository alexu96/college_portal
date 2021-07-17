import React, {useState} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Button, SafeAreaView,ScrollView} from "react-native";
import {useSelector} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from 'react-native-vector-icons/MaterialIcons';



const Profile=({navigation})=>{

const item=useSelector(state=>state.Login.studentLogin)
console.log(item)


const [active,setactive]=useState({
    like:false,
    unlike:false
})


    return(
       <SafeAreaView >
           <ScrollView >
               <View style={styles.container}>
           <View style={styles.first}>
           <Image source={{uri:item.users.image}} style={{width:110,height:110,borderRadius:70,borderWidth:1,marginRight:'10%'}}/>
           <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Text style={styles.text}>{item.users.name}</Text>
    <Text style={[styles.text,{fontSize:15,fontWeight:'normal',color:'grey'}]}>{item.users.dept} department</Text>
    <Text style={[styles.text,{fontSize:15,fontWeight:'normal',color:'grey'}]}>{item.users.year} Year department</Text>
      </View>



           </View>
           <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
    <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}
        onPress={()=>{setactive({
            ...active,
            like:true,
            unlike:false
        })}}
    >
               <Icon name="like1" size={23} style={{marginRight:'10%',color: active.like ? '#1e90ff' : 'grey'}} />
    </TouchableOpacity>

               <TouchableOpacity  style={{alignItems:'center',justifyContent:'center'}}
               
               onPress={()=>{setactive({
                ...active,
                like:false,
                unlike:true
            })}}
               >
               <Icon name="dislike1" size={23} style={{marginRight:'10%',color: active.unlike ? '#1e90ff' : 'grey'}} />
               </TouchableOpacity>
      </View>
      <Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20, color:'#5f9ea0'}}>About</Text>
     {
         item.users.about!=="" ? (
         <Text style={{marginLeft:15,marginRight:15,fontSize:16}}>{item.users.about}</Text>
         ):(
             <Text>No about section found</Text>
         )
     }

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20, color:'#5f9ea0'}}>Skills</Text>
     {
         item.users.skills[0]!=="" ? (
        
            item.users.skills.map((item,index)=>(
                <Text key={index} style={{marginLeft:15,marginRight:15,fontSize:16,alignSelf:'flex-start',marginLeft:'30%'}}>{item}</Text>
            ))

         ):(
             <Text>No skills section found</Text>
         )
     }

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20, color:'#5f9ea0'}}>Education</Text>
     {
         item.users.education[0]!=="" ? (
        
            item.users.education.map((item,index)=>(
                <Text key={index} style={{marginLeft:15,marginRight:15,fontSize:16,alignSelf:'flex-start',marginLeft:'30%'}}>{item}</Text>
            ))

         ):(
             <Text>No education section found</Text>
         )
     }

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20,color:'#5f9ea0'}}>Experience</Text>
     {
         item.users.experience[0]!=="" ? (
        
            item.users.experience.map((item,index)=>(
                <Text key={index} style={{marginLeft:15,marginRight:15,fontSize:16,alignSelf:'flex-start',marginLeft:'30%'}}>{item}</Text>
            ))

         ):(
             <Text>No experience section found</Text>
         )
     }

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20, color:'#5f9ea0'}}>Projects</Text>
     {
         item.users.projects[0]!=="" ? (
        
            item.users.projects.map((item,index)=>(
                <Text key={index} style={{marginLeft:15,marginRight:15,fontSize:16,alignSelf:'flex-start',marginLeft:'30%'}}>{item}</Text>
            ))

         ):(
             <Text>No Projects section found</Text>
         )
     }




<TouchableOpacity  style={{borderWidth:1,borderRadius:10,width:'80%',height:50,alignItems:'center',justifyContent:'center',borderColor:'#008080',marginTop:40,marginBottom:20}}
            onPress={()=>{
              navigation.navigate("Edition")
              
            }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icons name="mode-edit" size={18} color="#008080" />
            <Text style={{marginLeft:10,color:'#008080'}}>Edit your Profile</Text>

            </View>
            </TouchableOpacity>
      
      </View>
  </ScrollView>
       </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40
    },
    first:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       marginBottom:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#5f9ea0'

    }
})



export default Profile;