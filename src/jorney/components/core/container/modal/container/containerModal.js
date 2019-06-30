import React from 'react'
import { connect } from 'react-redux'
import { addContainer, closeModalContainer } from '../../actions/containerAction'
import ContainerForms from '../forms/containerForms'

class ContainerModal extends React.Component {

    render() {

        const { active, handleSubmit, closeForm} = this.props

        return (
            <section>
                <ContainerForms onSubmit={handleSubmit} closeForm={closeForm} active={active} />
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
      active: state.containerForm.active
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmit: (values) => {
            dispach(addContainer(values))
        },
        closeForm: () => {
            dispach(closeModalContainer())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(ContainerModal)