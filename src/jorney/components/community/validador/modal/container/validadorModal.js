import React from 'react'
import { connect } from 'react-redux'
import InitForms from '../init/initForms'
import PropertiesForms from '../properties/propertiesForm'
import { closeInitModal } from '../../actions/initFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class ValidadorModal extends React.Component {

    render() {

        const { activeInit, handleSubmitInit, closeInit, activeProperties, handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <InitForms onSubmit={handleSubmitInit} closeForm={closeInit} active={activeInit} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        activeInit: state.componentInit.activeInitialForm,
        activeProperties: state.componentInit.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitInit: (values) => {
            values.componentType = componentType.init
            createComponent(values)
            dispach(closeInitModal())
        },
        handleSubmitProperties: (values) => {
            //editComponent(values)
            
            dispach(closePropertiesForm())
        },
        closeProperties: () => {
            dispach(closePropertiesForm())    
        },
        closeInit: () => {
            dispach(closeInitModal())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(ValidadorModal)