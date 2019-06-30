
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import {
    Button, Modal, ModalBody, ModalHeader
} from 'reactstrap'

class ValidadorForm extends React.Component {

    render() {
        const { handleSubmit, closeForm, active } = this.props
        return (

            <Modal isOpen={active}>
                <ModalHeader>
                    Validadores Component:
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                    
                        <div className="form-group">
                            <label>Name of component</label>
                            <Field className="form-control" name="componentName" component="input"></Field>
                        </div>
                        <div className="form-group">
                            <Button color="primary" type="submit">Save</Button>{' '}
                            <Button color="secondary" onClick={closeForm}>Cancel</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        )
    }
}

export default reduxForm({
    form: 'ValidadorForm'
})(InitForm)

