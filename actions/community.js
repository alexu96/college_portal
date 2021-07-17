import {community_get} from "./types";
import axios from "axios";
import { Alert } from "react-native";

export const Community=({})=>async dispatch=>{

    try{
        const res=await axios.get("https://j9nwg.sse.codesandbox.io/api/community");
        dispatch({
            type:community_get,
            payload:res.data,
        })
    }catch (err) {
  console.log(err)
  }
}