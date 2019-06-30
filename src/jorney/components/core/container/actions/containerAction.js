
import { actionTypeConstant } from '../constants/'

const addContainer  = data => ({
    type: actionTypeConstant.addContainer,
    data
})
 
const openModalContainer = () => ({
    type: actionTypeConstant.openModalContainer
})

const closeModalContainer = () => ({
    type: actionTypeConstant.closeModalContainer
})

export { addContainer, openModalContainer, closeModalContainer }