import { ADD, REDUCE } from "./actionType"

export const addFunction=(payload)=>{
    return{
        type:ADD,payload:payload
    }
}
export const reduceFunction=(payload)=>{
    return{
        type:REDUCE,payload:payload
    }
}