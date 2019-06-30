import { actionPropertiesFormTypeConstant } from '../constants/index'

const openPropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.openColetorDigitosPropertiesForm
})

const closePropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.closeColetorDigitosPropertiesForm
})

export {openPropertiesForm, closePropertiesForm}