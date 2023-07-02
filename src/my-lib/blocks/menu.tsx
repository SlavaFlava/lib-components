import { queryAllByDisplayValue } from '@testing-library/react'
import styled from 'styled-components'

export const Menu = styled.ul`
  display:flex;
  align-items:center;  
`
export const MenuItem = styled.li`
   margin-left:20px;
   font-size: 16px;
   letter-spacing: 1px;
   &:first-child{
    margin-left:0;
   } 
   a{
    text-decoration:none;
    text-transform:uppercase;
   }
`