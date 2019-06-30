
import React from 'react'
import { Field } from 'redux-form'

import { Row, Col} from  'reactstrap'

class ConnectorHtml extends React.Component {
    
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="form-group">
                <Row>
                    <Col xs="6">
                        <label>Chave {this.props.mumberConnector}</label>
                        <Field className="form-control" name="componentConnector" component="input"></Field>
                    </Col>
                    <Col xs="6">
                        <label>Valor {this.props.mumberConnector}</label>
                        <Field className="form-control" name="componentConnector" component="input"></Field>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default ConnectorHtml