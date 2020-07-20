const INITIAL_STATE = {
    isOpen: false
}

export default function products(state = INITIAL_STATE, action) {        
    switch(action.type){
        case "OPEN_MENU":
            return {isOpen: !state.isOpen}
        case "CLOSE_MENU":
            return {isOpen: !state.isOpen}
        default:
            return state;                 
    }        
}