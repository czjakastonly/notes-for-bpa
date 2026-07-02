import React from 'react'
import styled from 'styled-components'
import { RowFlex, ColumnFlex, IconSvg, color } from '@stonly/design-system'
import SearchIcon from '@stonly/design-system/icons/Search-16'
import PlusIcon from '@stonly/design-system/icons/Plus-16'

export interface Step {
  id: string
  title: string
}

interface TreePanelProps {
  steps: Step[]
  activeStepId: string
  onStepClick: (id: string) => void
}

const Wrap = styled.div`
  width: 319px;
  min-width: 319px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f8f9;
  border-right: 1px solid #e7e7e7;
  overflow: hidden;
`

const SearchContainer = styled(RowFlex)`
  width: 100%;
  height: 56px;
  min-height: 56px;
  padding: 16px 24px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-bottom: 1px solid #e7e7e7;
`

const SearchPlaceholder = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13.98px;
  font-weight: 400;
  line-height: 24px;
  color: #bfc1c6;
`

const TreeList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
`

const StepItem = styled.button<{ $active: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background: ${({ $active }) => ($active ? 'rgba(211,213,218,0.2)' : 'transparent')};
  cursor: pointer;
  text-align: left;
  &:hover {
    background: rgba(211, 213, 218, 0.15);
  }
`

const StepDot = styled.div<{ $active: boolean }>`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $active }) => ($active ? '#18c98e' : '#706d84')};
  margin: 0 6px;
`

const StepTitle = styled.span<{ $active: boolean }>`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13.98px;
  font-weight: ${({ $active }) => ($active ? '500' : '400')};
  line-height: 24px;
  color: ${({ $active }) => ($active ? '#26282e' : '#474459')};
  flex: 1;
`

const AddStepPanel = styled(RowFlex)`
  flex-shrink: 0;
  height: 56px;
  padding: 0 24px;
  align-items: center;
  border-top: 1px solid #e7e7e7;
`

const AddStepButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13.96px;
  font-weight: 500;
  color: #5d6169;
  &:hover { color: #26282e; }
`

export const TreePanel: React.FC<TreePanelProps> = ({ steps, activeStepId, onStepClick }) => (
  <Wrap>
    <SearchContainer>
      <IconSvg as={SearchIcon} color="#bfc1c6" />
      <SearchPlaceholder>Search for step</SearchPlaceholder>
    </SearchContainer>

    <TreeList>
      {steps.map(step => (
        <StepItem
          key={step.id}
          $active={step.id === activeStepId}
          onClick={() => onStepClick(step.id)}
        >
          <StepDot $active={step.id === activeStepId} />
          <StepTitle $active={step.id === activeStepId}>{step.title}</StepTitle>
        </StepItem>
      ))}
    </TreeList>

    <AddStepPanel>
      <AddStepButton>
        <IconSvg as={PlusIcon} color="#5d6169" />
        Add next step
      </AddStepButton>
    </AddStepPanel>
  </Wrap>
)
