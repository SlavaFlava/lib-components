import React from 'react';
import { Box, Container } from '../../../my-lib/layout';
import { Form, Input, Select, Textarea } from '../../../my-lib/components/form';
import { Button } from '../../../my-lib/components/buttons';


const Components = () => {
  return (
    <Container mt='35px'>
      <Form maxW='600px' m='auto' shadow='true' shadowcolor='blue' br='6px' p='30px'>
        <Box display='flex'>
          <Input type='text' w={'49%'} placeholder='Fill name' />
          <Input type='text' w={'49%'} placeholder='Fill last name' />
        </Box>
        <Input type='email' placeholder='Fill email' />
        <Textarea placeholder='Message' h='100px' />
        <Button type='submit' p='10px 70px' mt='20px' hover={'reverseBorder'}>Send</Button>
        <Select>
        <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="opel">Opel</option>
         <option value="audi">Audi</option>
        </Select>
        <select id="cars">
         <option value="volvo">Volvo</option>
         <option value="saab">Saab</option>
         <option value="opel">Opel</option>
         <option value="audi">Audi</option>
        </select>
      </Form>
    </Container>
  )
}
export default Components  