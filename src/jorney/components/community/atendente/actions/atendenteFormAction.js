import { actionAtendenteFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import AtendenteManager from '../atendenteManager'

const openAtendenteForm = () => ({
    type: actionAtendenteFormTypeConstant.openAtendenteForm
})

const closeAtendenteForm = () => ({
    type: actionAtendenteFormTypeConstant.closeAtendenteForm
})

const createAtendenteComponent = data => ({
    type: actionModalTypeConstant.createComponentAtendente,
    create: () =>
    {
        let manager = new AtendenteManager()
        manager.create(data.componentName)
    }
})

export {openAtendenteForm, closeAtendenteForm, createAtendenteComponent}