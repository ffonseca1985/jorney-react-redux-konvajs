
import {actionTypeConstant} from '../constants'

var initialState = {
    currentShape: null
}

var shapeReducer = function(state = initialState, action){
    switch  (action.type){
        case actionTypeConstant.addCurrentSelectShape:
            state.currentShape = action.shape
            return state
         case actionTypeConstant.removeCurrentSelectedShape:
            state.currentShape = null    
            return state
          default:
            return state  
    }
}

export default shapeReducer