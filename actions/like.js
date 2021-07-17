import {like_count} from "./types";
import axios from "axios";
import { Alert } from "react-native";

export const like_List=({name,_id,id})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({name,_id,id});

    try{
        const res=await axios.put("https://j9nwg.sse.codesandbox.io/api/like",body,config);
        console.log("hello")
        dispatch({
            type:like_count,
            payload:res.data,
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}