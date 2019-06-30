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
    Container,
    Input
} from 'reactstrap';

class NewRole extends React.Component {

    render() {
        return (
            <Container>
            <Row>
                <Col xl={8} lg={12} md={12}>
                    <Card>
                        <CardHeader>New Role</CardHeader>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Col sm={{ size: 10 }}>
                                        <Label>Name Role</Label>
                                        <Input name="role" type="text" />
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col sm={{ size: 10 }}>
                                        <Label>Description</Label>
                                        <Input name="description" type="text" />
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

export default NewRole;