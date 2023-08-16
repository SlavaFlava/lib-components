import { Button } from "../../../my-lib/components/buttons"
import { Separate } from "../../../my-lib/components/separate"
import { H5, H6, P } from "../../../my-lib/components/typography"
import { Box, Row } from "../../../my-lib/layout"

const ComponentsButtons = () => {

  return (
    <>
      <Row mb="20px" justifycontent='flex-start' alignitems="center">
        <Button mr="20px">Default</Button>
        <H6>Default Button</H6>
      </Row>
      <Row mb="20px" justifycontent='flex-start' alignitems="center">
        <Button mr="20px">Default-hover</Button>
        <Button hover='opacity' mr="20px">Default-opacity</Button>
        <Button hover='reverse' mr="20px">Default-reverce</Button>
        <Button hover='reverseBorder' mr="20px">Default-reverseBorder</Button>
        <H6>Hover examples</H6>
      </Row>
      <Separate />
      <Row mb="20px" justifycontent='flex-start' alignitems="center">
        <Button mr="20px" hover='reverseBorder' bg="black" textTransform="uppercase" ls="1px" p="20px" fs="18px" minW="300px">Custom-1</Button>
        <Button mr="20px" hover='reverseBorder' bg="orange" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-1'>Custom-2</Button>
        <Button mr="20px" bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6">Custom-3</Button>
        <H6>Custom buttons examples</H6>
      </Row>
      <Separate />
      <Row mb="20px" justifycontent='flex-start' alignitems="center">
        <Button mr="20px" hover='reverseBorder' bg="black" textTransform="uppercase" ls="1px" p="20px" fs="18px" minW="300px">Custom-1</Button>
        <Box bg="#FBDDFF" p="14px 20px" color="#655DBB">
          <P ls="0.4px" lh='1.6' fw="500">hover='reverseBorder' bg="black" textTransform="uppercase" ls="1px" p="20px" fs="18px" minW="300px"</P>
        </Box>
      </Row>
      <Row mb="20px" justifycontent='flex-start' alignitems="center">
        <Button mr="20px" hover='reverseBorder' bg="orange" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-1'>Custom-2</Button>
        <Box bg="#FBDDFF" p="14px 20px" color="#655DBB">
          <P ls="0.4px" lh='1.6' fw="500">hover='reverseBorder' bg="orange" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-1'</P>
        </Box>
      </Row>
      <Row mb="20px" justifycontent='flex-start' alignitems="center">
        <Button mr="20px" bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6">Custom-3</Button>
        <Box bg="#FBDDFF" p="14px 20px" color="#655DBB">
          <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
        </Box>
      </Row>

    </>
  )
}
export default ComponentsButtons