
import styled from 'styled-components'




interface IMenu {
  display: 'flex' | 'block',
}

interface IMenuItem {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  fs?: string,
  color?:string,
  letterSpacing?: string,
  mt?: number,
  mb?: number,
  ml?: number,
  mr?: number,
}

export const Menu = styled.ul<IMenu>`
  display: ${(props) => props.display};
  align-items:center;  
`
export const MenuItem = styled.li<IMenuItem>`
     margin:
     ${(p) => p.mt ?? 0}px
     ${(p) => p.mr ?? 0}px
     ${(p) => p.mb ?? 0}px
     ${(p) => p.ml ?? 0}px;
   font-size: ${(p) => p.fs};
   letter-spacing:${(p) => p.letterSpacing} ; 
   a{
    color: ${(p)=> p.color};
    text-decoration: none;
    text-Transform: ${(p) => p.textTransform};
   }
`