import React from 'react';
import UserService from './services/userService'

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
    Container
} from 'reactstrap';

class NewUser extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xl={8} lg={12} md={12}>
                        <Card>
                            <CardHeader>New User</CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup >
                                        <Col sm={{ size: 10 }}>
                                            <Label>Name User</Label>
                                            <Input name="name" type="text" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check row>
                                        <Col sm={{ size: 10 }}>
                                            <Button>Create</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewUser;


