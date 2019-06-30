import stageReducer from '../components/core/stage/reducers/stageReducer'
import layerReducer from '../components/core/layer/reducers/layerReducer'
import shapeReducer from '../components/core/shape/reducers/shapeReducer'
import historyVersionReducer from '../components/core/stage/reducers/historyVersionRedurcer'
import { menuReducer } from '../components/community/menu/reducers/menuReducer'
import { menuPrincipalReducer } from  '../components/community/stage/interations/reducers/interativeReducer'
import { initialReducer } from '../components/community/init/reducers/initialReducer'
import { endReducer } from '../components/community/end/reducers/endReducer'
import { combineReducers } from 'redux'
import { containerFormReducer, containerReducer } from '../components/core/container/reducers/containerReducer'
import { contextReducer } from '../components/core/context/reducers/contextReducer'
import { atendenteReducer } from '../components/community/atendente/reducers/atendenteReducer'
import { caseReducer } from '../components/community/case/reducers/caseReducer'

import { reducer as formReducer } from 'redux-form';


const reducers = combineReducers({ 
    stage: stageReducer, 
    layer: layerReducer,
    menuPrincipal: menuPrincipalReducer,
    componentMenu: menuReducer,
    componentInit: initialReducer,
    componentEnd: endReducer,
    componentAtendente: atendenteReducer,
    componenteCase: caseReducer,
    historyVersion: historyVersionReducer,
    currentShapeSelected: shapeReducer,
    containerForm: containerFormReducer,
    context: contextReducer,
    container: containerReducer,
    form: formReducer}) 

export default reducers;