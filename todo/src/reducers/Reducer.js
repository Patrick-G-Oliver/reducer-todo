export const initialState = [
    {
        item: "mow lawn",
        completed: false,
        id: 1066
    },
    {
        item: "bake bread",
        completed: false,
        id: 1920
    },
    {
        item: "weed garden",
        completed: false,
        id: 1492
    }
];

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { item: action.payload, 
                completed: false, 
                id: Date.now() }
                ];
        case "TOGGLE_DONE":
            return state.map(todo => {
                    if(action.payload === todo.id) {
                        return { item: todo.item, 
                                completed: !todo.completed, 
                                id: todo.id };
                    } else {
                        return todo;
                    }
                });
        case "DELETE_DONE":
            return state.filter(item => {
                return !item.completed;
            });  
        default:
        return state;
    };
};  