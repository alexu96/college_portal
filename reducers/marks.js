import { updation_marks } from "../actions/types";

const initialState={
 value:null
  
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case updation_marks:
            return{
                ...state,
                ...payload,
                value:payload
            }
        default:
            return{
                ...state
            }

    }
}