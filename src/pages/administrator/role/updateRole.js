import React from 'react';

import { Field } from 'redux-form'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    FormFeedback,
} from 'reactstrap';


class UpdateRole extends React.Component {


    render() {
        return (
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>New Profile</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label>Name Role</Label>
                                    <Field name="role" type="text" component="input"></Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Description</Label>
                                    <Field name="description" type="text" component="input"></Field>
                                </FormGroup>
                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                        <Button>Save</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default UpdateRole;