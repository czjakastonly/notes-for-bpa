import React, { useState } from 'react'
import styled from 'styled-components'
import { TopBar } from './components/TopBar'
import { BottomBar } from './components/BottomBar'
import { TreePanel, Step } from './components/TreePanel'
import { StepEditPanel } from './components/StepEditPanel'
import { PreviewPanel } from './components/PreviewPanel'

type TabId = 'editor' | 'insights' | 'versions'

const STEPS: Step[] = [
  { id: '1', title: 'An introduction to Stonly guides' },
  { id: '2', title: 'Creating a new guide' },
  { id: '3', title: 'Name your guide' },
  { id: '4', title: 'Overview of the guide editor' },
  { id: '5', title: 'Content options in practice' },
  { id: '6', title: 'Tips and tricks' },
]

const CONTENT_BODY = 'Guides are the foundation for everything you make in Stonly.'

const Root = styled.div`
  width: 1440px;
  height: 100vh;
  min-height: 1024px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
`

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  gap: 0;
`

const App: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState('1')
  const [activeTab, setActiveTab] = useState<TabId>('editor')

  const activeStep = STEPS.find(s => s.id === activeStepId) ?? STEPS[0]

  return (
    <Root>
      <TopBar guideTitle="Create your first Stonly guide" />
      <BottomBar activeTab={activeTab} onTabChange={setActiveTab} />
      <ContentArea>
        <TreePanel
          steps={STEPS}
          activeStepId={activeStepId}
          onStepClick={setActiveStepId}
        />
        <StepEditPanel
          stepTitle={activeStep.title}
          contentBody={CONTENT_BODY}
        />
        <PreviewPanel
          stepTitle={activeStep.title}
          stepBody={CONTENT_BODY}
        />
      </ContentArea>
    </Root>
  )
}

export default App
