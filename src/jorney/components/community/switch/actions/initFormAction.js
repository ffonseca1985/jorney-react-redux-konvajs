import { actionInitFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import InitManager from '../initManager'

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
        let manager = new InitManager()
        manager.create(data.componentName)
    }
})

export {openInitForm as openInitModal, closeInitForm as closeInitModal, createInitComponent}