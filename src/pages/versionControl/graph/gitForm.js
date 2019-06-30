import React from 'react'
import { Col, Row, FormGroup, Form, Label, Input, FormText, Button, Container } from 'reactstrap'
import { Field } from 'redux-form'

class GitForm extends React.Component {

    render() {

        return (
            <Row>
                <Col xs="3">
                    <FormGroup>
                        <Label for="exampleSelect">Select a Project*</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Project XPTO</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="3">
                    <FormGroup>
                        <Label for="exampleSelect">Select a Branch*</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Master</option>
                            <option>Dev</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="3">
                    <FormGroup>
                        <Label for="exampleEmail">New Branch*</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Name of Branch" />
                    </FormGroup>
                </Col>
                <Col xs="4">
                    <FormGroup>
                        <Button>Create Branch</Button>
                    </FormGroup>
                </Col>
            </Row>
        )
    }
}

export default GitForm