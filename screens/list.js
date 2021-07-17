import React,{useState,useEffect} from "react";
import { View, Text,StyleSheet,TextInput,FlatList, Image,Dimensions} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from "react-redux";

const list=({navigation})=>{

    const [active,setactive]=useState(null);
    const [List,setList]=useState(null);

    const value=useSelector(state=>state.list.list1);
    const value1=useSelector(state=>state.list.list2);


    useEffect(()=>{
    
        if(value!==null){
            setList(value)
        }
        else if(value1!==null){
            setList(value1)
        }
        else{
            setList(null)
        }


    },[value,value1])


     return(
 <View style={styles.container}>
<FlatList
    data={List}
    keyExtractor={(item)=> item._id}
    renderItem={({item})=>(

  <TouchableOpacity
  onPress={()=>{
      setactive(item.name);
      
      if(value!==null){
        navigation.navigate("listProfile",{
            user:item
        })
      }
      else if(value1!==null){
        navigation.navigate("teacherlist",{
            user:item
        })
      }
      else{
          setactive(null)
      }
  }}>
       <View style={[styles.footer1,{backgroundColor: active===item.name ? "#D3D3D3" : "#fff"}]}>
           <Image source={{uri:item.image}} style={{width:40,height:40,borderRadius:20,marginLeft:20}}/>
           <View style={{flexDirection:'column',marginLeft:'20%'}}>
    <Text style={{color:'#007BA7',fontWeight:'bold',fontSize:16}}>{item.name}</Text>
    <Text style={{color:'grey'}}>{item.dept} department</Text>
    </View>
    <View style={{alignItems:'center',flex:1,marginRight:10}}>
    <Text style={{color:'grey',fontWeight:'bold',fontSize:16}}>{item.year} year</Text></View>
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
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems:'center',
        
    },
    textinput:{
        borderRadius:10,     
        height:50,
        borderWidth:1,
        backgroundColor:'white',
        borderColor:'grey',
        marginBottom:15,
        justifyContent:'center',
        
    },
    footer1:{

        width:Dimensions.get('window').width,
        height:80,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center',
     
         },

})



export default list;