import {teacher_list} from "./types";
import axios from "axios";

export const teacher=()=>async dispatch=>{
    try{
        const res=await axios.get("https://j9nwg.sse.codesandbox.io/api/teachers");
        dispatch({
            type:teacher_list,
            payload:res.data,
        })
    }catch (err) {
    }
  }