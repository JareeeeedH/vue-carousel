let mutations = {

    CREATE_IMG(state, imgName){
      state.photoNameList.push(imgName);
    },

    RENEW_IMG(state, payload){
      state.photoNameList = payload
    },

}

export default mutations