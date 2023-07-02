import styled from 'styled-components'

interface IHeader{
    bg:string,
}

export const LHeader = styled.header<IHeader>`
    background-color: ${(p)=> p.bg};
`