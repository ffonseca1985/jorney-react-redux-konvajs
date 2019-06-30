import { actionMenutFormTypeConstant, actionModalTypeConstant } from '../constants/index'

const openMenuForm = () => ({
    type: actionMenutFormTypeConstant.openMenuForm
})

const closeMenuForm = () => ({
    type: actionMenutFormTypeConstant.closeMenuForm
})

const createMenuComponent = data => ({
    type: actionModalTypeConstant.createComponentInit,
    create: () =>
    {
        // let manager = new InitManager()
        // manager.create(data.componentName)
    }
})

export {openMenuForm, closeMenuForm, createMenuComponent}