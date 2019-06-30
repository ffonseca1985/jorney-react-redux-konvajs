import { actionReferenciaFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import ReferenciaManager from '../ReferenciaManager'

const openReferenciaForm = () => ({
    type: actionReferenciaFormTypeConstant.openReferenciaForm
})

const closeReferenciaForm = () => ({
    type: actionReferenciaFormTypeConstant.closeReferenciaForm
})

const createReferenciaComponent = data => ({
    type: actionModalTypeConstant.createReferenciaComponent,
    create: () =>
    {
        let manager = new ReferenciaManager()
        manager.create(data.componentName)
    }
})

export {openReferenciaForm, closeReferenciaForm , createReferenciaComponent}