import { actionPropertiesFormTypeConstant } from '../constants/index'

const openPropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.openPropertiesForm
})

const closePropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.closePropertiesForm
})

export {openPropertiesForm, closePropertiesForm}