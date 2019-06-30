import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Col, Row, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { KeyValue } from '../components/KeyValue'

class ContextForm extends React.Component {

    render() {

        const { handleSubmit, closeForm, active, keyValues, addKeyValue, saveForm } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Modal isOpen={active}>
                    <ModalHeader>
                        Properties Context:
                </ModalHeader>
                    <ModalBody>

                        <div className="form-group">
                            <Row>
                                <Col xs="12">
                                    Name first Tab (Container):
                            </Col>
                                <Col xs="12">
                                    <Field type="text" name="nameTab" component="input" className="form-control"></Field>
                                </Col>
                            </Row>
                        </div>

                        <div className="form-group">
                            <Row>
                                <Col xs="5" style={{ paddingRight: 0 }}>
                                    <label>Add new Key/Value</label>
                                </Col>
                                <Col xs="1">
                                    <Button color="primary" onClick={addKeyValue}>+</Button>
                                </Col>
                            </Row>
                        </div>

                        {
                            keyValues.map((x, index) => (
                                <KeyValue key={index} value={x.value}></KeyValue>
                            ))
                        }

                    </ModalBody>
                    <ModalFooter>
                        <div className="form-group">
                            <Button color="primary" type="submit" onClick={saveForm}>Save</Button>{' '}
                            <Button color="secondary" onClick={closeForm}>Cancel</Button>
                        </div>
                    </ModalFooter>
                </Modal>
            </form>
        )
    }
}



export default  reduxForm({ form: 'form' })(ContextForm);
