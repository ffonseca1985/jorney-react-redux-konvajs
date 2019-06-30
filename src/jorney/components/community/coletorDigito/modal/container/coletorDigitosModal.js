import React from 'react'
import { connect } from 'react-redux'
import ColetorDigitosForms from '../forms/coletorDigitosForms'
import PropertiesForms from '../properties/propertiesForm'
import { closeColetorDigitosForm } from '../../actions/coletorDigitosFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class ColetorDigitosModal extends React.Component {

    render() {

        const { activeColetorDigitos, handleSubmitColetorDigitos, closeColetorDigitosForm, activeProperties, handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <ColetorDigitosForms onSubmit={handleSubmitColetorDigitos} closeForm={closeColetorDigitosForm} active={activeColetorDigitos} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        activeColetorDigitos: state.componentColetorDigitos.activeColetorDigitosForm,
        activeProperties: state.componentColetorDigitos.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitColetorDigitos: (values) => {
            values.componentType = componentType.coletorDigitos
            createComponent(values)
            dispach(closeColetorDigitosForm())
        },
        handleSubmitProperties: (values) => {
            //editComponent(values)
            
            dispach(closePropertiesForm())
        },
        closeProperties: () => {
            dispach(closePropertiesForm())    
        },
        closeColetorDigitosForm: () => {
            dispach(closeColetorDigitosForm())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(ColetorDigitosModal)