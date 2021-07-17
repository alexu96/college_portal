import {student_list,Student_filter} from "./types";
import axios from "axios";

export const Student=()=>async dispatch=>{
    try{
        const res=await axios.get("https://j9nwg.sse.codesandbox.io/api/users");
        dispatch({
            type:student_list,
            payload:res.data,
        })
    }catch (err) {
    }
  }

  
export const student_filter=({dept})=>async dispatch=>{
    const config={
        headers:{
            "content-Type":"application/json"
        }
    }

    const body=JSON.stringify({dept});

    try{
        const res=await axios.post("https://j9nwg.sse.codesandbox.io/api/users/dept",body,config);
        dispatch({
            type:Student_filter,
            payload:res.data,
        })
    }catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => Alert.alert(error.msg));
    }
  }
}




