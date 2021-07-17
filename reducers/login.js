import { student_login,teacher_login } from "../actions/types";

const initialState={
  studentLogin:null,
  teacherLogin:null,
  value:false,
  Svalue:false
  
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case teacher_login:
            return{
                ...state,
                ...payload,
                teacherLogin:payload,
                value:true
            }

        case student_login:
                return{
                    ...state,
                    ...payload,
                    studentLogin:payload,
                    Svalue:true

                }
        default:
            return{
                ...state
            }

    }
}