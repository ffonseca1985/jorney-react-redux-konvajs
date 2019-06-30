import React from 'react'
import ContextForm from '../forms/contextForm'
import { connect } from 'react-redux'
import * as action from '../../actions/contextAction'

class ContextModal extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        const { handleSubmit, closeForm, active, keyValues, addKeyValue, saveForm } = this.props;

        return (
            <ContextForm 
                handleSubmit = {handleSubmit} 
                closeForm = {closeForm}
                active={active} 
                keyValues={keyValues} 
                addKeyValue={addKeyValue} 
                saveForm={saveForm}/>
        )
    }
}

const mapStateToPropertie = function (state, properties) {

    return {
        active: state.context.activeModal,
        keyValues: state.context.keyValues,
    }
}

const mapDispatchToAction = function (dispatch, state) {
    return {
        handleSubmit: (values) => dispatch(action.addKeyValuesContext(values)),
        closeForm: () => dispatch(action.closeFormContext()),
        addKeyValue: () => dispatch(action.addKeyValuesContext()),
        saveForm: () => dispatch(action.saveFormContext())
    }
}

export default connect(mapStateToPropertie, mapDispatchToAction)(ContextModal);
