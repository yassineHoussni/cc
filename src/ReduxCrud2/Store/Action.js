export const ajouterUser = (newUser) => {
    return {type:"ajouterUser",payload:newUser}
}
export const supUser = (userId) => {
    return {type:"supUser",payload:userId}
}
export const miseUser = (updateUser) => {
    return {type:"miseUser",payload:updateUser}
}
export const addPost = (newPost) => {
    return {type:"addPost",payload:newPost}
}
export const supPost = (postId) => {
    return {type:"supPost",payload:postId}
}
export const misePost = (updatePost) => {
    return {type:"misePost",payload:updatePost}
}