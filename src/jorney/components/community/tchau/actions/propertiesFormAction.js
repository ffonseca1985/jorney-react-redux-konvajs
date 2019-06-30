import { actionPropertiesFormTypeConstant } from '../constants/index'

const openPropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.openTchauPropertiesForm
})

const closePropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.closeTchauPropertiesForm
})

export {openPropertiesForm, closePropertiesForm}