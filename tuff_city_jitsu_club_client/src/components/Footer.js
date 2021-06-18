import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "orange", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Tuff City Jitsu Club: Teaching practical self defence in Tofino
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            // How to include mailto links here?
            <FooterLink href="#">Club Email</FooterLink>
            <FooterLink href="#">David</FooterLink>
            <FooterLink href="#">Seumas</FooterLink>
          </Column>
          <Column>
            <Heading>Facebook</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Tuff City
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Jitsu Canada
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Jiu Jitsu Foundation (UK style)
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;