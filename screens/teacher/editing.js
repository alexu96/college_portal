import React, {useEffect,useState} from "react";
import { View, Text,StyleSheet,FlatList,Dimensions,TouchableOpacity,TextInput,Button } from "react-native";
import { useSelector } from "react-redux";
import { student_filter } from "../../actions/student";
import {connect} from "react-redux";

const editing=({student_filter,navigation})=>{

const dept=useSelector(state=>state.Login.teacherLogin.users.dept);
const list=useSelector(state=>state.list.deptList)

const [value,setvalue]=useState(null)
const [active,setactive]=useState({
    name:null,
    list:null
});
 useEffect(()=>{
     if(active.list!==null){
         navigation.navigate('marks',{
             selected:active.list
         })
     }
 },[active.list])

useEffect(()=>{
    if(dept!==null){
        student_filter({dept})
    }
    if(list!==null){
        setvalue(list.users)
    }
},[dept,list])

    return(
        <View style={styles.container}>
        <FlatList
    data={value}
    keyExtractor={(item)=> item._id}
    renderItem={({item})=>(

  <TouchableOpacity
  onPress={()=>{setactive({
      ...active,
      name:item.name,
      list:item
  })
  }}>
       <View style={[styles.footer1,{backgroundColor: active.name===item.name ? "#D3D3D3" : "#fff"}]}>
         
           <View style={styles.text}>
    <Text style={styles.textinput1}>{item.name}</Text>
    <Text style={{color:'grey'}}>{item.dept} dept</Text>
    </View>
    <View style={styles.text}>
    <Text style={styles.textinput1}>{item.year} Year</Text>
</View>
<View style={styles.text}>
    <Text style={styles.textinput1}>{item.marks.assign}</Text>
    <Text style={{color:'grey'}}>Assignment</Text>
    </View>
    <View style={styles.text}>
    <Text style={styles.textinput1}>{item.marks.quiz}</Text>
    <Text style={{color:'grey'}}>Quiz</Text>
    </View>
    <View style={styles.text}>
    <Text style={styles.textinput1}>{item.marks.cie}</Text>
    <Text style={{color:'grey'}}>CIE</Text>
    </View>


      </View>
  </TouchableOpacity>
    )}
/>


</View>
    
      
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textinput:{
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
    },
    footer1:{

        width:Dimensions.get('window').width,
        height:80,
        borderRadius:20,
        marginTop:20,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
     
         },
    textinput1:{
        color:'#007BA7',
        fontWeight:'bold',
        fontSize:16,
        alignSelf:'center'
    },
    text:{
        flexDirection:'column',
        marginRight:'5%'
    }

   
})

export default connect(null,{student_filter})(editing);