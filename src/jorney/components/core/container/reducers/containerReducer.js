
import { actionTypeConstant } from '../constants/'

const initialState = {
    containers: []
}

var containerReducer = function(state = initialState, action){

    let newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeConstant.addContainer:
            newState.containers.push(action.container)        
            return newState
        default:
            return newState
    }
}

const initialFormState = {
    active: false
}

var containerFormReducer = function(state = initialFormState, action){

    let newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeConstant.openModalContainer:
            newState.active = true
            return newState
        case actionTypeConstant.closeModalContainer:
            newState.active = false
            return newState
        default:
            return newState
    }
}

export { containerReducer, containerFormReducer }