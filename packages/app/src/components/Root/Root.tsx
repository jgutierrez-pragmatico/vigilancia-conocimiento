/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import RuleIcon from '@material-ui/icons/AssignmentTurnedIn';
import EditNoteIcon from '@material-ui/icons/EditAttributes';
import MapIcon from '@material-ui/icons/MyLocation';
import LayersIcon from '@material-ui/icons/Layers';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import MoneyIcon from '@material-ui/icons/MonetizationOn';
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import { GraphiQLIcon } from '@backstage/plugin-graphiql';
import {
  Settings as SidebarSettings,
  UserSettingsSignInAvatar,
} from '@backstage/plugin-user-settings';
import { SidebarSearchModal } from '@backstage/plugin-search';
import { Shortcuts } from '@backstage/plugin-shortcuts';
import {
  Sidebar,
  sidebarConfig,
  SidebarDivider,
  SidebarGroup,
  SidebarItem,
  SidebarPage,
  SidebarScrollWrapper,
  SidebarSpace,
  Link,
  useSidebarOpenState,
  SidebarSubmenu,
  SidebarSubmenuItem,
} from '@backstage/core-components';
import { MyGroupsSidebarItem } from '@backstage/plugin-org';
import { SearchModal } from '../search/SearchModal';
import Score from '@material-ui/icons/Score';
import { useApp } from '@backstage/core-plugin-api';
import BuildIcon from '@material-ui/icons/Build';

const useSidebarLogoStyles = makeStyles({
  root: {
    width: sidebarConfig.drawerWidthClosed,
    height: 3 * sidebarConfig.logoHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: -14,
  },
  link: {
    width: sidebarConfig.drawerWidthClosed,
    marginLeft: 24,
  },
});

const SidebarLogo = () => {
  const classes = useSidebarLogoStyles();
  const { isOpen } = useSidebarOpenState();

  return (
    <div className={classes.root}>
      <Link to="/" underline="none" className={classes.link} aria-label="Home">
        {isOpen ? <LogoFull /> : <LogoIcon />}
      </Link>
    </div>
  );
};

export const Root = ({ children }: PropsWithChildren<{}>) => (
  <SidebarPage>
    <Sidebar>
      <SidebarLogo />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        {/* Global nav, not org-specific */}
        {/* End global nav */}
        <SidebarDivider />
        <SidebarScrollWrapper>
          <SidebarItem icon={MapIcon} to="tech-radar" text="Tech Radar" />
          <SidebarItem icon={EditNoteIcon} to="form" text="Form" />
        </SidebarScrollWrapper>
        <SidebarDivider />
        <Shortcuts allowExternalLinks />
      </SidebarGroup>
      <SidebarSpace />
      <SidebarDivider />
      <SidebarGroup
        label="Settings"
        icon={<UserSettingsSignInAvatar />}
        to="/settings"
      >
        <SidebarSettings />
        <SidebarItem icon={BuildIcon} to="devtools" text="DevTools" />
      </SidebarGroup>
    </Sidebar>
    {children}
  </SidebarPage>
);
