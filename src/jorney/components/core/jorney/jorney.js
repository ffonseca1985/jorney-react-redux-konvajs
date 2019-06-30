import React from 'react'
import Container from "../container/Container";
import ModalContainer from "../../community/stage/containers/modalContainer"


class Jorney extends React.Component {

    render(){
        return (
            <section>
                <ModalContainer />
                <Container />
            </section>
        )
    }
}

export default Jorney;