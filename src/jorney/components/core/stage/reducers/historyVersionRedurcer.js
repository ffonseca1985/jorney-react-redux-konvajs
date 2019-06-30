import { actionTypeConstant, actionHistoryVersionTypeConstant } from '../constants/index'

const initialState = {
    versions: []
}

const historyVersionReducer = function(state = initialState, action){

    let newState = Object.assign({},  state)

    switch (action.type) {
        case actionHistoryVersionTypeConstant.save_version:
            action.save()
            newState.versions = action.versions
            break  
        default:
            newState= state
            break     
    }
    return newState
}

export default historyVersionReducer


