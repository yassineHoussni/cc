
    const initialState = [
    {
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        nom: 'Zaid',
        prenom: 'Riyad',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        nom: 'Jamaoui',
        prenom: 'Mouad',
        filiere: 'TDI',
    },

    {
        image: 'https://randomuser.me/api/portraits/men/45.jpg',
        nom: 'Jamaoui',
        prenom: 'Aymane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/45.jpg',
        nom: 'Saidi',
        prenom: 'Imane',
        filiere: 'TDI',
    },
    {
        image: 'https://randomuser.me/api/portraits/women/40.jpg',
        nom: 'Zerhouni',
        prenom: 'wiam',
        filiere: 'TDI',
    },
]
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ajoutestagiaire':
            return [...state, action.payload]
        default:
            return state
    }
}
export default Reducer