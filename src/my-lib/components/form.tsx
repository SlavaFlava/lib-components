import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IDisplay, IGlobal, IProportions } from '../models/global';


interface IInput extends InputHTMLAttributes<HTMLInputElement>, IGlobal , IDisplay,IProportions{
  br?: string,
  border?: string,
  fs?: string
  
  fw?:   '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
  ls?: string
  placeholder?: string

}

interface ITextarea extends IInput{

}

interface IForm extends IGlobal,IDisplay,IProportions{ 
  shadowcolor?: string,
  shadow?: string,
  br?: string,
  border?: string,
  

}


export const Input = styled.input<IInput>`
align-items: ${(p) => p.alignitems ?? 'center'};
display: ${(p) => p.display ?? 'flex'};
flex-direction: ${(p) => p.flexDirection ?? 'column'};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content:${(p) => p.justifyContent};
outline: none;
font-weight: ${(p) => p.fw} ;
letter-spacing: ${(p) => p.ls};
height: ${(p) => p.h};
width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
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
align-items: ${(p) => p.alignitems};
display: ${(p) => p.display};
flex-direction: ${(p) => p.flexDirection};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content:${(p) => p.justifyContent};
height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
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
display: ${(p) => p.display};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};
justify-content: ${(p) => p.justifyContent};
align-items: ${(p) => p.alignitems};
height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
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
