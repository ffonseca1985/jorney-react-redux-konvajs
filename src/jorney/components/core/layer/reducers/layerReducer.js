
import Konva from 'konva' 
import { reducerConstant } from '../constants'

var initialState = {
    layer: new Konva.Layer()
}

var layerReducer = function(state = initialState, action){

    switch (action.type) {
        case reducerConstant.create_layer:
            return state
        case reducerConstant.add_shape:
            state.add(action.shape)
            if (action.draw)
                action.layer.draw()
            return state
        default:
            return state    
    }
}

export default layerReducer
