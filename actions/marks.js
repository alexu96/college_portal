import {updation_marks} from "./types";
import axios from "axios";
import { Alert } from "react-native";

export const Marks=({id,assign,quiz,cie})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({id,assign,quiz,cie});

    try{
        const res=await axios.put("https://j9nwg.sse.codesandbox.io/api/marks",body,config);
        dispatch({
            type:updation_marks,
            payload:res.data,
        })
    }catch (err) {
  console.log(err)
  }
}