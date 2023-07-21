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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import { Link, MarkdownContent } from '@backstage/core-components';
import { isValidUrl } from '../../utils/components';
import type { EntrySnapshot, EntrySnapshotLinks } from '../../utils/types';
import { RadarTimeline } from '../RadarTimeline';
import { RadarTimelineLinks } from '../RadarTimeline/RadarTimeline';

export type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  timeline?: EntrySnapshot[];
  url?: string;
  links?: Array<{ url: string; title: string }>;
  artefactos?: EntrySnapshotLinks[];
};

const RadarDescription = (props: Props): JSX.Element => {
  function showDialogActions(
    url: string | undefined,
    links: Array<{ url: string; title: string }> | undefined,
  ): Boolean {
    return isValidUrl(url) || Boolean(links && links.length > 0);
  }

  const {
    open,
    onClose,
    title,
    description,
    timeline,
    url,
    links,
    artefactos,
  } = props;

  return (
    <Dialog data-testid="radar-description" open={open} onClose={onClose}>
      <DialogTitle data-testid="radar-description-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent dividers>
        <MarkdownContent content={description} />
        <RadarTimelineLinks artefactos={artefactos} />
        <br />
        <RadarTimeline timeline={timeline} />
      </DialogContent>
      {showDialogActions(url, links) && (
        <DialogActions>
          {url &&
            links?.map(link => (
              <Button
                component={Link}
                to={link.url}
                onClick={onClose}
                color="primary"
                startIcon={<LinkIcon />}
                key={link.url}
              >
                {link.title}
              </Button>
            ))}
          {isValidUrl(url) && (
            <Button
              component={Link}
              to={url}
              onClick={onClose}
              color="primary"
              startIcon={<LinkIcon />}
              key={url}
            >
              Más información
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export { RadarDescription };
