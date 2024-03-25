const initState = {
  users: [],
  posts: [],
};
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "ajouterUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "supUser":
      return {
        ...state,
        users: state.users.filter((item) => item.id != action.payload),
      };
    case "miseUser":
      const { id, nom, email } = action.payload;
      return {
        ...state,
        users: state.users.map((item) =>
          item.id == id ? { ...item, nom, email } : item
        ),
      };
    case "addPost":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "supPost":
      return {
        ...state,
        posts: state.posts.filter((item) => item.idPost != action.payload),
      };
    case "misePost":
      const { idPost, title, body } = action.payload;
      return {
        ...state,
        posts: state.posts.map((item) =>
          item.idPost == idPost ? { ...item, title, body } : item
        ),
      };
    default:
      return state;
  }
};
