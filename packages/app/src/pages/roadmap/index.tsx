/*
 * Copyright 2023 The Backstage Authors
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
import { InfoCard } from '@backstage/core-components';
import { Grid } from '@material-ui/core';

const RoadMap = () => {
  return (
    <Grid item>
      <InfoCard title="Pragma">
        <iframe
          title="Roadmap de conocimiento"
          width="100%"
          height="100%"
          src="https://lookerstudio.google.com/u/0/reporting/ff7d83d9-5d84-472b-a898-bfb5af46a283/page/qTRUD"
        />
      </InfoCard>
    </Grid>
  );
};

export default RoadMap;
