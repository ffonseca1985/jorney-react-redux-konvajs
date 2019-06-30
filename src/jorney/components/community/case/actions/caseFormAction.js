import { actionCaseFormTypeConstant, actionModalTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'
import caseManager from '../caseManager'

const openCaseForm = () => ({
    type: actionCaseFormTypeConstant.openCaseForm
})

const closeCaseForm = () => ({
    type: actionCaseFormTypeConstant.closeCaseForm
})

const createCaseComponent = data => ({
    type: actionModalTypeConstant.createCaseComponent,
    create: () =>
    {
        let manager = new caseManager()
        manager.create(data.componentName)
    }
})

export {openCaseForm , closeCaseForm , createCaseComponent }