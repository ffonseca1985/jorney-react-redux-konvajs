import React from 'react'
import { connect } from 'react-redux'
import ReferenciaForm from '../forms/referenciaForm'
import PropertiesForms from '../properties/propertiesForm'
import { closeReferenciaForm } from '../../actions/referenciaFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class RederenciaModal extends React.Component {

    render() {

        const { activeReferencia, handleSubmitReferencia, closeReferencia, activeProperties, handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <ReferenciaForm onSubmit={handleSubmitReferencia} closeForm={closeReferencia} active={activeReferencia} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        activeReferencia: state.referenciaComponent.activeReferenciaForm,
        activeProperties: state.referenciaComponent.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitReferencia: (values) => {
            values.componentType = componentType.referencia
            createComponent(values)
            dispach(closePropertiesForm())
        },
        handleSubmitProperties: (values) => {
            //editComponent(values)
            dispach(closePropertiesForm())
        },
        closeProperties: () => {
            dispach(closePropertiesForm())    
        },
        closeReferencia: () => {
            dispach(closeReferenciaForm())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(RederenciaModal)