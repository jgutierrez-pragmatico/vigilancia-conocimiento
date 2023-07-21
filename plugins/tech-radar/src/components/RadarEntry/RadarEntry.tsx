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

import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { WithLink } from '../../utils/components';
import { RadarDescription } from '../RadarDescription';
import type { EntrySnapshot, EntrySnapshotLinks } from '../../utils/types';

export type Props = {
  x: number;
  y: number;
  value: number;
  color: string;
  url?: string;
  links?: Array<{ title: string; url: string }>;
  moved?: number;
  description?: string;
  timeline?: EntrySnapshot[];
  artefactos?: EntrySnapshotLinks[];
  title?: string;
  onMouseEnter?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
  onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void;
};

const useStyles = makeStyles<Theme>(theme => ({
  text: {
    pointerEvents: 'none',
    userSelect: 'none',
    fontSize: '9px',
    fill: theme.palette.common.white,
    textAnchor: 'middle',
  },

  link: {
    cursor: 'pointer',
  },
}));

const makeBlip = (color: string, moved?: number) => {
  const style = { fill: color };

  let blip = <circle r={9} style={style} />;
  if (moved && moved > 0) {
    blip = <path d="M -11,5 11,5 0,-13 z" style={style} />; // triangle pointing up
  } else if (moved && moved < 0) {
    blip = <path d="M -11,-5 11,-5 0,13 z" style={style} />; // triangle pointing down
  }

  return blip;
};

const makeBlipURL = (color: string, artefactos?: EntrySnapshotLinks[]) => {
  const style = { fill: color };
  let blip = <circle r={9} style={style} />;

  if (
    !artefactos[0].artefactos ||
    !artefactos[0].charlas ||
    !artefactos[0].habilitacion ||
    !artefactos[0].retos
  ) {
    blip = <path d="M -11,-5 11,-5 0,13 z" style={style} />; // triangle pointing down
  }
  return blip;
};

const RadarEntry = (props: Props): JSX.Element => {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);

  const {
    moved,
    description,
    timeline,
    artefactos,
    title,
    color,
    url,
    links,
    value,
    x,
    y,
    onMouseEnter,
    onMouseLeave,
    onClick,
  } = props;

  const blip = makeBlipURL(color, artefactos);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-testid="radar-entry"
    >
      {' '}
      {open && (
        <RadarDescription
          open={open}
          onClose={handleClose}
          title={title ? title : 'no title'}
          description={description ? description : 'no description'}
          timeline={timeline ? timeline : []}
          artefactos={artefactos ? artefactos : []}
          url={url}
          links={links}
        />
      )}
      {description ? (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          className={classes.link}
          onClick={handleClickOpen}
          role="button"
          href="#"
          tabIndex={0}
          onKeyPress={toggle}
        >
          {blip}
        </a>
      ) : (
        <WithLink url={url} className={classes.link}>
          {blip}
        </WithLink>
      )}
      <text y={3} className={classes.text}>
        {value}
      </text>
    </g>
  );
};

export default RadarEntry;
