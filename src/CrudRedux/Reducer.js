const initialState = {
    users:[ 
        { id: 1, name: "Mohamed yassine", email: "houssni@gmail.com" }, 
        { id: 2, name: "mehdi", email: "bennani@gmail.com" }
    ] 
};
const Reducer = (state=initialState, Action) => {
    switch(Action.type) {
        case "Add_user":
            return {...state, users:[...state.users, Action.payload]}
        case "Update_user":
            const user = state.users.find((u)=>u.id===parseInt(Action.payload.id))
            if (user) {
                user.name = Action.payload.name
                user.email = Action.payload.email
            }
            return state
        case "Delete_user":
            return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(Action.payload))]}
        default:
            return state
    }
}
export default Reducer