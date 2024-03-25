import { createSlice } from "@reduxjs/toolkit";
export const PostSlice = createSlice({
    name:"users",
    initialState:{
        posts:[]
    },
    reducers:{                                                              
        addPost:(state,action)=>{
            state.posts.push(action.payload)
        },
        SupprimerPost:(state,action)=>{
           state.posts =  state.posts.filter((item) => item.idPost != action.payload)
        },
        updatePost:(state,action)=>{
            const { idPost, title, body } = action.payload;
          state.posts =  state.posts.map(item => item.idPost == idPost ? {...item,title,body}: item)
        }
    }
})
export const  {addPost,SupprimerPost,updatePost} = PostSlice.actions
export default PostSlice.reducer