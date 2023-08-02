import styled from 'styled-components'
import { IGlobal } from '../models/global'

interface IList extends IGlobal{
 shadow?: string
}
interface IListItem extends IGlobal{
 content?:string
}

export const List = styled.ul`
 padding-left: 15px;
`
export const ListItem = styled.li<IListItem>`
 position: relative;
 display: flex;
 align-items: center;
 &::before{
  position: absolute;
  content: '';
  left: 0;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
 }
`