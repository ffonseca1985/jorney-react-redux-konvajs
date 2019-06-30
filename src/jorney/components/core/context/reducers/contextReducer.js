import  actionTypeConstant from '../constants/'

const initialContextReducer = {
    keyValues: [ {id: 'qweqw', value: 'asasd'}],
    activeModal: false
}

const contextReducer = function(state = initialContextReducer, action) {
    
    let nextState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeConstant.addKeyValuesContext:
            nextState.keyValues.push({id: '', value: ''})
            return nextState
        case actionTypeConstant.openFormContext:
            nextState.activeModal = true
            return nextState
        case actionTypeConstant.closeFormContext:
            nextState.activeModal = false
            return nextState    
        default:
            return nextState
    }
}

export {contextReducer}