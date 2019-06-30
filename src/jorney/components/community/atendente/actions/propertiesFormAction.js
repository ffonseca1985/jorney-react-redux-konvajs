import { actionPropertiesFormTypeConstant } from '../constants/index'

const openPropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.openPropertiesAtendenteForm
})

const closePropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.closePropertiesAtendenteForm
})

export {openPropertiesForm, closePropertiesForm}