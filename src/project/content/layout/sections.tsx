import { Box, Col, Container, Row, Section } from "../../../my-lib/layout"

const LayoutSections = () => {

  return (
    <>
      <Section bg="#EABCF5" p="20px" sx="text-align:center" color="white">
        Section
        <Container bg="#D0BAF5" pt="20px" pb="20px" mt="20px" mb="20px">
          Container
          <Row pt="10px" mb="20px">
            row
            <Col size={12} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-12</Col>
            <Col size={6} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-6</Col>
            <Col size={6} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-6</Col>
            <Col size={4} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-4</Col>
            <Col size={4} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-4</Col>
            <Col size={4} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-4</Col>
            <Col size={3} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-3</Col>
            <Col size={3} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-3</Col>
            <Col size={3} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-3</Col>
            <Col size={3} mt="10px" mb="10px" p="20px" bg="#f1cdf9">col-3</Col>
          </Row>
          Container
        </Container>
        Section
      </Section>
    </>
  )
}


export default LayoutSections