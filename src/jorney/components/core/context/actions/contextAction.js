
import actionTypeConstant from '../constants'

const addKeyValuesContext = function () {
    return {
        type: actionTypeConstant.addKeyValuesContext
    }
}

const saveFormContext = function (keyValues) {
    return{
        type: actionTypeConstant.saveContext,
        keyValues
    }
}

const changeKeyValuecContext = function (keyValues) {
    return {
        type: actionTypeConstant.changeKeyValuecContext,
        keyValues
    }
}

const removeKeyValueContext = function (keyValues) {
    return {
        type: actionTypeConstant.removeKeyValueContext,
        keyValues
    }
}

const closeFormContext = function () {
    return {
        type: actionTypeConstant.closeFormContext
    }
}

const openFormContext = function () {
    return {
        type: actionTypeConstant.openFormContext
    }
}

export { addKeyValuesContext, saveFormContext, changeKeyValuecContext, removeKeyValueContext, closeFormContext, openFormContext }

