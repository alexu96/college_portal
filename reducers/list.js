import { student_list,teacher_list ,Student_filter} from "../actions/types";

const initialState={
   list1:null,
   deptList:null,
   list2:null
  
}


export default function(state=initialState,action){
 
    const {type,payload}=action;

    switch(type){
        case student_list:
            return{
                ...state,
                ...payload,
                list1:payload
            }
        case Student_filter:
            return{
                ...state,
                ...payload,
                deptList:payload
            }

        case teacher_list:
                return{
                    ...state,
                    ...payload,
                    list2:payload
                }
        default:
            return{
                ...state
            }

    }
}