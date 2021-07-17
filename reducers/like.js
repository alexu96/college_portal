import { like_count } from "../actions/types";

const initialState={
  like_list:null
  
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case like_count:
            return{
                ...state,
                ...payload,
                like_list:payload
            }
        default:
            return{
                ...state
            }

    }
}