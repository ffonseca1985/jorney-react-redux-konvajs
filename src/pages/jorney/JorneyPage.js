import React from 'react';
import Page from '../../components/Page';
import {
    Container, Row, Col, Button, Nav, NavLink, NavItem, TabContent,
    TabPane, Breadcrumb, BreadcrumbItem, Label
} from 'reactstrap';

import Stage from '../../jorney/components/core/stage/Stage'
import classnames from 'classnames';
import { connect } from 'react-redux'
import { openModal } from '../../jorney/components/community/stage/interations/actions/interativeAction'
import { saveStage } from '../../jorney/components/core/stage/actions/historyVersionAction'
import { openFormContext } from '../../jorney/components/core/context/actions/contextAction'
import { openModalContainer as openModalContainerAction } from '../../jorney/components/core/container/actions/containerAction'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class JorneyPage extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const { stage, openModal, saveStage, openModalContainer, openModalContext } = this.props

        return (

            <Page>
                <Container>
                    <Row>
                        <Col xs='4'>
                            <Breadcrumb>
                                <BreadcrumbItem active>Home</BreadcrumbItem>
                                <BreadcrumbItem active>New Jorney</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                        <Col xs='8'>
                            <div>
                                <Button outline color="primary" onClick={() => openModal()}>New Component</Button>{' '}
                                <Button outline color="primary" onClick={() => saveStage(stage)}>
                                    <FontAwesomeIcon icon="save" /> Save
                                </Button>{' '}
                                <Button outline color="primary">Export</Button>{' '}
                                <Button outline color="primary">Reset</Button>{' '}
                                <Button outline color="primary" onClick={() => openModalContainer()} >New Container</Button>{' '}
                                <Button outline color="secundary" onClick={() => openModalContext()} >
                                    <FontAwesomeIcon icon="tools" /> CONTEXT
                                </Button>{' '}
                            </div>
                        </Col>

                        <Col>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}>
                                        Fluxo Inicial Xpto
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <Stage />
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Col>
                        <Col sm={{ size: 4, offset: 8 }} className='form-group'>
                            <Col xs='12'>
                                <Label>Controle de Versão: </Label>
                            </Col>
                            <Col xs='12'>
                                <select className='form-control'>
                                    <option>Master</option>
                                    <option>New...</option>
                                </select>
                            </Col>
                        </Col>
                    </Row>

                </Container>
            </Page>
        )
    }
}

var mapstateToProps = function (state, props) {

    return {
        stage: state.stage.stage
    }
}

var mapDispatToAction = function (dispatch, state) {
    return {
        openModal: () => dispatch(openModal()),
        saveStage: (stage) => dispatch(saveStage(stage)),
        openModalContainer: () => dispatch(openModalContainerAction()),
        openModalContext: () => dispatch(openFormContext())
    }
}

export default connect(mapstateToProps, mapDispatToAction)(JorneyPage);