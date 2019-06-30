
import {mouseCode} from '../../../../shared/constants/keyCodeConstant'
import * as UtilState from '../../../../shared/state/'
import { openModal } from './actions/interativeAction'

class InterationsClientStage {

    static loadShapes(evt){

        if (!UtilState.getState().state.hasEvent)
            return

        switch (evt.evt.button) {
            case mouseCode.rigthButton:
                var dispatch = UtilState.getDispatch();
                if (dispatch != null)
                    dispatch(openModal())
             break;       
        }
    }
}

export default InterationsClientStage