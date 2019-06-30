import { actionTchauFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import TchauManager from '../tchauManager'

const openTchauForm = () => ({
    type: actionTchauFormTypeConstant.openInitForm
})

const closeTchauForm = () => ({
    type: actionTchauFormTypeConstant.closeInitForm
})

const createCloseComponent = data => ({
    type: actionModalTypeConstant.createTchauComponent,
    create: () =>
    {
        let manager = new TchauManager()
        manager.create(data.componentName)
    }
})

export {openTchauForm, closeTchauForm, createCloseComponent}