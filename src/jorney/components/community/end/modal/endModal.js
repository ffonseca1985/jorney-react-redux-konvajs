import React from 'react'
import { connect } from 'react-redux'
import EndForms from './endForms'
import { closeEndModal } from '../actions/endAction'
import { createComponent } from '../../../../managers/components'
import { componentType  } from '../../constants/'

class EndModal extends React.Component {

    render() {

        const { active, handleSubmit, close } = this.props

        return (
            <EndForms onSubmit={handleSubmit} closeForm={close} active={active} />
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        active: state.componentEnd.active
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmit: (values) => {
            values.componentType = componentType.end
            createComponent(values)
            dispach(closeEndModal())
        },
        close: () => {
            dispach(closeEndModal())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(EndModal)