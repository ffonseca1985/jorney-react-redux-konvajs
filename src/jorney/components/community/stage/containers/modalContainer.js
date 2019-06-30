import React from 'react'
import InterationsClientModal from '../interations/modals/interactions/interationsClientModal'
import InitModal from '../../init/modal/container/initModal'
import EndModal from '../../end/modal/endModal'
import MenuModal from '../../menu/modal/container/menuModal'
import ContainerModal from '../../../core/container/modal/container/containerModal'
import ContextModal from '../../../core/context/modal/containers/contextModal'
import AtendenteModal from '../../atendente/modal/container/atendenteModal'

const ModalContainer = () => (
    <section>
        <AtendenteModal></AtendenteModal>
        <ContextModal></ContextModal>
        <ContainerModal></ContainerModal>
        <MenuModal></MenuModal>
        <EndModal></EndModal>
        <InitModal></InitModal>
        <InterationsClientModal></InterationsClientModal>
    </section>
)

export default ModalContainer