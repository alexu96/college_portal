import React ,{useState,useEffect} from "react";
import {Text,View,Easing,Animated,Image,StyleSheet,TextInput,TouchableOpacity,Pressable,Alert} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { teacher_Login,student_Login } from "../actions/login";
import DropDownPicker from 'react-native-dropdown-picker';
import { connect,useSelector } from "react-redux";



const Login=({navigation,teacher_Login,student_Login})=>{

    const access=useSelector(state=>state.Login.value);
    const access1=useSelector(state=>state.Login.Svalue);
    const [state,setstate]=useState({
        profession:'Student'
    })

useEffect(()=>{
    if(access){
          navigation.navigate('tabScreen')
        }
    if(access1){
       navigation.navigate('Example')
    }
    },[access,access1])


    const [formdata,  setdata]=useState({
        email:'',
        password:'',
        secureTextEntry: true,
        check_emailInputChange: false,
        value:null
    })
  
  
     const updateSecureTextEntry = () => {
          setdata({
              ...formdata,
              secureTextEntry: !formdata.secureTextEntry
          })
      }
  

const onsubmit=()=>{
    if(formdata.value==="Professor"){
        const { email, password }=formdata
        teacher_Login({email,password})

    }
    else{
        const { email, password }=formdata
        student_Login({email,password})
    }

}


    return(
<View style={styles.container}>
   <Animatable.View animation='bounceIn' iterationCount={5} duration={3000}>
       <Image source={{ uri:'https://www.pinclipart.com/picdir/big/539-5396152_group-of-people-icon-png-clipart.png'}} style={{width:130,height:130}}/>
   </Animatable.View>
   <Text style={{fontWeight:'bold',fontSize:25,color:'#696969',marginTop:30}}>Log In</Text>

   <Animatable.View style={styles.footer}
                animation='fadeInUpBig'
            >
               
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={23}
                    />
                    <TextInput
                        placeholder="Your email"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(event)=>setdata({
                            ...formdata,
                            email:event,
                            check_emailInputChange: true})}
                    />
                     {formdata.check_emailInputChange ?
                        <Animatable.View
                            animation='bounceIn'>
                            <Feather
                                name="check-circle"
                                color='green'
                                size={18}
                            />
                        </Animatable.View>
                        :null}

                </View>

               

                <View style={styles.action}>

                    <FontAwesome
                        name='lock'
                        color='#05375a'
                        size={23}
                    />
                    <TextInput
                        placeholder="Your password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={formdata.secureTextEntry ? true : false}
                        onChangeText={(event)=>setdata({
                            ...formdata,
                            password:event,
                           })}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}

                    >
                        {formdata.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color='grey'
                                size={18}
                            />:
                            <Feather
                                name="eye"
                                color='grey'
                                size={18}
                            />}
                    </TouchableOpacity>

                   

                </View>
                <DropDownPicker
    items={[
        {label: 'Student', value: 'Student', icon: () => <Icons name='supervisor-account' size={18} color="grey" />},
        {label: 'Professor', value: 'Professor', icon: () => <Icons name="supervisor-account" size={18} color="grey" />},
        
    ]}
    defaultValue={state.profession}
    containerStyle={{height:50,marginTop:10}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: 'white'}}
    onChangeItem={(item)=>{setdata({
        ...formdata,
        value:item.value
    })
    console.log(item)}}
/>

                <View style={{marginTop:30,alignContent:'center',justifyContent:'center'}}>
                <TouchableOpacity
                        onPress={onsubmit}
                        style={{
                            borderColor: '#008080',
                            backgroundColor:"#008080",
                            borderWidth: 1,
                            height:45,
                            borderRadius:10,
                           alignContent:"center",
                           justifyContent:"center",

                        }}
                    >
                        <Text style={{
                            color: 'white',
                            alignSelf:'center',
                            fontSize:15
                        }}>Log In</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
</View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffff'
    },
    action: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        width:'80%',
        marginTop:30,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

})

export default connect(null,{teacher_Login,student_Login})(Login);