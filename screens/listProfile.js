import React, {useState} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Button, SafeAreaView,ScrollView} from "react-native";
import {useSelector,connect} from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from 'react-native-vector-icons/MaterialIcons';
import {like_List} from "../actions/like";



const listProfile=({route,like_List})=>{

    const _id=useSelector(state=>state.Login.studentLogin.users._id);
   



const users=route.params.user;    




const [active,setactive]=useState({
    like:false,
    unlike:false
})


    return(
       <SafeAreaView >
           <ScrollView >
               <View style={styles.container}>
           <View style={styles.first}>
           <Image source={{uri:users.image}} style={{width:110,height:110,borderRadius:70,borderWidth:1,marginRight:'10%'}}/>
           <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Text style={styles.text}>{users.name}</Text>
    <Text style={[styles.text,{fontSize:15,fontWeight:'normal',color:'grey'}]}>{users.dept} department</Text>
    <Text style={[styles.text,{fontSize:15,fontWeight:'normal',color:'grey'}]}>{users.year} Year</Text>
      </View>



           </View>
           <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
    <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}
        onPress={()=>{setactive({
            ...active,
            like:true,
            unlike:false
        })
        const name="users";
        const id=users._id;
        like_List({name,_id,id})
    }
      
    }
    >
               <Icon name="like1" size={23} style={{marginRight:'10%',color: active.like ? '#1e90ff' : 'grey'}} />
             
    </TouchableOpacity>

               <TouchableOpacity  style={{alignItems:'center',justifyContent:'center'}}
               
               onPress={()=>{setactive({
                ...active,
                like:false,
                unlike:true
            })}
            
        }
               >
               <Icon name="dislike1" size={23} style={{marginRight:'10%',color: active.unlike ? '#1e90ff' : 'grey'}} />
               </TouchableOpacity>
      </View>
      <Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20,color:'#4682b4'}}>About</Text>
     {
         users.about!=="" ? (
         <Text style={{marginLeft:15,marginRight:15,fontSize:16}}>{users.about}</Text>
         ):(
             <Text>No about section found</Text>
         )
     }

<View style={styles.action}/>
<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20,color:'#4682b4'}}>Skills</Text>
     {
         users.skills[0]!=="" ? (
        
            users.skills.map((item,index)=>(
                <Text key={index} style={{marginLeft:"20%",marginRight:15,fontSize:16,alignSelf:'flex-start',marginBottom:15}}>* {item}</Text>
            ))

         ):(
             <Text>No skills section found</Text>
         )
     }
     <View style={styles.action}/>

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20,color:'#4682b4'}}>Education</Text>
     {
         users.education[0]!=="" ? (
        
            users.education.map((item,index)=>(
                <Text key={index} style={{marginLeft:'20%',marginRight:15,fontSize:16,alignSelf:'flex-start',marginBottom:15}}>* {item}</Text>
            ))

         ):(
             <Text>No education section found</Text>
         )
     }
     <View style={styles.action}/>

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20,color:'#4682b4'}}>Experience</Text>
     {
         users.experience[0]!=="" ? (
        
            users.experience.map((item,index)=>(
                <Text key={index} style={{marginLeft:'20%',marginRight:15,fontSize:16,alignSelf:'flex-start',marginBottom:15}}>* {item}</Text>
            ))

         ):(
             <Text>No experience section found</Text>
         )
     }
     <View style={styles.action}/>

<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20,color:'#4682b4'}}>Projects</Text>
     {
         users.projects[0]!=="" ? (
        
            users.projects.map((item,index)=>(
                <Text key={index} style={{marginLeft:'20%',marginRight:15,fontSize:16,alignSelf:'flex-start',marginBottom:15}}>* {item}</Text>
            ))

         ):(
             <Text>No Projects section found</Text>
         )
     }





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
        backgroundColor:'#fff'
    },
    first:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       marginBottom:20,
       marginTop:40
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#4682b4'

    },
  
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        width:'90%',
        marginTop:30,
    },
})



export default connect(null,{like_List})(listProfile);