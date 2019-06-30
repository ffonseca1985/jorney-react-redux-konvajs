
import {actionTypesConstants} from './../constants'

const openModal = () => ({
    type: actionTypesConstants.openModal
})

const closeModal = () => ({
    type: actionTypesConstants.closeModal
})

const createShape = (data) => ({
    type: actionTypesConstants.createShape
})

export {openModal, closeModal, createShape}
