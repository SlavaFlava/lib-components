import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IBorder, IDisplay, IFonts, IGlobal, IProportions } from '../models/global';


interface IInput extends InputHTMLAttributes<HTMLInputElement>, IDisplay, IProportions, IFonts, IBorder, IGlobal {
  placeholderColor?: string
}

interface ITextarea extends IInput{

}

interface IForm extends  IDisplay, IProportions, IBorder, IGlobal{

}

export const Input = styled.input<IInput>`
  outline: none;

  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems ?? 'center'};
  flex-wrap: ${(p) => p.flexWrap};
  flex-direction: ${(p) => p.flexDirection};

  height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.textTransform}; 

  border:${(p) => p.border?? '1px solid #ccc'};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };
  box-shadow:${(p) => p.customShadow};  

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
  &::placeholder{
    color:${(p) => p.placeholderColor ?? '#ccc'};
  }
`;

export const Textarea = styled.textarea<ITextarea>`
  outline: none;
  resize: none;

  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-wrap: ${(p) => p.flexWrap};
  flex-direction: ${(p) => p.flexDirection};

  height: ${(p) => p.h ?? '150px'};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.textTransform};

  border:${(p) => p.border ?? '1px solid #ccc'};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };
  box-shadow:${(p) => p.customShadow};  

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
  &::placeholder{
    color:${(p) => p.placeholderColor ?? '#ccc'};
  }
`;

export const Form = styled.form<IForm>`
display: ${(p) => p.display};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems};
flex-wrap: ${(p) => p.flexWrap};
flex-direction: ${(p) => p.flexDirection};

height: ${(p) => p.h};
width: ${(p) => p.w};
min-height: ${(p) => p.minH};
min-width: ${(p) => p.minW};
max-height: ${(p) => p.maxH};
max-width: ${(p) => p.maxW};

border:${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };
  box-shadow:${(p) => p.customShadow};  

color: ${(p) => p.color};
background: ${(p) => p.bg};
padding: ${(p) => p.p ?? '8px 12px'};
padding-top: ${(p) => p.pt};
padding-bottom: ${(p) => p.pb};
padding-left: ${(p) => p.pl};
padding-right: ${(p) => p.pr};
margin: ${(p) => p.m};
margin-top: ${(p) => p.mt};
margin-bottom: ${(p) => p.mb};
margin-left: ${(p) => p.ml};
margin-right: ${(p) => p.mr};
${(p) => p.sx}; 
`