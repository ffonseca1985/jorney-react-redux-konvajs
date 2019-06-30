import React from 'react'
import RolesMock from '../mock/rolesMock'
import Page from '../../../components/Page';
import { Container, Col, Row, Table, Alert } from 'reactstrap';


class Roles extends React.Component {

    render() { 
        
    const roles = RolesMock

        var GetTable = function () {
            
            if (roles.length > 0) {
                return (
                    <Table striped hover size='xs' responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roles.map((x, index) => (
                                <tr key={index}>
                                    <td>
                                        {x.id}
                                    </td>
                                    <td>
                                        {x.name}
                                    </td>
                                    <td>
                                        {x.description}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                )
            }
            return (
                <div>
                    <Alert color="secondary">No Roules found!!</Alert>
                </div>
            )
        }
        return (
            <Page>
                <Container>
                    <Row>
                        <Col xs="12">
                            <GetTable />
                        </Col>
                    </Row>
                </Container>
            </Page>
        )
    }
}

export default Roles
