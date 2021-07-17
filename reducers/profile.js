import { student_profile,update_details } from "../actions/types";

const initialState={
    access:false,
    list:null
  
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case student_profile:
            return{
                ...state,
                access:true
            }
        case update_details:
                return{
                    ...state,
                    ...payload,
                    list:payload
                    
                }
        default:
            return{
                ...state
            }

    }
}