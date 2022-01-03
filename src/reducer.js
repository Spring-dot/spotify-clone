export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
};

const reducer = (state, action) => {
//for adding a debugging tool
console.log(action);

// Action -> type, [playload]

 switch(action.type) {
     case 'SET_USER':
         return {
             ...state,
             user: action.user
         }
    case 'SET PLAYLIST':

 }
} 

export default reducer;

