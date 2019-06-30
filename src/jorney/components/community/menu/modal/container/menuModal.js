import React from 'react'
import { connect } from 'react-redux'
import MenuForms from '../menu/menuForms'
import PropertiesForms from '../properties/propertiesForm'
import { closeMenuForm } from '../../actions/menuFormAction'
import { closePropertiesForm } from '../../actions/propertiesFormAction'
import { createComponent } from '../../../../../managers/components'
import { componentType  } from '../../../constants'

class MenuModal extends React.Component {

    render() {

        const { activeMenu, handleSubmitMenu, closeMenu, activeProperties, handleSubmitProperties, closeProperties } = this.props

        return (
            <section>
                <MenuForms onSubmit={handleSubmitMenu} closeForm={closeMenu} active={activeMenu} />
                <PropertiesForms onSubmit={handleSubmitProperties} closeForm={closeProperties} active={activeProperties} numberConnector={[1, 2]}></PropertiesForms>
            </section>
        )
    }
}

const mapStateToProps = function (state, props) {
    
    return {
        activeMenu: state.componentMenu.activeInitialForm,
        activeProperties: state.componentMenu.activePropertiesForm
    }
}

const mapDispachToAction = function (dispach, state) {
    return {
        handleSubmitMenu: (values) => {
            values.componentType = componentType.menu
            createComponent(values)
            dispach(closeMenuForm())
        },
        handleSubmitProperties: (values) => {
            //editComponent(values)
            dispach(closePropertiesForm())
        },
        closeProperties: () => {
            dispach(closePropertiesForm())    
        },
        closeMenu: () => {
            dispach(closeMenuForm())
        }
    }
}

export default connect(mapStateToProps, mapDispachToAction)(MenuModal)