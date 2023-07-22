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
import type { EntrySnapshot, EntrySnapshotLinks } from '../../utils/types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AdjustIcon from '@material-ui/icons/Adjust';

import { MovedState } from '../../api';

export type Props = {
  timeline?: EntrySnapshot[];
  artefactos?: EntrySnapshotLinks[];
};

const RadarTimeline = (props: Props): JSX.Element => {
  const { timeline } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Trazabilidad
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Moved in direction</TableCell>
              <TableCell align="left">Moved to ring</TableCell>
              <TableCell align="left">Moved on date</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timeline?.length === 0 && (
              <TableRow key="no-timeline">
                <TableCell component="th" scope="row">
                  No Timeline
                </TableCell>
              </TableRow>
            )}
            {timeline?.map(timeEntry => (
              <TableRow key={timeEntry.description}>
                <TableCell component="th" scope="row">
                  {timeEntry.moved === MovedState.Up ? <ArrowUpwardIcon /> : ''}
                  {timeEntry.moved === MovedState.Down ? (
                    <ArrowDownwardIcon />
                  ) : (
                    ''
                  )}
                  {timeEntry.moved === MovedState.NoChange ? (
                    <AdjustIcon />
                  ) : (
                    ''
                  )}
                </TableCell>
                <TableCell align="left">
                  {timeEntry.ring.name ? timeEntry.ring.name : ''}
                </TableCell>
                <TableCell align="left">
                  {timeEntry.date.toLocaleDateString()
                    ? timeEntry.date.toLocaleDateString()
                    : ''}
                </TableCell>
                <TableCell align="left">
                  {timeEntry.description ? timeEntry.description : ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { RadarTimeline };

const RadarTimelineLinks = (props: Props): JSX.Element => {
  const { artefactos } = props;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Links
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Link rutra de habilitacion</TableCell>
              <TableCell align="left">Artefacto</TableCell>
              <TableCell align="left">Retos asincronos</TableCell>
              <TableCell align="left">Charlas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {artefactos?.length === 0 && (
              <TableRow key="no-timeline">
                <TableCell component="th" scope="row">
                  Sin Artefactos
                </TableCell>
              </TableRow>
            )}
            {artefactos?.map(timeEntry => (
              <TableRow>
                <TableCell align="left">
                  <a href={timeEntry.habilitacion} target="_blank">
                    {timeEntry.habilitacion}
                  </a>
                </TableCell>
                <TableCell align="left">
                  <a href={timeEntry.artefactos} target="_blank">
                    {timeEntry.artefactos}
                  </a>
                </TableCell>
                <TableCell align="left">
                  <a href={timeEntry.retos} target="_blank">
                    {timeEntry.retos}
                  </a>
                </TableCell>
                <TableCell align="left">
                  <a href={timeEntry.charlas} target="_blank">
                    {timeEntry.charlas}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { RadarTimelineLinks };
