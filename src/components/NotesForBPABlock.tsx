import React, { useState } from 'react'
import styled from 'styled-components'
import { RowFlex, IconSvg, color } from '@stonly/design-system'
import DeleteIcon from '@stonly/design-system/icons/Delete-16'
import AI24Icon from '@stonly/design-system/icons/AI-24'

interface NotesForBPABlockProps {
  onDelete: () => void
}

const Wrap = styled(RowFlex)`
  width: 100%;
  height: 56px;
  align-items: center;
  flex-shrink: 0;
`

const AccentStrip = styled.div`
  width: 18px;
  min-width: 18px;
  height: 56px;
  background: #8d83d2;
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 2px;
  flex-shrink: 0;
`

const TextArea = styled(RowFlex)<{ $isHovered: boolean }>`
  flex: 1;
  height: 56px;
  align-items: center;
  padding: 0 12px;
  background: #e8e6f8;
  border-radius: 0 4px 4px 0;
  justify-content: space-between;
  gap: 8px;
`

const NoteInput = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${color.textDefault};
  padding: 0;
  ::placeholder {
    color: ${color.textPlaceholder};
  }
`

const DeleteBtn = styled.button<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  flex-shrink: 0;
  &:hover {
    background: rgba(38, 33, 68, 0.08);
  }
`

export const NotesForBPABlock: React.FC<NotesForBPABlockProps> = ({ onDelete }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Wrap
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AccentStrip>
        <IconSvg
          as={AI24Icon}
          color={color.textDefaultInverse}
          style={{ width: 14, height: 14, flexShrink: 0 }}
        />
      </AccentStrip>
      <TextArea $isHovered={isHovered}>
        <NoteInput
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Write a private note for BPA execution at this step..."
          rows={1}
        />
        <DeleteBtn $visible={isHovered} onClick={onDelete} title="Delete note">
          <IconSvg as={DeleteIcon} color={color.iconDefault} />
        </DeleteBtn>
      </TextArea>
    </Wrap>
  )
}
