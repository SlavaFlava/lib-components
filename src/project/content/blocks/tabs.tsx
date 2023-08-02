import React, { useState } from 'react';
import { Tab, Tabs, TabsContent, TabsWrapper } from '../../../my-lib/blocks/tabs';

const BlocksTabs = () => {

  const [tabIndex, setTabIndex] = useState(0)

  const dataTabs = [
    {
      tab: 'tab 0',
      content: '0Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    },
    {
      tab: '1Lorem ipsum',
      content: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    },
    {
      tab: 'tab 2',
      content: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    },
    {
      tab: 'tab 3',
      content: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo qui ullam sapiente magnam ipsum nisi ut inventore veritatis iure veniam!'
    }
  ]

  return (
    <TabsWrapper maxW='600px'  m='55px auto' >
    <Tabs>
      {
        dataTabs.map((tab, index) => (
          index === tabIndex
            ?
            <Tab active='default' tabs='classic' mb='-1px'
              onClick={() => setTabIndex(index)}
              key={index}
            >{tab.tab}</Tab>
            :
            <Tab tabs='classic'
              onClick={() => setTabIndex(index)}
              key={index}
            >{tab.tab}</Tab>
        ))
      }
    </Tabs>
    {
      dataTabs.map((content, index) => (
        index === tabIndex
          ?
          <TabsContent bg='white' shadow='variant-1' p='20px' key={index}>
            {content.content}
          </TabsContent>
          :
          false
      ))
    }
  </TabsWrapper>
  )
}
export default BlocksTabs