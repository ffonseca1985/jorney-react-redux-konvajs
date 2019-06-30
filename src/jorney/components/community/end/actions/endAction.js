import { actionTypeConstant } from '../constants/index'

const openEndModal = () => ({
    type: actionTypeConstant.open
})

const closeEndModal = () => ({
    type: actionTypeConstant.close
})

const createEndComponent = data => ({
    type: actionTypeConstant.create
})

export {openEndModal, closeEndModal, createEndComponent}