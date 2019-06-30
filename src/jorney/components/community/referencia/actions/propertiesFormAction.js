import { actionPropertiesFormTypeConstant } from '../constants/index'

const openPropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.openReferenciaPropertiesForm
})

const closePropertiesForm = () => ({
    type: actionPropertiesFormTypeConstant.closeReferenciaPropertiesForm
})

export {openPropertiesForm, closePropertiesForm}