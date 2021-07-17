import React, { useState } from "react";
import {Text,View,StyleSheet,Pressable} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Icons1 from 'react-native-vector-icons/MaterialCommunityIcons';

const main=()=>{


    const [state,setstate]=useState({
        dept:'Department',
        year:'Year',
        profession:'Profession'
    })

    return(
        <View style={styles.container}>
            <View style={{width:'80%'}}>
            <DropDownPicker
    items={[
        {label: 'Select Department', value: 'Department'},
        {label: 'Computer Science', value: 'Computer Science Dept', icon: () => <Icon name="laptop" size={18} color="grey" />},
        {label: 'Information Science', value: 'Information Science Dept', icon: () => <Icons1 name="monitor" size={18} color="grey" />},
        {label: 'Mechanical', value: 'Mechanical Dept', icon: () => <Icon name="car" size={18} color="grey" />},
    ]}
    defaultValue={state.dept}
    containerStyle={{height:60,marginBottom:10,marginTop:10}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: 'white'}}
    onChangeItem={()=>{}}
/>
<DropDownPicker
    items={[
        {label: 'current Year', value: 'Year'},
        {label: '1st year', value: '1st year', icon: () => <Icons1 name="account" size={18} color="grey" />},
        {label: '2nd year', value: '2nd year', icon: () => <Icons1 name="account" size={18} color="grey" />},
        {label: '3rd year', value: '3rd year', icon: () => <Icons1 name="account" size={18} color="grey" />},
        {label: '4th year', value: '4th year', icon: () => <Icons1 name="account" size={18} color="grey" />},
    ]}
    defaultValue={state.year}
    containerStyle={{height:60,marginBottom:10,marginTop:10}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: 'white'}}
    onChangeItem={()=>{}}
/>
<DropDownPicker
    items={[
        {label: 'Select profession', value: 'Profession'},
        {label: 'Professor', value: 'Professor', icon: () => <Icons name="supervisor-account" size={18} color="grey" />},
        {label: 'Student', value: 'Student', icon: () => <Icons name='supervisor-account' size={18} color="grey" />},
    ]}
    defaultValue={state.profession}
    containerStyle={{height:60,marginBottom:10,marginTop:10}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: 'white'}}
    onChangeItem={()=>{}}
/>
</View>


<View style={{marginTop:30,alignContent:'center',justifyContent:'center',width:'85%'}}>
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
                        onPress={() => navigation.navigate("main")}



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
        justifyContent:'center'
    }
})

export default main;