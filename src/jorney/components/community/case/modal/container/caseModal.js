import React from 'react'
import { connect } from 'react-redux'
import CaseForm from '../forms/caseForm'
import PropertiesForms from '../properties/propertiesForm'
import { closeCaseForm } from '../../actions/caseFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class CaseModal extends React.Component {

    render() {

        const { activeCase, handleSubmitCase, closeCase, activeProperties, 
            handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <CaseForm onSubmit={handleSubmitCase} closeForm={closeCase} active={activeCase} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        activeCase: state.componentCase.activeCaseForm,
        activeProperties: state.componentCase.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitCase: (values) => {
            values.componentType = componentType.case
            createComponent(values)
            dispach(closeCaseForm())
        },
        handleSubmitProperties: (values) => {
            //editComponent(values)
            dispach(closePropertiesForm())
        },
        closeProperties: () => {
            dispach(closePropertiesForm())    
        },
        closeCase: () => {
            dispach(closeCaseForm())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(CaseModal)