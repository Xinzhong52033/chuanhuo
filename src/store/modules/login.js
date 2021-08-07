export default{
    namespaced: true,
    state:{
        loginName:'Login',
    },
    mutations: {
        changeloginName(state,value){
            state.loginName = value;
        },
    },
    actions: {
        
    }
}