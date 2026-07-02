import React from 'react'
import styled from 'styled-components'
import { RowFlex, IconSvg, color } from '@stonly/design-system'
import ChevronLeftIcon from '@stonly/design-system/icons/ChevronLeft-16'
import GuideColorIcon from '@stonly/design-system/icons/Guide-color-32'
import ChecklistItemColorIcon from '@stonly/design-system/icons/ChecklistItem-color-16'

interface TopBarProps {
  guideTitle: string
  saveStatus?: string
}

const Wrap = styled(RowFlex)`
  width: 100%;
  height: 52px;
  min-height: 52px;
  background: #262144;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
`

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  opacity: 0.6;
  &:hover { opacity: 1; }
`

const GuideTitleText = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 560px;
`

const SaveStatusText = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
`

export const TopBar: React.FC<TopBarProps> = ({ guideTitle, saveStatus = 'Changes auto-saved · 4 minutes ago' }) => (
  <Wrap>
    <RowFlex alignItems="center" gap="12px">
      <BackButton>
        <IconSvg as={ChevronLeftIcon} color="#ffffff" />
      </BackButton>
      {React.createElement(GuideColorIcon as React.ComponentType<Record<string, unknown>>, { width: 32, height: 32 })}
      <GuideTitleText>{guideTitle}</GuideTitleText>
    </RowFlex>
    <RowFlex alignItems="center" gap="6px">
      <SaveStatusText>{saveStatus}</SaveStatusText>
      {React.createElement(ChecklistItemColorIcon as React.ComponentType<Record<string, unknown>>, { width: 16, height: 16 })}
    </RowFlex>
  </Wrap>
)
