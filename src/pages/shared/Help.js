import React from 'react'
import { Container, Row, Col, Button, ButtonGroup, Breadcrumb, BreadcrumbItem, 
    Card,
    CardBody,
    CardHeader} from 'reactstrap';

class Help extends React.Component {
    
    render(){

        return (
            <Container>
                <Row>
                    <Col md={12} sm={12} xs={12} className="mb-3">
                        <Card className="mb-3">
                        <CardHeader>Menu Inicial</CardHeader>
                        <CardBody>
                            <section>
                                <div><a className="text-primary">Construindo sua Jornada em 5 Minutos</a></div>
                                <div><a className="text-primary">Documente seus projetos</a></div>
                                <div><a className="text-primary">Escolha o formato de exportação para a sua Jornada</a></div>
                                <div><a className="text-primary">Vantagens do Jorney Design</a></div> 
                                <div><a className="text-primary">Desenvolvimento moderno e ágil</a></div>
                                <div><a className="text-primary">Melhor compreensão do seu negócio</a></div> 
                            </section>
                            <section className='text-right'>
                            <Button color="link" onClick={this.props.novoProjeto}>
                                  Novo Projeto...
                            </Button>
                            </section>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Help