import {teacher_login,student_login} from "./types";
import axios from "axios";
import { Alert } from "react-native";

export const teacher_Login=({email, password})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({email, password});

    try{
        const res=await axios.post("https://j9nwg.sse.codesandbox.io/api/teachers",body,config);
        dispatch({
            type:teacher_login,
            payload:res.data,
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}

export const student_Login=({email, password})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({email, password});

    try{
        const res=await axios.post("https://j9nwg.sse.codesandbox.io/api/users",body,config);
        console.log("hello")
        dispatch({
            type:student_login,
            payload:res.data,
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}