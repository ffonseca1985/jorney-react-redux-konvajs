import React from 'react'
import UserMock from '../mock/userMock'
import Page from '../../../components/Page';
import { Container, Col, Row, Table, Alert } from 'reactstrap';


class Users extends React.Component {

    render(){ 

    const  users = UserMock

        var GetTable = function () {
            
            if (users.length > 0) {
                return (
                    <Table striped hover size='xs' responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((x, index) => (
                                <tr key={index}>
                                    <td>
                                        {x.id}
                                    </td>
                                    <td>
                                        {x.name}
                                    </td>
                                    <td>
                                        {x.email}
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                )
            }
            return (
                <div>
                    <Alert color="secondary">No users found!!</Alert>
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

export default Users
