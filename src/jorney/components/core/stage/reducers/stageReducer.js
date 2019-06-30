
import { actionTypeConstant } from '../constants'

var initialStageState = {
    text: null,
    stage: null,
    hasEvent: true
}
/**
 * 
 * @param {Este parametro contradiz o conceito de funções puras porque o stage neste caso será evoluido porém com a mesma intancia} state 
 * @param {Ação responsável pela evolução da instância} action 
 */
var stageReducer = function (state = initialStageState, action) {

    switch (action.type) {
        case actionTypeConstant.create_stage:
            state.stage = action.stage
            action.load()
            break
        case actionTypeConstant.addScala:
            let scale = getCurrentLayer(state).getScale()
            var x = scale.x + action.scala
            var y = scale.y + action.scala
            state.stage.find('Layer')[0].scale({ x, y })
            break
        case actionTypeConstant.removeScala:

        case actionTypeConstant.draw_shape:
            getCurrentLayer(state).draw()
            break
        case actionTypeConstant.add_shape:
            getCurrentLayer(state).add(action.shape)
            break
        case actionTypeConstant.listenningOff:
            state.hasEvent = false
            break
        case actionTypeConstant.listenningOn:
            state.hasEvent = true
            break
        case actionTypeConstant.add_layer:
            state.stage.add(action.layer)
            break
        default:
            return state
    }
    return state;
}

const initialArrayStageState = {
    stage: []
}

var stagesReducer = function(state = initialArrayStageState, action){
    
}


var getCurrentLayer = function (state) {
    return state.stage.find('Layer')[0]
}

export default stageReducer