
import {actionTypeConstant} from './../constants'

var addCurrentSelectShape = (shape) => ({
    type: actionTypeConstant.addCurrentSelectShape,
    shape,    
    toUnderline: () => {
        shape.setStrokeWidth(3);
    }
});

var removeCurrentSelectShape = (shape) => ({
    type: actionTypeConstant.removeCurrentSelectedShape,
    shape,
    toEmphasize: () => {
        shape.setStrokeWidth(1);
    }
});

export {addCurrentSelectShape, removeCurrentSelectShape}