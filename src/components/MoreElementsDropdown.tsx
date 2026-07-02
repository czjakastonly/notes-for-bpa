import React from 'react'
import styled from 'styled-components'
import { RowFlex, ColumnFlex, IconSvg, color } from '@stonly/design-system'
import ChevronRightIcon from '@stonly/design-system/icons/ChevronRight-16'
import VariableIcon from '@stonly/design-system/icons/Variable-16'
import SnippetIcon from '@stonly/design-system/icons/Snippet-16'
import TableIcon from '@stonly/design-system/icons/Table-16'
import ConditionalSectionIcon from '@stonly/design-system/icons/ConditionalSection-16'
import ContentIcon from '@stonly/design-system/icons/Content-16'
import FileIcon from '@stonly/design-system/icons/File-16'
import NoteIcon from '@stonly/design-system/icons/Note-16'
import InputIcon from '@stonly/design-system/icons/Input-16'
import GlossaryIcon from '@stonly/design-system/icons/Glossary-16'
import AiNotes16 from '../assets/icons/AiNotes16'

interface MoreElementsDropdownProps {
  notesForBPADisabled?: boolean
  onSelectNotesForBPA: () => void
  anchorTop?: number
  anchorRight?: number
}

const Panel = styled.div<{ $top?: number; $right?: number }>`
  position: ${({ $top }) => ($top != null ? 'fixed' : 'absolute')};
  top: ${({ $top }) => ($top != null ? `${$top}px` : 'calc(100% + 4px)')};
  right: ${({ $right }) => ($right != null ? `${$right}px` : '0')};
  width: 256px;
  background: ${color.backgroundDefault};
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  overflow: hidden;
`

const Section = styled(ColumnFlex)`
  padding: 8px;
`

const SectionHeading = styled.div`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${color.textSubtle};
  text-transform: uppercase;
  padding: 12px 12px 8px;
`

const ItemRow = styled(RowFlex)<{ $disabled?: boolean }>`
  height: 36px;
  align-items: center;
  padding: 8px 16px 8px 12px;
  gap: 8px;
  border-radius: 4px;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};

  &:hover {
    background: ${({ $disabled }) =>
      $disabled ? 'transparent' : 'rgba(38, 33, 68, 0.04)'};
  }
`

const ItemLabel = styled.span<{ $active?: boolean }>`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ $active }) => ($active ? color.textDark : color.textDefault)};
  flex: 1;
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${color.borderSubtle};
`

const CountSection = styled(ColumnFlex)`
  padding: 8px;
  gap: 0;
`

const CountRow = styled(RowFlex)`
  padding: 8px 12px;
  gap: 8px;
  align-items: baseline;
`

const CountValue = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${color.textDark};
`

const CountUnit = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${color.textSubtle};
  text-transform: uppercase;
`

interface Item {
  icon: React.ReactNode
  label: string
  hasArrow?: boolean
  disabled?: boolean
  onClick?: () => void
}

export const MoreElementsDropdown: React.FC<MoreElementsDropdownProps> = ({
  notesForBPADisabled = false,
  onSelectNotesForBPA,
  anchorTop,
  anchorRight,
}) => {
  const items: Item[] = [
    {
      icon: <IconSvg as={VariableIcon} color={color.iconDefault} />,
      label: 'Variables',
      hasArrow: true,
    },
    {
      icon: <IconSvg as={SnippetIcon} color={color.iconDefault} />,
      label: 'Content snippet',
      hasArrow: true,
    },
    {
      icon: <IconSvg as={TableIcon} color={color.iconDefault} />,
      label: 'Table',
      hasArrow: true,
    },
    {
      icon: <IconSvg as={ConditionalSectionIcon} color={color.iconDefault} />,
      label: 'Conditional section',
    },
    {
      icon: <IconSvg as={ContentIcon} color={color.iconDefault} />,
      label: 'Content Summary',
    },
    {
      icon: <IconSvg as={FileIcon} color={color.iconDefault} />,
      label: 'Attachment',
    },
    {
      icon: <IconSvg as={NoteIcon} color={color.iconDefault} />,
      label: 'Internal note',
    },
    {
      icon: (
        <IconSvg
          as={AiNotes16 as React.ComponentType<React.SVGProps<SVGSVGElement>>}
          color={notesForBPADisabled ? color.iconSubtle : color.iconDefault}
          style={{ width: 16, height: 16 }}
        />
      ),
      label: 'Notes for BPA',
      disabled: notesForBPADisabled,
      onClick: notesForBPADisabled ? undefined : onSelectNotesForBPA,
    },
    {
      icon: <IconSvg as={InputIcon} color={color.iconDefault} />,
      label: 'Input',
      hasArrow: true,
    },
    {
      icon: <IconSvg as={GlossaryIcon} color={color.iconDefault} />,
      label: 'Glossary term',
      hasArrow: true,
    },
  ]

  return (
    <Panel $top={anchorTop} $right={anchorRight}>
      <Section>
        <SectionHeading>More elements</SectionHeading>
        {items.map(item => (
          <ItemRow
            key={item.label}
            $disabled={item.disabled}
            onClick={item.disabled ? undefined : item.onClick}
          >
            {item.icon}
            <ItemLabel>{item.label}</ItemLabel>
            {item.hasArrow && (
              <IconSvg as={ChevronRightIcon} color={color.iconDefault} />
            )}
          </ItemRow>
        ))}
      </Section>
      <Divider />
      <CountSection>
        <SectionHeading>Character count</SectionHeading>
        <CountRow>
          <CountValue>120</CountValue>
          <CountUnit>Chars</CountUnit>
          <CountValue>10</CountValue>
          <CountUnit>Words</CountUnit>
        </CountRow>
      </CountSection>
    </Panel>
  )
}
