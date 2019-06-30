import React from 'react';

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


class NewProfile extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col xl={8} lg={12} md={12}>
                        <Card>
                            <CardHeader>New Profile</CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Col sm={{ size: 10 }}>
                                            <Label>Name Profile</Label>
                                            <Input name="profile" type="text" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup>
                                        <Col sm={{ size: 10 }}>
                                            <Label>Name User</Label>
                                            <Input name="name" type="text" />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup check row>
                                        <Col sm={{ size: 10 }}>
                                            <Button>Save</Button>
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

export default NewProfile;