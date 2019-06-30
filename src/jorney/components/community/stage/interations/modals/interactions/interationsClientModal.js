import React from 'react'
import { connect } from 'react-redux'
import { closeModal, createShape } from '../../actions/interativeAction'
import { createComponent } from '../../../../../../managers/components'
import InterationsClientForm from './interationsClientForm'

class InterativeClientModal extends React.Component {


    render() {

        const { active, handleSubmit, close } = this.props

        return (
            <InterationsClientForm onSubmit={handleSubmit} closeForm={close} active={active} />
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        active: state.menuPrincipal.active
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmit: (values) => {
            dispach(createShape(values))
            createComponent(values)
        },
        close: () => {
            dispach(closeModal())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(InterativeClientModal)