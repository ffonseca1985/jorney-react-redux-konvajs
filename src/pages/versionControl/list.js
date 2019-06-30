import React from 'react';
import Page from '../../components/Page';
import { Container, Col, Row, Table, Alert } from 'reactstrap';
import { connect } from 'react-redux'

class List extends React.Component {

    constructor(props) {
        super(props)
        this.tableTypes = ['', 'bordered', 'striped', 'hover'];
    }

    render() {
        const { versions } = this.props

        var GetTable = function () {
            
            if (versions.length > 0) {
                return (
                    <Table striped hover size='xs' responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Version</th>
                                <th>Creation Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {versions.map((x, index) => (
                                <tr key={index}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {JSON.stringify(x.stage)}
                                    </td>
                                    <td>{x.date}</td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                )
            }
            return (
                <div>
                    <Alert color="secondary">No version found!!</Alert>
                </div>
            )
        }
        return (
            <Page
                breadcrumbs={[{ name: 'Version Control History', active: true }]}>
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

var mapStateToProps = function (state, props) {

    return {
        versions: state.historyVersion.versions
    }
}

export default connect(mapStateToProps)(List)