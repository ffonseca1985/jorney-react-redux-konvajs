
import { actionColetorDigitosFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import ColetorDigitosManager from '../coletorDigitosManager'

const openColetorDigitosForm = () => ({
    type: actionColetorDigitosFormTypeConstant.openColetorDigitosForm
})

const closeColetorDigitosForm = () => ({
    type: actionColetorDigitosFormTypeConstant.closeColetorDigitosForm
})

const createColetorDigitosComponent = data => ({
    type: actionModalTypeConstant.createComponentColetorDigitos,
    create: () =>
    {
        let manager = new ColetorDigitosManager()
        manager.create(data.componentName)
    }
})

export {openColetorDigitosForm, closeColetorDigitosForm, createColetorDigitosComponent}