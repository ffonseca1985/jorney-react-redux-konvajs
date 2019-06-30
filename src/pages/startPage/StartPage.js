
import React from 'react'
import Page from './../../components/Page';
import Help from './../shared/Help'
import Projects from './components/Projects'

class StartPage extends React.Component {

    novoProjeto = () => {
        this.props.history.push('/jorney/new');
    } 

    render() {
        return (
            <Page>
                <Help novoProjeto = {this.novoProjeto} />
                <Projects/>
            </Page>
        )
    }
}

export default StartPage