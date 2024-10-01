import * as actions from './actions';
const initData={
    users:['admin','manager','end-user'],
    loginDet:'None'
}
const loginReducer=(state=initData,action)=>{
    if(action.type===actions.LOGIN){
        return{
            ...state,
            loginDet:action.loginDet
        }
    }

    return state;
}

export default loginReducer;