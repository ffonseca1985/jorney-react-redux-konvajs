import reducers from  '../reducers/index'
import { applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk';

/**
 * Este elemento contém todos os elementos globais no Jorney Framework
 */
 
 //var middleware = applyMiddleware(thunk, logger);

var middleware = applyMiddleware(thunk)
const store = createStore(reducers, middleware )

export default store