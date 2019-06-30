import * as React from "react";
import "gitgraph.js";
import "gitgraph.js/build/gitgraph.css";
import GitForm from './gitForm'
import Page from 'components/Page'
import { Breadcrumb, BreadcrumbItem, Container, Card, CardBody } from 'reactstrap'

export default class NewBranch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let options = {
      template: "metro", // or blackarrow
      orientation: "vertical",
      author: "Fábio Fonseca",
      mode: "extended" // or compact if you don't want the messages
    };

    let gitgraph = Object.create(window.GitGraph.prototype);
    gitgraph.constructor(options)

    const master = gitgraph
      .branch("master")
      .commit("Inicio")

    gitgraph
      .branch("dev")
      .commit("Ajustes")
      .branch("feature1")
      .commit("Ajustes")
      .merge(master);

    gitgraph
      .branch("dev")
      .commit("Ajustes 0")
      .commit("Ajustes 1")
      .commit("Ajustes 2")
      .merge(master);
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <BreadcrumbItem >Home</BreadcrumbItem>
          <BreadcrumbItem active>New Branch</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <CardBody>
            <GitForm />
          </CardBody>
        </Card>
        <br />
        <Card>
          <CardBody>
            <canvas id="gitGraph"></canvas>
          </CardBody>
        </Card>
      </Container>
    )
  }
}
