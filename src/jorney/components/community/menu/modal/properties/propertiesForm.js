import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ConnetorHtml from '../../../../shared/html/connetorHtml'

import {
    Button, Modal, ModalBody, Row, Col, ModalHeader
} from 'reactstrap'

class PropertiesForm extends React.Component {

    render() {
        const { handleSubmit, closeForm, active, numberConnector } = this.props
        return (

            <Modal isOpen={active}>
                <ModalHeader>
                    Properties Menu Component:
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                    
                        <div className="form-group">
                            <label>Name of component</label>
                            <Field className="form-control" name="componentName" component="input"></Field>
                        </div>
                        <div className="form-group">
                            <label>Description of component</label>
                            <Field className="form-control" name="componentDescription" component="textarea"></Field>
                        </div>
                        <hr />
                        <div className="form-group">
                            <Row>
                                <Col xs="6">
                                    <label>Number of Connections</label>
                                </Col>
                                <Col xs="3">
                                    <Field className="form-control" value={2} name="componentNumberConnections" component="input" type="number"></Field>
                                </Col>
                            </Row>
                        </div>
                        <hr />
                        {
                            numberConnector.map((x, index) =>
                                <ConnetorHtml key={index} mumberConnector = {x}></ConnetorHtml>
                            )
                        }
                        <hr />
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
    form: 'PropertiesForm'
})(PropertiesForm)
