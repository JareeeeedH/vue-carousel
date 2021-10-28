let actions = {

    createImg(context, name){
      context.commit('CREATE_IMG', name);
    },

    deleteImg(context, deleteIndex){
      let newPhotoNameList = context.state.photoNameList.filter((item, index)=>{
        return index !== deleteIndex;
      })
      context.commit('RENEW_IMG', newPhotoNameList)
    },

    sortImg(context, { direction, index}){
      let newPhotoNameList = sortingMethod(direction, index, context.state.photoNameList);
      context.commit('RENEW_IMG', newPhotoNameList)
    },

}

// 排序function; 
// (1 or -1), (點擊的索引位置), (排序array)
function sortingMethod(direction, targetIndex, targetArray){

  // 往上移動
  if(direction === 1){

    return targetArray.map((item, index)=>{

      if(index === targetIndex){
        return targetArray[index-1]
      }
      if(index === targetIndex -1){
        return targetArray[index+1]
      }

      return item;

    })
  }
  
  // 往下移動
  if(direction === -1){
    return targetArray.map((item, index)=>{

      if(index === targetIndex){
        return targetArray[index+1]
      }
      if(index === targetIndex +1){
        return targetArray[index-1]
      }

      return item;

    })
  }
}

export default actions
