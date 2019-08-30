const state={
    headShow:true,
    loadingShow:false    
};
const mutations={
    showLoading(state){
        state.loadingShow=true;
    },
    hideLoading(state){
        state.loadingShow=false;
    }
};
const getters={
    loadingShow(state){
		return state.loadingShow;
    }
};

export default{
	state,
	mutations,
	getters
}