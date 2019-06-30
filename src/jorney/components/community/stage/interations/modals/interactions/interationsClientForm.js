
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { components } from '../../../../constants'

import {
    Button, Modal, ModalBody, ModalHeader, Label
} from 'reactstrap'

class InterationsClientForm extends React.Component {

    render() {
        const { handleSubmit, closeForm, active } = this.props
        return (

            <Modal isOpen={active}>
                <ModalHeader>
                    Should a Component:
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <Label for='slcComponent'>Type of Component</Label>
                            <Field className="form-control" name="componentType" component="select">
                                {
                                    components.map((x) => (
                                        <option key={x.id} value={x.id} className="">{x.name}</option>
                                    ))
                                }
                            </Field>
                        </div>
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
    form: 'interationsClientForm'
})(InterationsClientForm)

