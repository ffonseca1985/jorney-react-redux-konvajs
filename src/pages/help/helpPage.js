
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Help from './../shared/Help'

class HelpPage extends React.Component {

    novoProjeto = () => {
        this.props.history.push('/jorney/new');
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    Help Jorney Design
            </CardHeader>
                <CardBody>
                    <Help novoProjeto={this.novoProjeto} />
                </CardBody>
            </Card>
        )
    }
}

export default HelpPage