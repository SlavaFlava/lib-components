import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface IInput extends InputHTMLAttributes<HTMLInputElement>, IGlobal {
  br?: string,
  border?: string,
  fs?: string
  w?: string
  fw?:   '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  ls?: string
  placeholder?: string
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root',
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start',
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right',
  flexDirection?: 'column' | 'row' | 'column-reverse' | 'row-reverse',
}

interface ITextarea extends IInput{
  h?: string
  minH?: string
}

interface IForm extends IGlobal{ 
  shadowcolor?: string,
  shadow?: string,
  br?: string,
  border?: string,
  w?: string
  maxW?: string
}


export const Input = styled.input<IInput>`
align-items: ${(p) => p.alignitems};
display: ${(p) => p.display ?? 'flex'};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
justify-content:${(p) => p.justifyContent ?? 'space-between'};
outline: none;
font-weight: ${(p) => p.fw} ;
letter-spacing: ${(p) => p.ls};
width: ${(p) => p.w ?? '100%'};
font-size: ${(p) => p.fs};
border:${(p) => p.border ?? '1px solid #ccc'};
border-radius: ${(p) => p.br};
color: ${(p) => p.color};
background: ${(p) => p.bg};
padding: ${(p) => p.p ?? '12px 14px'};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '10px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
& ::placeholder{
  color: ${(p) => p.placeholder ?? '#ccc'}

}
`;
export const Textarea = styled.textarea<ITextarea>`
outline: none;
resize: none;
width: ${(p) => p.w ?? '100%'};
height: ${(p) => p.h};
min-height: ${(p) => p.minH};
font-weight: ${(p) => p.fw} ;
letter-spacing: ${(p) => p.ls};
font-size: ${(p) => p.fs};
border:${(p) => p.border ?? '1px solid #ccc'};
border-radius: ${(p) => p.br};
color: ${(p) => p.color};
background: ${(p) => p.bg};
padding: ${(p) => p.p ?? '8px 12px'};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '10px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
& ::placeholder{
  color: ${(p) => p.placeholder ?? '#ccc'}

}
`;

export const Form = styled.form<IForm>`
width: ${(p) => p.w};
max-width : ${(p) => p.maxW};
border-radius: ${(p) => p.br};
border:${(p) => p.border};
box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey' }` : false};
padding: ${(p) => p.p ?? '12px 14px'};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb ?? '10px'};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx};
`
