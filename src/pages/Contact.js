import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { FormContact } from "../components/FormContact";
import { IconsContact } from "../components/IconsContact";
import { Menu } from "../components/Menu";

function Contact(){
    return(
        <React.Fragment>
            <Menu/>
            <Container>
                <IconsContact/>
                <Row>
                    <Col><FormContact/></Col>
                    <Col><Banner/></Col>
                </Row>
            </Container>
            {/* <Footer/> */}
        </React.Fragment>
    );
}

export { Contact }
