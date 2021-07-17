import {student_profile,update_details} from "./types";
import axios from "axios";
import { Alert } from "react-native";

export const Sprofile=({id,about,skills,education,experience,Projects})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({id,about,skills,education,experience,Projects});
    console.log('actions called')

    try{
        const res=await axios.put("https://j9nwg.sse.codesandbox.io/api/profile",body,config);
        console.log(res.data)
        dispatch({
            type:student_profile,
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}



export const update=({id})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({id});

    try{
        const res=await axios.get("https://j9nwg.sse.codesandbox.io/api/profile",body,config);
        console.log(res.data)
        dispatch({
            type:update_details,
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}
