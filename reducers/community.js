import { community_get } from "../actions/types";

const initialState={
 value:false,
 messages:null
  
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case community_get:
            return{
                ...state,
                ...payload,
                value:true,
                messages:payload
            }
        default:
            return{
                ...state
            }

    }
}