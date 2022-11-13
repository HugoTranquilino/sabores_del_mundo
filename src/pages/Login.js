import React from "react";
import { FormAcount } from "../components/FormAcount";
import { Menu } from "../components/Menu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";

function Login(){
    return(
        <React.Fragment>
            <Menu/>
            <h1 className="title">Flavors of the world</h1>
            <Container>
                <Row>
                    <Col><FormAcount/></Col>
                    <Col><Banner/></Col>
                </Row>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export { Login }