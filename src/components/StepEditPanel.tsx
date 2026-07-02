import React from 'react'
import styled from 'styled-components'
import { RowFlex, ColumnFlex, IconSvg, color } from '@stonly/design-system'
import CopyIcon from '@stonly/design-system/icons/Copy-16'
import DeleteIcon from '@stonly/design-system/icons/Delete-16'
import TagIcon from '@stonly/design-system/icons/Tag-16'
import ChatIcon from '@stonly/design-system/icons/Chat-16'
import TextOptionsIcon from '@stonly/design-system/icons/TextOptions-16'
import TextAlignLeftIcon from '@stonly/design-system/icons/TextAlignLeft-16'
import BulletListIcon from '@stonly/design-system/icons/BulletList-16'
import LinkIcon from '@stonly/design-system/icons/Link-16'
import ImageIcon from '@stonly/design-system/icons/Image-16'
import TipIcon from '@stonly/design-system/icons/Tip-16'
import WarningIcon from '@stonly/design-system/icons/Warning-16'
import QuoteIcon from '@stonly/design-system/icons/Quote-16'
import CodeBlockIcon from '@stonly/design-system/icons/CodeBlock-16'
import SeparatorIcon from '@stonly/design-system/icons/Separator-16'
import MoreIcon from '@stonly/design-system/icons/More-16'
import HelpIcon from '@stonly/design-system/icons/Help-16'
import Set1StIcon from '@stonly/design-system/icons/Set1St-16'
import PlusIcon from '@stonly/design-system/icons/Plus-16'
import ChevronRightIcon from '@stonly/design-system/icons/ChevronRight-16'

import dataTransmissionUrl from '../assets/icons/data-transmission-16.png'
import collapseSectionUrl from '../assets/icons/collapse-section-16.png'
import ttHeadingUrl from '../assets/icons/tt-heading-16.png'
import inputFieldTypeUrl from '../assets/icons/input-field-type-16.png'
import triangleDownUrl from '../assets/icons/triangle-down-12.png'

interface StepEditPanelProps {
  stepTitle: string
  contentBody: string
}

const Wrap = styled.div`
  width: 667px;
  min-width: 667px;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow-y: auto;
  padding-top: 40px;
`

/* ─── Step actions row ─────────────────────────────── */
const StepActionsRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 48px;
  align-items: center;
  justify-content: space-between;
  min-height: 28px;
`

const ActionsPill = styled.div`
  display: flex;
  flex-direction: row;
  height: 28px;
  padding: 0 12px;
  gap: 16px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 16px;
`

const TagsPill = styled.div`
  display: flex;
  flex-direction: row;
  height: 28px;
  padding: 0 12px;
  gap: 12px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e3e5e9;
  border-radius: 88px;
`

const TagBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e3e5e9;
  border-radius: 8px;
  min-width: 16px;
  height: 15px;
  padding: 0 4px;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  color: #474459;
`

const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.75;
  &:hover { opacity: 1; }
`

const TagBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

/* ─── Step title ───────────────────────────────────── */
const StepTitleText = styled.h1`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: -0.64px;
  color: #26282e;
  padding: 0;
  margin: 0;
  word-break: break-word;
`

/* ─── Section card ─────────────────────────────────── */
const Card = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 0 2px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.08);
  background: #ffffff;
  overflow: hidden;
`

/* ─── Rich text toolbar ────────────────────────────── */
const EditBar = styled(RowFlex)`
  height: 48px;
  padding: 10px 16px;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid #e2e2e6;
`

const ToolbarBtn = styled.button<{ $hasDropdown?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 28px;
  min-width: ${({ $hasDropdown }) => ($hasDropdown ? '38px' : '28px')};
  padding: ${({ $hasDropdown }) => ($hasDropdown ? '0 4px' : '0')};
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.8;
  &:hover {
    background: #f7f7f9;
    opacity: 1;
  }
`

const ToolbarDivider = styled.div`
  width: 1px;
  height: 28px;
  background: #e2e2e6;
  flex-shrink: 0;
  margin: 0 2px;
`

const ImgIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
  flex-shrink: 0;
`

const TtIcon = styled.img`
  width: 16px;
  height: 16px;
  display: block;
`

/* ─── Content box ──────────────────────────────────── */
const ContentBox = styled.div`
  padding: 8px 16px 24px;
`

const SectionLabel = styled(RowFlex)`
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  margin-bottom: 16px;
`

const SectionLabelText = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #706d84;
`

const BodyText = styled.p`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #474459;
  padding: 0 8px;
  margin: 0;
`

/* ─── Input fields card ────────────────────────────── */
const InputFieldsCard = styled(Card)`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const InputFieldsHeader = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #706d84;
  padding: 0 16px;
`

const FieldRow = styled(RowFlex)`
  padding: 16px 36px 16px 16px;
  gap: 12px;
  align-items: flex-start;
  border-radius: 8px;
  &:hover { background: #f7f7f9; }
`

const FieldTypeIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  flex-shrink: 0;
`

const FieldForm = styled(ColumnFlex)`
  flex: 1;
  gap: 0;
`

const FieldLabel = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #706d84;
  margin-bottom: 8px;
`

const TextInputMock = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #c1c0cb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #474459;
  background: #ffffff;
  &:hover { border-color: #848296; }
`

const SelectMock = styled(TextInputMock)`
  justify-content: space-between;
  cursor: pointer;
`

const TextInputWithToggle = styled(RowFlex)`
  gap: 8px;
  align-items: center;
  margin-top: 12px;
`

const SmallTextInput = styled.div`
  flex: 1;
  height: 40px;
  border: 1px solid #c1c0cb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: #848296;
`

const ToggleMock = styled.div`
  width: 44px;
  height: 24px;
  background: #d3d5da;
  border-radius: 12px;
  flex-shrink: 0;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }
`

const CheckboxRow = styled(RowFlex)`
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`

const CheckboxMock = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #c1c0cb;
  border-radius: 3px;
  background: #ffffff;
  flex-shrink: 0;
`

const CheckboxLabel = styled.span`
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #474459;
`

const AddFieldButton = styled.button`
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

const InnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const EditorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 48px 40px;
`

const TitleArea = styled.div`
  padding: 8px 48px 8px;
`

export const StepEditPanel: React.FC<StepEditPanelProps> = ({ stepTitle, contentBody }) => (
  <Wrap>
    <InnerColumn>
      {/* Step actions */}
      <StepActionsRow>
        <ActionsPill>
          <IconBtn title="Data transmission">
            <ImgIcon src={dataTransmissionUrl} alt="" />
          </IconBtn>
          <IconBtn title="Set as first">
            <IconSvg as={Set1StIcon} color={color.iconDefault} />
          </IconBtn>
          <IconBtn title="Copy">
            <IconSvg as={CopyIcon} color={color.iconDefault} />
          </IconBtn>
          <IconBtn title="Delete">
            <IconSvg as={DeleteIcon} color={color.iconDefault} />
          </IconBtn>
        </ActionsPill>

        <TagsPill>
          <TagBtn>
            <IconSvg as={TagIcon} color={color.iconDefault} />
            <TagBadge>1</TagBadge>
          </TagBtn>
          <TagBtn>
            <IconSvg as={ChatIcon} color={color.iconDefault} />
            <TagBadge>2</TagBadge>
          </TagBtn>
        </TagsPill>
      </StepActionsRow>

      {/* Step title */}
      <TitleArea>
        <StepTitleText>{stepTitle}</StepTitleText>
      </TitleArea>

      {/* Editor content sections */}
      <EditorContent>
        {/* Content card */}
        <Card>
          <EditBar>
            <ToolbarBtn $hasDropdown title="Text size">
              <TtIcon src={ttHeadingUrl} alt="" />
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </ToolbarBtn>
            <ToolbarBtn $hasDropdown title="Text options">
              <IconSvg as={TextOptionsIcon} color={color.iconDefault} />
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </ToolbarBtn>
            <ToolbarBtn $hasDropdown title="Text color">
              <ImgIcon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScAAAAAElFTkSuQmCC" alt="" style={{ display: 'none' }} />
              <IconSvg as={TextOptionsIcon} color={color.iconDefault} style={{ opacity: 0.5 }} />
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </ToolbarBtn>
            <ToolbarDivider />
            <ToolbarBtn $hasDropdown title="Text align">
              <IconSvg as={TextAlignLeftIcon} color={color.iconDefault} />
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </ToolbarBtn>
            <ToolbarBtn $hasDropdown title="List">
              <IconSvg as={BulletListIcon} color={color.iconDefault} />
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </ToolbarBtn>
            <ToolbarDivider />
            <ToolbarBtn title="Link">
              <IconSvg as={LinkIcon} color={color.iconDefault} />
            </ToolbarBtn>
            <ToolbarBtn $hasDropdown title="Image">
              <IconSvg as={ImageIcon} color={color.iconDefault} />
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </ToolbarBtn>
            <ToolbarBtn title="Tip">
              <IconSvg as={TipIcon} color={color.iconDefault} />
            </ToolbarBtn>
            <ToolbarBtn title="Warning">
              <IconSvg as={WarningIcon} color={color.iconDefault} />
            </ToolbarBtn>
            <ToolbarBtn title="Collapse section">
              <ImgIcon src={collapseSectionUrl} alt="" />
            </ToolbarBtn>
            <ToolbarBtn title="Quote">
              <IconSvg as={QuoteIcon} color={color.iconDefault} />
            </ToolbarBtn>
            <ToolbarBtn title="Code block">
              <IconSvg as={CodeBlockIcon} color={color.iconDefault} />
            </ToolbarBtn>
            <ToolbarBtn title="Separator">
              <IconSvg as={SeparatorIcon} color={color.iconDefault} />
            </ToolbarBtn>
            <ToolbarDivider />
            <ToolbarBtn title="More">
              <IconSvg as={MoreIcon} color={color.iconDefault} />
            </ToolbarBtn>
          </EditBar>
          <ContentBox>
            <SectionLabel>
              <SectionLabelText>Content</SectionLabelText>
              <IconSvg as={HelpIcon} color={color.iconSubtle} style={{ width: 12, height: 12 }} />
            </SectionLabel>
            <BodyText>{contentBody}</BodyText>
          </ContentBox>
        </Card>

        {/* Input fields card */}
        <InputFieldsCard>
          <InputFieldsHeader>Input fields</InputFieldsHeader>

          {/* Field 1 */}
          <FieldRow>
            <FieldTypeIcon src={inputFieldTypeUrl} alt="Short text" />
            <FieldForm>
              <FieldLabel>Short text</FieldLabel>
              <TextInputMock>Name</TextInputMock>
              <div style={{ marginTop: 12 }}>
                <FieldLabel style={{ marginBottom: 6 }}>Content</FieldLabel>
                <SelectMock>
                  <span style={{ color: '#848296' }}>Placeholder text</span>
                  <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
                </SelectMock>
              </div>
              <TextInputWithToggle>
                <SmallTextInput>Your name</SmallTextInput>
                <ToggleMock />
              </TextInputWithToggle>
              <CheckboxRow>
                <CheckboxMock />
                <CheckboxLabel>Required field</CheckboxLabel>
              </CheckboxRow>
            </FieldForm>
          </FieldRow>

          {/* Field 2 */}
          <FieldRow>
            <FieldTypeIcon src={inputFieldTypeUrl} alt="Short text" />
            <FieldForm>
              <FieldLabel>Short text</FieldLabel>
              <TextInputMock>Name</TextInputMock>
              <div style={{ marginTop: 12 }}>
                <FieldLabel style={{ marginBottom: 6 }}>Content</FieldLabel>
                <SelectMock>
                  <span style={{ color: '#474459' }}>Placeholder text</span>
                  <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
                </SelectMock>
              </div>
              <TextInputWithToggle>
                <SmallTextInput style={{ color: '#848296' }}>Placeholder text</SmallTextInput>
                <ToggleMock />
              </TextInputWithToggle>
              <CheckboxRow>
                <CheckboxMock />
                <CheckboxLabel>Required field</CheckboxLabel>
              </CheckboxRow>
            </FieldForm>
          </FieldRow>

          <AddFieldButton>
            <IconSvg as={PlusIcon} color="#5d6169" />
            Add input field
          </AddFieldButton>
        </InputFieldsCard>

        {/* Media card */}
        <Card style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <SectionLabelText>Media</SectionLabelText>
          <AddFieldButton>
            <IconSvg as={PlusIcon} color="#5d6169" />
            Add media
          </AddFieldButton>
        </Card>

        {/* Next steps card */}
        <Card style={{ padding: '32px 16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <RowFlex alignItems="center" justifyContent="space-between">
            <SectionLabelText>Next step(s)</SectionLabelText>
            <SelectMock style={{ width: 'auto', minWidth: 110, height: 20, padding: '0 0 0 8px', border: 'none', fontSize: 12 }}>
              <span style={{ color: '#706d84', fontSize: 12 }}>Next step(s)</span>
              <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
            </SelectMock>
          </RowFlex>
          <ColumnFlex gap={2}>
            <RowFlex gap={1} alignItems="center">
              <SelectMock style={{ flex: 1 }}>
                <span style={{ color: '#848296' }}>Select next step</span>
                <ImgIcon src={triangleDownUrl} alt="" style={{ width: 12, height: 12 }} />
              </SelectMock>
              <div style={{
                width: 28, height: 28, border: '1px solid #c1c0cb', borderRadius: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <IconSvg as={ChevronRightIcon} color={color.iconDefault} />
              </div>
            </RowFlex>
            <TextInputWithToggle>
              <SmallTextInput>Button label</SmallTextInput>
              <ToggleMock />
            </TextInputWithToggle>
          </ColumnFlex>
          <AddFieldButton>
            <IconSvg as={PlusIcon} color="#5d6169" />
            Add a possible choice
          </AddFieldButton>
        </Card>
      </EditorContent>
    </InnerColumn>
  </Wrap>
)
