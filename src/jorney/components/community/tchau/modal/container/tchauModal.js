import React from 'react'
import { connect } from 'react-redux'
import TchauForms from '../forms/tchauForms'
import PropertiesForms from '../properties/propertiesForm'
import { closeTchauForm } from '../../actions/tchauFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class TchauModal extends React.Component {

    render() {

        const { activeInit, handleSubmitTchau, closeInit, activeProperties, handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <TchauForms onSubmit={handleSubmitTchau} closeForm={closeInit} active={activeInit} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    return {
        activeTchau: state.componentTchau.activeTchauForm,
        activeProperties: state.componentTchau.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitTchau: (values) => {
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
            dispach(closeTchauForm())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(TchauModal)