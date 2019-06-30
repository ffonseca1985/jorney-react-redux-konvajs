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
    Label
} from 'reactstrap';


class UpdateProfile extends React.Component {

    render() {
        return (
            <Row>
                <Col xl={6} lg={12} md={12}>
                    <Card>
                        <CardHeader>New Profile</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label>Name Profile</Label>
                                    <Field name="profile" type="text" component="input"></Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Name User</Label>
                                    <Field name="name" type="text" component="input"></Field>
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

export default UpdateProfile;