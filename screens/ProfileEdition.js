import React, {useState,useEffect} from "react";
import {View,Text,TouchableOpacity,SafeAreaView,ScrollView,StyleSheet,Image,TextInput,Button,FlatList} from "react-native";
import {useSelector,connect} from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Sprofile} from "../actions/profile";

const Edition=({navigation,Sprofile})=>{
    const item=useSelector(state=>state.Login.studentLogin);
    

const [value,setvalue]=useState({
    id:item.users._id,
    about:item.users.about,
    skills:item.users.skills,
    education:item.users.education,
    experience:item.users.experience,
    projects:item.users.projects,
    tempExp:'',
    tempEdu:'',
    tempPro:''
    
})


const onsubmit=()=>{
    const {id,about,skills,education,experience,projects}=value;
    Sprofile({id,about,skills,education,experience,projects});
    navigation.navigate("Profile")
}


    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>

    <View style={styles.first}>
           <Image source={{uri:item.users.image}} style={{width:110,height:110,borderRadius:70,borderWidth:1,marginRight:'10%'}}/>
           <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <Text style={styles.text}>{item.users.name}</Text>
    <Text style={[styles.text,{fontSize:15,fontWeight:'normal'}]}>{item.users.dept} department</Text>
    <Text style={[styles.text,{fontSize:15,fontWeight:'normal'}]}>{item.users.year} Year department</Text>
      </View>

           </View>            

    <Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:20,marginBottom:20}}>Education</Text>

          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',width:300,height:40,marginBottom:20}}>
         <View  style={{borderRadius:10,width:230,height:40,borderWidth:1,borderColor:'#008080',marginLeft:10,marginRight:'8%'}}
>
         <TextInput
 placeholder="Institution name" 
 style={{marginLeft:10}}
 clearButtonMode="always"
onChangeText={(event)=>{
   setvalue({
       ...value,
       tempEdu:event
   })
}}

 />
         </View>
         <Button
        title="ADD"
        color="#008080"
        onPress={() => { value.education.push(value.tempEdu)
        console.log(value)}}
      />



          </View>


          {
          value.education[0] !==""  ?  (
            value.education.map((item,index)=>(
                <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10,marginBottom:10}}>
                <Text style={{marginLeft:'10%',flex:1}}>{item}</Text>
                <TouchableOpacity onPress={()=>{ 
                    value.education.pop(item)
                    console.log(value.projects)}}>
                <Icon name="delete" size={20} color="grey" style={{alignSelf:'center',marginRight:'12%'}}/>
                </TouchableOpacity>
               
                </View>
            ))
          ):(
              <Text>helgjugk</Text>
)
      }



<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:40,marginBottom:20}}>Experience</Text>

          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',width:300,height:40,marginBottom:20}}>
         <View  style={{borderRadius:10,width:230,height:40,borderWidth:1,borderColor:'#008080',marginLeft:10,marginRight:'8%'}}
>
         <TextInput
 placeholder=" experience" 
 style={{marginLeft:10}}
 clearButtonMode="always"
 onChangeText={(event)=>{
    setvalue({
        ...value,
        tempExp:event
    })
 }}
 />
         </View>
         <Button
        title="ADD"
        color="#008080"
        onPress={() => {value.experience.push(value.tempExp)}}
      />



          </View>


          {
          value.experience[0] !==""  ?  (
            value.experience.map((item,index)=>(
                <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10,marginBottom:10}}>
                <Text style={{marginLeft:'10%',flex:1}}>{item}</Text>
                <TouchableOpacity onPress={()=>{ value.experience.pop(item)
                    console.log(value.projects)}}>
                <Icon name="delete" size={20} color="grey" style={{alignSelf:'center',marginRight:'12%'}}/>
                </TouchableOpacity>
               
                </View>
            ))
          ):(
              <Text>helgjugk</Text>
)
      }


<Text style={{alignSelf:'flex-start',marginLeft:20,fontSize:18,fontWeight:'bold',marginTop:20,marginBottom:20}}>Projects</Text>

          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row',width:300,height:40,marginBottom:20}}>
         <View  style={{borderRadius:10,width:230,height:40,borderWidth:1,borderColor:'#008080',marginLeft:10,marginRight:'8%'}}
>
         <TextInput
 placeholder=" projects" 
 style={{marginLeft:10}}
 clearButtonMode="always"
 onChangeText={(event)=>{
    setvalue({
        ...value,
        tempPro:event
    })
 }}

 />
         </View>
         <Button
        title="ADD"
        color="#008080"
        onPress={() => {value.projects.push(value.tempPro)}}
      />



          </View>


          {
          value.projects[0] !==""  ?  (
            value.projects.map((item,index)=>(
                <View key={index} style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10,marginBottom:10}}>
                <Text style={{marginLeft:'10%',flex:1}}>{item}</Text>
                <TouchableOpacity onPress={()=>{
                    value.projects.pop(item)
                    console.log(value.projects)
                }}>
                <Icon name="delete" size={20} color="grey" style={{alignSelf:'center',marginRight:'12%'}}/>
                </TouchableOpacity>
               
                </View>
            ))
          ):(
              <Text>No projects found</Text>
)
      }







        </View>



        <View style={{marginTop:30,alignItems:'center',justifyContent:'center',marginBottom:30}}>
                <TouchableOpacity
                        onPress={onsubmit}
                        style={{
                            backgroundColor:"#008080",
                            height:45,
                            width:'80%',
                            borderRadius:10,
                           alignItems:"center",
                           justifyContent:"center",

                        }}
                    >
                        <Text style={{
                            color: 'white',
                            alignSelf:'center',
                            fontSize:15
                        }}>Update Profile</Text>
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
        justifyContent:'center'
    },
    first:{
        flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       marginTop:30
    },
    text:{
        fontSize:18,
        fontWeight:'bold',

    }
})

export default connect(null,{Sprofile})(Edition);