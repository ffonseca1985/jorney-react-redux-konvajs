import React from 'react'
import { connect } from 'react-redux'
import AtendenteForms from '../forms/atendenteForms'
import PropertiesForms from '../properties/propertiesForm'
import { closeAtendenteForm } from '../../actions/atendenteFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class AtendenteModal extends React.Component {

    render() {

        const { activeAtendente, handleSubmitAtendente, closeAtendente, 
            activeProperties, handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <AtendenteForms onSubmit={handleSubmitAtendente} closeForm={closeAtendente} active={activeAtendente} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        activeAtendente: state.componentAtendente.activeAtendenteForm,
        activeProperties: state.componentAtendente.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitAtendente: (values) => {
            values.componentType = componentType.atendente
            createComponent(values)
            dispach(closeAtendenteForm())
        },
        handleSubmitProperties: (values) => {
            //editComponent(values)
            dispach(closePropertiesForm())
        },
        closeProperties: () => {
            dispach(closePropertiesForm())    
        },
        closeInit: () => {
            dispach(closeAtendenteForm())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(AtendenteModal)