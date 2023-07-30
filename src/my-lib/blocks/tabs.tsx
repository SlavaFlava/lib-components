import styled from 'styled-components'
import { IDisplay, IGlobal, IProportions } from '../models/global'




interface ITabsWrapper extends IGlobal,IDisplay,IProportions {
  shadowcolor?: string,
  shadow?: string,
  br?: string,
  border?: string,
}

interface ITabs extends ITabsWrapper {

  fullW?: 'default' | string,
}

interface ITab extends IGlobal {
  tabs?: 'underline' | 'classic' | 'modern',
  active?: string,
}


interface ITabsContent extends ITabsWrapper {
  shadowcolor?: string,
  shadow?: string,
  br?: string,
  border?: string,
}


export const TabsWrapper = styled.section<ITabsWrapper>`
 display: ${(p) => p.display};
 flex-wrap: ${(p) => p.flexWrap};
 justify-content: ${(p) => p.justifyContent};
 align-items: ${(p) => p.alignitems};
 flex-direction: ${(p) => p.flexDirection};
 height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
  border-radius: ${(p) => p.br};
  border:${(p) => p.border}; 
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p};
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
export const Tabs = styled.ul<ITabs>`
  display: ${(p) => p.display ?? 'flex'};
  flex-wrap: ${(p) => p.flexWrap};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};
  border-radius: ${(p) => p.br};
border:${(p) => p.border};
box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
    color: ${(p) => p.color};
    background: ${(p) => p.bg};
    padding: ${(p) => p.p};
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
    li{
      ${(p) => p.fullW ? 'flex: 1 1 auto' : false};
    }

`
export const Tab = styled.li<ITab>`
    cursor: pointer;
    ${(p) => p.tabs === 'classic' ? `
      padding: 15px 20px;
      background: #eee;
      text-align: center;
      ${p.active === 'default' ? 'background:#ccc ' : p.active}
    ` : false};

      ${(p) => p.tabs === 'underline' ? `
      padding: 15px 20px;
      border-bottom: 2px solid red;
      text-align: center;
      ${p.active === 'default' ? 'background:#ccc ' : p.active}
    ` : false};
    color: ${(p) => p.color};
    background: ${(p) => p.bg};
    padding: ${(p) => p.p};
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


export const TabsContent = styled.div<ITabsContent>`
    display: ${(p) => p.display};
    flex-wrap: ${(p) => p.flexWrap};
    justify-content: ${(p) => p.justifyContent};
    align-items: ${(p) => p.alignitems};
    flex-direction: ${(p) => p.flexDirection};
    height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
    box-shadow: ${(p) => p.shadow ? `0px 0px 7px 0px ${p.shadowcolor ?? 'grey'}` : false};
    border-radius: ${(p) => p.br};
    border:${(p) => p.border}; 
    color: ${(p) => p.color};
    background: ${(p) => p.bg};
    padding: ${(p) => p.p};
    padding-top: ${(p) => p.pt};
    padding-bottom: ${(p) => p.pb};
    padding-left: ${(p) => p.pl};
    padding-right: ${(p) => p.pr};
    margin-top: ${(p) => p.mt};
    margin-bottom: ${(p) => p.mb};
    margin-left: ${(p) => p.ml};
    margin-right: ${(p) => p.mr};
    ${(p) => p.sx};

`



