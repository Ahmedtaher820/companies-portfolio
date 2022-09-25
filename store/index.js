export default {
  state:()=>({
    allPosts:[],
    selectedPost:{}
  }),
  getters:{

  },
  mutations:{
    setAllPost(state ,payload){
      state.allPosts = payload
    },
    selectedPost(state,payload){
      state.selectedPost = payload
    }
  },
  actions:{

  }
}
