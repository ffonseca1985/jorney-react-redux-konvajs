import React from 'react'
import {
    Container, Row, Col,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    CardText
} from 'reactstrap';

import { makeData } from "./../services/ProjectService";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from 'lodash'

class Projects extends React.Component {

    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {

        const { data } = this.state;

        return (
            <Container>
                <Row>
                    <Col md={6} sm={6} xs={12} className="mb-3">
                        <Card  className="mb-3">
                        <CardHeader>Meus Projetos</CardHeader>
                            <CardBody>
                                <ReactTable
                                    data={data}
                                    columns={[
                                        {
                                            Header: (
                                                <span className= 'text-primary'>
                                                    <i className="fa-tasks" /> Projeto(s)
                                                </span>
                                                ),
                                            columns: [
                                                {
                                                    Header: "Nome",
                                                    accessor: "firstName"
                                                }
                                            ]
                                        },
                                        {
                                            Header: () => (
                                                <span className= 'text-primary'>
                                                    <i className="fa-tasks" /> Mais Recentes
                                                </span>
                                                ),
                                            columns: [
                                                {
                                                    Header: "Versão",
                                                    accessor: "age",
                                                    aggregate: vals => _.round(_.mean(vals)),
                                                    Aggregated: row => {
                                                        return (
                                                            <span>
                                                                {row.value} (avg)
                                                            </span>
                                                        );
                                                    }
                                                },
                                                {
                                                    Header: "Data",
                                                    accessor: "visits",
                                                    aggregate: vals => _.sum(vals)
                                                }
                                            ]
                                        }
                                    ]}
                                    pivotBy={["firstName"]}
                                    defaultPageSize={10}
                                    className="-striped -highlight"
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} sm={6} xs={12} className="mb-3">
                        <Card className="mb-3">
                        <CardHeader>Projetos Recentes</CardHeader>
                            <CardBody>

                                <h6 className="text-primary">Hoje</h6>
                                <hr />

                                <section style={{marginBottom: "2%"}}>
                                    <div><a>Projeto 1 <span style={{fontSize: "10px"}} className="text-primary">(versão 1.0.3)</span></a></div>
                                    <div><a>Projeto 1 <span style={{fontSize: "10px"}} className="text-sm-left text-primary">(versão 1.0.31)</span></a></div>
                                    <div><a>Projeto 2 <span style={{fontSize: "10px"}} className="text-sm-left text-primary">(versão 1.0.23)</span></a></div>
                                </section>

                                <hr />    
                                <h6 className="text-primary">Esta Semana</h6>
                                <hr />

                                <section style={{ marginBottom: "2%"}}>
                                    <div><a>Projeto 1 <span  style={{fontSize: "10px"}}  className="text-primary">(versão 1.0.3)</span></a></div>
                                    <div><a>Projeto 1 <span  style={{fontSize: "10px"}} className="text-primary">(versão 1.0.31)</span></a></div>
                                    <div><a>Projeto 2 <span  style={{fontSize: "10px"}} className="text-primary">(versão 1.0.23)</span></a></div>
                                </section>
                                
                                <hr />
                                <h6 className="text-primary">Este Mês</h6>
                                <hr />

                                <section style={{ marginBottom: "2%"}}>
                                    <div><a>Projeto 1 <span  style={{fontSize: "10px"}} className="text-primary">(versão 1.0.3)</span></a></div>
                                    <div><a>Projeto 1 <span  style={{fontSize: "10px"}} className="text-primary">(versão 1.0.31)</span></a></div>
                                    <div><a>Projeto 2 <span  style={{fontSize: "10px"}} className="text-primary">(versão 1.0.23)</span></a></div>
                                </section>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Projects