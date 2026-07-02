import React from 'react'
import styled from 'styled-components'
import { RowFlex, ColumnFlex, IconSvg, color } from '@stonly/design-system'
import EnlargeIcon from '@stonly/design-system/icons/Enlarge-16'
import OpenIcon from '@stonly/design-system/icons/Open-16'
import ChevronRightIcon from '@stonly/design-system/icons/ChevronRight-12'
import TriangleDownIcon from '@stonly/design-system/icons/TriangleArrowDown-12'

interface PreviewPanelProps {
  stepTitle: string
  stepBody: string
}

const Wrap = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-left: 1px solid #e7e7e7;
  padding: 24px 24px;
  overflow-y: auto;
  position: relative;
`

const CollapseButton = styled.button`
  position: absolute;
  left: -1px;
  top: 24px;
  width: 18px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f8f9;
  border: 1px solid #e7e7e7;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &:hover { background: #f0f0f2; }
`

const PreviewCard = styled.div`
  width: 100%;
  max-width: 390px;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.08);
  overflow: hidden;
  background: #ffffff;
`

const PreviewTopBar = styled(RowFlex)`
  height: 48px;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
`

const WidgetSelector = styled(RowFlex)`
  align-items: center;
  gap: 4px;
  cursor: pointer;
`

const WidgetLabel = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #515358;
`

const PreviewIcons = styled(RowFlex)`
  gap: 16px;
  align-items: center;
`

const PreviewIconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  opacity: 0.7;
  &:hover { opacity: 1; }
`

const StepContent = styled(ColumnFlex)`
  padding: 32px 35px;
  gap: 32px;
`

const PreviewTitle = styled.h2`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.56px;
  color: #26282e;
  margin: 0;
`

const PreviewBody = styled.p`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #474459;
  margin: 0;
  margin-top: 12px;
`

const FormInputMock = styled.div`
  height: 40px;
  width: 100%;
  border: 1px solid #c1c0cb;
  border-radius: 4px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #848296;
`

const FormInputLabel = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #474459;
  display: block;
  margin-bottom: 4px;
`

const FormField = styled(ColumnFlex)`
  gap: 0;
`

const NextButton = styled.button`
  background: transparent;
  border: 1px solid #ff809e;
  border-radius: 88px;
  padding: 12px 24px;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ff809e;
  cursor: pointer;
  align-self: flex-start;
  &:hover { background: rgba(255, 128, 158, 0.05); }
`

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ stepTitle, stepBody }) => (
  <Wrap>
    <CollapseButton title="Collapse preview">
      <IconSvg as={ChevronRightIcon} color="#706d84" />
    </CollapseButton>
    <PreviewCard>
      <PreviewTopBar>
        <WidgetSelector>
          <WidgetLabel>Widget</WidgetLabel>
          <IconSvg as={TriangleDownIcon} color="#515358" />
        </WidgetSelector>
        <PreviewIcons>
          <PreviewIconBtn title="Enlarge">
            <IconSvg as={EnlargeIcon} color={color.iconDefault} />
          </PreviewIconBtn>
          <PreviewIconBtn title="Open">
            <IconSvg as={OpenIcon} color={color.iconDefault} />
          </PreviewIconBtn>
        </PreviewIcons>
      </PreviewTopBar>

      <StepContent>
        <div>
          <PreviewTitle>{stepTitle}</PreviewTitle>
          <PreviewBody>{stepBody}</PreviewBody>
        </div>

        <ColumnFlex gap={2}>
          <FormField>
            <FormInputLabel>Name</FormInputLabel>
            <FormInputMock>Your name</FormInputMock>
          </FormField>
          <FormField>
            <FormInputLabel>Country</FormInputLabel>
            <FormInputMock>Please enter text</FormInputMock>
          </FormField>
        </ColumnFlex>

        <NextButton>Next</NextButton>
      </StepContent>
    </PreviewCard>
  </Wrap>
)
