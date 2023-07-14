import styled from 'styled-components'
import { IGlobal } from '../models/global'


interface IButton extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
  fs?: string,
  fw?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  minHeight?: string
  minWidth?: string
  opacity?: number
  ls?: string,
  br?: string,
  border?: string,
  shadow?: boolean,
  shadowColor?: string,
  boxShadow?: string,
  hover?: 'reverse' | 'reverseBorder' | 'opacity'
  textTransform?: 'uppercase' | 'lowercase' | 'capitalise' | 'unset'
}


interface BtnLink extends IButton {
  textDecoration?: 'underline' | 'line-through' | 'overline' | 'none'
}


export const Button = styled.button<IButton>`
  cursor: pointer;
  opacity: ${(p) => p.display ?? 1};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  align-items: ${(p) => p.alignItems ?? 'center'};
  border-style: none;
  border-radius: ${(p) => p.br ?? '5px'};
  border: ${(p) => p.border ?? `1px solid ${p.bg ?? '#8696FE'}`};
  font-size: ${(p) => p.fs ?? '14px'} ;
  font-weight: ${(p) => p.fw} ;
  min-height: ${(p) => p.minHeight};
  min-width: ${(p) => p.minWidth};
  outline: none;
  transition: all .3s;
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? p.bg ?? '#8696FE'}` : false};
  color: ${(p) => p.color ?? 'white'};
  background: ${(p) => p.bg ?? '#8696FE'};
  padding: ${(p) => p.p ?? '10px 15px'};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
${(p)=> p.sx};
  padding-top: ${(p) => p.pt};
   &:hover {
    background-color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder' ? p.color ?? 'white' : false};
    color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder' ? p.bg ?? '#8696FE' : false};
    border: ${(p) => p.hover == 'reverse' ? `1px solid ${p.color ?? 'white'}` : false};
    box-shadow:none;
    opacity: ${(p) => p.hover == 'opacity' ? 0.7 : false};
   }
`


export const BtnLink = styled.a<BtnLink>`
  
  cursor: pointer;
  text-transform: ${(p) => p.textTransform};
  text-decoration: ${(p) => p.textDecoration ?? 'none'};
  opacity: ${(p) => p.display ?? 1};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  align-items: ${(p) => p.alignItems ?? 'center'};
  border-style: none;
  border-radius: ${(p) => p.br ?? '5px'};
  border: ${(p) => p.border ?? `1px solid ${p.bg ?? '#8696FE'}`};
  font-size: ${(p) => p.fs ?? '14px'} ;
  font-weight: ${(p) => p.fw} ;
  min-height: ${(p) => p.minHeight};
  min-width: ${(p) => p.minWidth};
  outline: none;
  transition: all .3s;
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? p.bg ?? '#8696FE'}` : false};
  color: ${(p) => p.color ?? 'white'};
  background: ${(p) => p.bg ?? '#8696FE'};
  padding: ${(p) => p.p ?? '10px 15px'};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
${(p)=> p.sx};
  padding-top: ${(p) => p.pt};
   &:hover {
    background-color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder' ? p.color ?? 'white' : false};
    color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder' ? p.bg ?? '#8696FE' : false};
    border: ${(p) => p.hover == 'reverse' ? `1px solid ${p.color ?? 'white'}` : false};
    box-shadow:none;
    opacity: ${(p) => p.hover == 'opacity' ? 0.7 : false};
   }
`