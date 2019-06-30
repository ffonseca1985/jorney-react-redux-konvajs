import { actionInitFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import ValidadorManager from '../validadorManager'

const openInitForm = () => ({
    type: actionInitFormTypeConstant.openInitForm
})

const closeInitForm = () => ({
    type: actionInitFormTypeConstant.closeInitForm
})

const createInitComponent = data => ({
    type: actionModalTypeConstant.createComponentInit,
    create: () =>
    {
        let manager = new ValidadorManager()
        manager.create(data.componentName)
    }
})

export {openInitForm, closeInitForm, createInitComponent}