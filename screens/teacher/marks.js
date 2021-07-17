import React ,{useState} from "react";
import {Text,View,StyleSheet,TextInput,Pressable} from "react-native";
import { useSelector,connect } from "react-redux";
import {Marks} from "../../actions/marks";

const marks=({route,Marks,navigation})=>{

    const { selected }=route.params;
    console.log(selected)

const [data,setdata]=useState({
    id:selected._id,
    assign:0,
    quiz:0,
    cie:0
})
    return(
        <View style={styles.container}>
<Text style={styles.text}>{selected.name}</Text>
<Text style={styles.text}>{selected.year} year</Text>
<Text style={styles.text}>{selected.dept} department</Text>
<View style={styles.input}>
<TextInput
placeholder='Enter Assignment marks'
style={{marginLeft:10}}
onChangeText={(event)=>{
    setdata({
        ...data,
        assign:event
    })
}}
/></View>
<View style={styles.input}>
<TextInput
placeholder='Enter Quiz marks'
style={{marginLeft:10}}
onChangeText={(event)=>{
    setdata({
        ...data,
        quiz:event
    })
}}
/></View>
<View style={styles.input}>
<TextInput
placeholder='Enter CIE marks'
style={{marginLeft:10}}
onChangeText={(event)=>{
    setdata({
        ...data,
        cie:event
    })
}}
/></View>
<View style={{marginTop:30,alignContent:'center',justifyContent:'center',width:'70%',height:40}}>
                    <Pressable

                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#808080' : '#008080',
                                height:50,
                                justifyContent:'center',
                                borderRadius:20,
                                
    
                            },
                            styles.pressable,
                        ]}
                        onPress={()=>{
                            const {id,assign,quiz,cie}=data;
                            Marks({id,assign,quiz,cie});
                           console.log(data);
                           navigation.navigate("editing")
                            
                        }}



                    >
                        <Text style={{ color: 'white',alignSelf:'center' }}>Submit</Text>
                    </Pressable>

                </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
    input:{
        width:'90%',
        height:40,
        borderRadius:10,
        borderWidth:1,
        justifyContent:'center',
        marginTop:15
    },
    text:{
        color:'#007BA7',
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10,


    }
})

export default connect(null,{Marks})(marks);