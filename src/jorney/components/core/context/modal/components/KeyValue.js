import React from 'react'
import { Row, Col } from 'reactstrap'
import { Field } from 'redux-form'

class KeyValue extends React.Component {

    constructor(props){
        super(props)
    }

    render() {

        const {index} = this.props;

        return (
            <div className="form-group">
                <Row>
                    <Col xs="6">
                        <Field className="form-control" name={'key' + index} component="input" type="text"></Field>
                    </Col>
                    <Col xs="6">
                        <Field className="form-control" name={'value' + index} component="input" type="text"></Field>
                    </Col>
                </Row>
            </div>
        )
    }
}

export { KeyValue }