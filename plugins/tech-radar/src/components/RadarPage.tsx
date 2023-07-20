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

import {
  Content,
  ContentHeader,
  Header,
  Page,
} from '@backstage/core-components';
import { Button, Grid, Input, makeStyles } from '@material-ui/core';

import React from 'react';
import { RadarComponent, TechRadarComponentProps } from './RadarComponent';

const useStyles = makeStyles(() => ({
  overflowXScroll: {
    overflowX: 'scroll',
  },
}));

/**
 * Properties for {@link TechRadarPage}
 *
 * @public
 */
export interface TechRadarPageProps extends TechRadarComponentProps {
  /**
   * Title
   */
  title?: string;
  /**
   * Subtitle
   */
  subtitle?: string;
  /**
   * Page Title
   */
  pageTitle?: string;
}

/**
 * Main Page of Tech Radar
 *
 * @public
 */
export function RadarPage(props: TechRadarPageProps) {
  const {
    title = 'Tech Radar',
    subtitle = 'Cuadrantes de vigilancia de conocimiento',
    pageTitle = 'Radar Pragma',
    ...componentProps
  } = props;
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState('');

  return (
    <Page themeId="tool">
      <Header title={title} subtitle={subtitle} />
      <Content className={classes.overflowXScroll}>
        <ContentHeader title={pageTitle}>
          <Input
            id="tech-radar-filter"
            type="search"
            placeholder="Filter"
            onChange={e => setSearchText(e.target.value)}
          />

          <Button
            style={{ margin: '20px' }}
            variant="contained"
            color="primary"
            href="https://bucketfile.s3.amazonaws.com/Roadmap%20Conocimiento.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2XNS2NMPE56ALFP5%2F20230720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230720T034410Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLWVhc3QtMSJHMEUCIBT12KTYYByHu4%2FauYbnn0CPBt%2BYz1a1XD9Im8fbD8NrAiEAn1Z%2FMb3ei%2Fe4V8CgzQsVZMMAHPZbkj%2B5Ecq34QErmfMqiwMInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzc0OTg3ODY1OTAiDFG9%2Fki6tJ09Q0X5MSrfAiLtP0diDxs%2FAHsl1HHOvEVS8kOa9hKz%2FTJDPiHlwufsCs%2BHaOlQ6L%2FmVeg2K8DVYW6jWEyYIqEAH5UDJ6xtbZpu9GFeHUo%2BQLWdZLFW8jyW2RZ3NFdVPnaekMovLw51KxU2qlRQNrar8mn7on7VpBAUVSn5s%2BHaw0EHqxHBi1sM0LBYQ9raPVx1%2BbpINdKcHhtC3uWLuUSedjFV8jkwz%2B7uu7sgyDQDOzAE%2BOQSy4aAH9hteqM3QuPorqO1EN7JPJRSoJL1ZAtHyds%2BJexZZuiAy3b9qQDYeBFkzzLz0BmIPmgXPQCxR0Q7QfC4qRsNN5SpRETIGSDlcRsy6%2B0uP7oFEeyN%2B60wlGaZ9wScm771A5qVkhrbQO060igje%2B8VTOIENDI12Kzp0VSCWyzqvsy87aWzb5fZI515g2da7MaQmA%2FpoLB7s23nG2RplhTKwbYHGFTiAWlxRx72xtPhbzDL2OKlBjqeAbulWbb8kNGfOPptHwzEDjIXLu6Rcg6pMPfo4lQZq3z3n9QuhUp2cyGDsRBiUNcKsHNvCZFf078bi9CIgc9F0xbiHCRRXcQGEaNIWnFoXDKF52sHSogSQBl9jYD0KlTzGmWFsJfpust9uThEeadsKIt1DD%2FOwO7bebLJ9lUoDGpZ9vpcZkH0Qg9iTRgOh3edYXEQskJm%2BP5Zo5bj0Zfc&X-Amz-Signature=91a4b03a907db75c0c9e0f720e822db0a3e87cf528971d78d75061cf4221200b"
            target="_blank"
          >
            Ver PDF
          </Button>
        </ContentHeader>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} sm={6} md={4}>
            <RadarComponent searchText={searchText} {...componentProps} />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
}
