import React from 'react'
import styled from 'styled-components'
import { RowFlex, ButtonMinimal, ButtonPrimary, ButtonSplit, IconSvg, color } from '@stonly/design-system'
import UndoIcon from '@stonly/design-system/icons/Undo-16'
import RedoIcon from '@stonly/design-system/icons/Redo-16'
import EyeIcon from '@stonly/design-system/icons/Eye-16'
import LayoutIcon from '@stonly/design-system/icons/Layout-16'
import ShareIcon from '@stonly/design-system/icons/Share-16'
import SettingsIcon from '@stonly/design-system/icons/Settings-16'
import ChevronBottomIcon from '@stonly/design-system/icons/ChevronBottom-16'
import MoreIcon from '@stonly/design-system/icons/More-16'
import LanguageIcon from '@stonly/design-system/icons/Language-16'
import RefreshIcon from '@stonly/design-system/icons/Refresh-16'

type TabId = 'editor' | 'insights' | 'versions'

interface BottomBarProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

const Wrap = styled(RowFlex)`
  width: 100%;
  height: 68px;
  min-height: 68px;
  background: #262144;
  padding: 0 24px;
  align-items: flex-start;
  justify-content: space-between;
  flex-shrink: 0;
`

const TabsRow = styled(RowFlex)`
  align-items: flex-start;
  height: 100%;
  gap: 0;
`

const Tab = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 8px;
  height: 46px;
  position: relative;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255,255,255,0.55)')};
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 8px;
    right: 8px;
    height: 2px;
    background: ${({ $active }) => ($active ? '#e61168' : 'transparent')};
    border-radius: 1px;
  }

  &:hover { color: #ffffff; }
`

const TabBadgePrimary = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #e61168;
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  border-radius: 8px;
  padding: 2px 5px;
  min-width: 16px;
  height: 16px;
`

const TabBadgeSubtle = styled(TabBadgePrimary)`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 16px;
  padding: 0;
`

const Divider = styled.div`
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 8px;
  flex-shrink: 0;
`

const DarkIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  opacity: 0.7;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    opacity: 1;
  }
`

const LangButton = styled(DarkIconButton)`
  width: auto;
  padding: 0 8px;
  gap: 4px;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  border-radius: 4px;
`

const SavePublishButton = styled.button`
  background: #e61168;
  border: none;
  cursor: pointer;
  height: 36px;
  padding: 0 32px;
  border-radius: 88px;
  font-family: 'SF UI Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  white-space: nowrap;
  &:hover { background: #c00055; }
`

const MoreButton = styled(DarkIconButton)`
  width: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
`

const SaveGroup = styled(RowFlex)`
  align-items: center;
  gap: 4px;
`

export const BottomBar: React.FC<BottomBarProps> = ({ activeTab, onTabChange }) => (
  <Wrap>
    <TabsRow>
      <Tab $active={activeTab === 'editor'} onClick={() => onTabChange('editor')}>
        Editor
      </Tab>
      <Tab $active={activeTab === 'insights'} onClick={() => onTabChange('insights')}>
        Insights
        <TabBadgePrimary>17</TabBadgePrimary>
      </Tab>
      <Tab $active={activeTab === 'versions'} onClick={() => onTabChange('versions')}>
        Versions
        <TabBadgeSubtle>1</TabBadgeSubtle>
      </Tab>
    </TabsRow>

    <RowFlex alignItems="center" gap="2px" style={{ alignSelf: 'center' }}>
      <DarkIconButton title="Undo">
        <IconSvg as={UndoIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <DarkIconButton title="Redo">
        <IconSvg as={RedoIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <Divider />
      <DarkIconButton title="Preview">
        <IconSvg as={EyeIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <DarkIconButton title="Layout">
        <IconSvg as={LayoutIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <DarkIconButton title="Share">
        <IconSvg as={ShareIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <DarkIconButton title="Refresh">
        <IconSvg as={RefreshIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <DarkIconButton title="Settings">
        <IconSvg as={SettingsIcon} color="rgba(255,255,255,0.75)" />
      </DarkIconButton>
      <Divider />
      <LangButton title="Language selector">
        <span>EN</span>
        <IconSvg as={ChevronBottomIcon} color="rgba(255,255,255,0.75)" />
      </LangButton>
      <Divider />
      <SaveGroup>
        <SavePublishButton>Save and publish</SavePublishButton>
        <MoreButton title="More options">
          <IconSvg as={MoreIcon} color="rgba(255,255,255,0.75)" />
        </MoreButton>
      </SaveGroup>
    </RowFlex>
  </Wrap>
)
