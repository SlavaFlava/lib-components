import { useState } from 'react';
import { Tab, Tabs, TabsContent, TabsWrapper } from '../../../my-lib/blocks/tabs';


const Sections = () => {

  const [tabIndex, setTabIndex] = useState(0)
  const dataTabs = [
    {
      tab: 'tab 0',
      content: '   Lorem0000, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    },
    {
      tab: 'tab 1',
      content: '   Lorem1111, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    },
    {
      tab: 'tab 2',
      content: '   Lorem2222, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    },
    {
      tab: 'tab 3',
      content: '   Lorem3333, ipsum dolor sit amet consectetur adipisicing elit. Mollitia sunt ratione quiadignissimos, nobis eum facere id. Expedita, ea quos?'
    }
  ]

  return (
    <TabsWrapper mw='600px' m='auto' mt='35px' >
      <Tabs  fullW='true' >
        {
          dataTabs.map((tab, index) => (
            tabIndex === index 
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
          tabIndex === index
            ?
            <TabsContent bg='white' shadow='true' p='20px'  key={index}>
              {content.content}
            </TabsContent>
            :
            false
        ))
      }
    </TabsWrapper>
  )
}
export default Sections 