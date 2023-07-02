import styled from 'styled-components'
import { IGlobal } from '../models/global'

interface IAvatar extends IGlobal {
  br?: string,
  shadow?: boolean,
  shadowColor?: string,
  size?:number,
}



export const Avatar = styled.div<IAvatar>`
width: ${(p)=> p.size ?? 50}px;
height: ${(p)=> p.size ?? 50}px;
border-radius: ${(p)=> p.br ?? '50%'};
overflow: hidden;
display: 'flex';
align-items:'center';
justify-content:'center';
background: ${(p) => p.bg};
box-shadow: ${(p) => p.shadow
    ?
    `0px 0px 9px ${p.shadowColor ?? 'grey'} `
    :
    false};
`

export const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
  ` 
