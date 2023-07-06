
import styled from 'styled-components'
import { IGlobal } from '../models/global'




interface IMenu {
  display?: 'flex' | 'block',
}

interface IMenuItem extends IGlobal {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  fs?: string,
  letterSpacing?: string,
}

export const Menu = styled.ul<IMenu>`
  display: ${(props) => props.display};
  align-items:center;  
`
export const MenuItem = styled.li<IMenuItem>`
     margin:
     ${(p) => p.mt ?? 0}
     ${(p) => p.mr ?? '20px'}
     ${(p) => p.mb ?? 0}
     ${(p) => p.ml ?? 0};
   font-size: ${(p) => p.fs};
   letter-spacing:${(p) => p.letterSpacing}; 
   text-Transform: ${(p) => p.textTransform};
   a{
    color: ${(p)=> p.color};
    text-decoration: none;
    text-Transform: ${(p) => p.textTransform};
   }
`