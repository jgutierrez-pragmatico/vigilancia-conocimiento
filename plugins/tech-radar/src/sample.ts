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
  RadarRing,
  RadarQuadrant,
  RadarEntry,
  TechRadarLoaderResponse,
  TechRadarApi,
} from './api';

const rings = new Array<RadarRing>();
rings.push({
  id: 'Experimientando',
  name: 'Experimientando',
  color: '#5BA300',
});
rings.push({ id: 'Escalando', name: 'Escalando', color: '#009EB0' });
rings.push({ id: 'Explorando', name: 'Explorando', color: '#C7BA00' });
rings.push({ id: 'Explotando', name: 'Explotando', color: '#E09B96' });

const quadrants = new Array<RadarQuadrant>();
// quadrants.push({ id: 'infrastructure', name: 'Infrastructure' });
quadrants.push({ id: 'businessdevelopment', name: 'Business Development' });
quadrants.push({ id: 'datascience', name: 'Data Science' });
quadrants.push({
  id: 'people-centereddesign',
  name: 'People - Centered Design',
});
quadrants.push({ id: 'computerscience', name: 'ComputerScience' });

const entries = new Array<RadarEntry>();

// entries.push({
//   timeline: [
//     {
//       moved: 0,
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     },
//   ],
//   key: 'javascript',
//   id: 'javascript',
//   title: 'JavaScript',
//   quadrant: 'languages',
//   links: [
//     {
//       url: 'https://www.javascript.com/',
//       title: 'Learn more',
//     },
//     {
//       url: 'https://www.typescriptlang.org/',
//       title: 'TypeScript',
//     },
//   ],
//   description:
//     'Excepteur **sint** occaecat *cupidatat* non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n```ts\nconst x = "3";\n```\n',
// });
// entries.push({
//   timeline: [
//     {
//       moved: -1,
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//       description:
//         'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
//     },
//   ],
//   key: 'typescript',
//   id: 'typescript',
//   title: 'TypeScript',
//   quadrant: 'languages',
//   description:
//     'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
// });
// entries.push({
//   timeline: [
//     {
//       moved: 1,
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//       description:
//         'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
//     },
//   ],
//   links: [
//     {
//       url: 'https://webpack.js.org/',
//       title: 'Learn more',
//     },
//   ],
//   key: 'webpack',
//   id: 'webpack',
//   title: 'Webpack',
//   quadrant: 'frameworks',
// });
// entries.push({
//   timeline: [
//     {
//       moved: 0,
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//     },
//   ],
//   links: [
//     {
//       url: 'https://reactjs.org/',
//       title: 'Learn more',
//     },
//   ],
//   key: 'react',
//   id: 'react',
//   title: 'React',
//   quadrant: 'frameworks',
// });
// entries.push({
//   timeline: [
//     {
//       moved: 0,
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//     },
//   ],
//   key: 'code-reviews',
//   id: 'code-reviews',
//   title: 'Code Reviews',
//   quadrant: 'process',
// });
// entries.push({
//   timeline: [
//     {
//       moved: 0,
//       ringId: 'assess',
//       date: new Date('2020-08-06'),
//     },
//   ],
//   key: 'mob-programming',
//   id: 'mob-programming',
//   title: 'Mob Programming',
//   quadrant: 'process',
// });
// entries.push({
//   timeline: [
//     {
//       moved: 0,
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//     },
//   ],
//   key: 'docs-like-code',
//   id: 'docs-like-code',
//   title: 'Docs-like-code',
//   quadrant: 'process',
// });
// entries.push({
//   timeline: [
//     {
//       ringId: 'hold',
//       date: new Date('2020-08-06'),
//     },
//   ],
//   key: 'force-push',
//   id: 'force-push',
//   title: 'Force push to master',
//   quadrant: 'process',
// });
// entries.push({
//   timeline: [
//     {
//       ringId: 'adopt',
//       date: new Date('2020-08-06'),
//       description: 'long description',
//     },
//     {
//       ringId: 'trial',
//       date: new Date('2020-07-05'),
//       description: 'long description',
//     },
//   ],
//   links: [
//     {
//       url: 'https://github.com',
//       title: 'Learn more',
//     },
//   ],
//   key: 'github-actions',
//   id: 'github-actions',
//   title: 'GitHub Actions',
//   quadrant: 'infrastructure',
// });

export const mock: TechRadarLoaderResponse = {
  entries,
  quadrants,
  rings,
};

export class SampleTechRadarApi implements TechRadarApi {
  async load() {
    try {
      const response = await fetch(
        'https://ig473nnd05.execute-api.us-east-1.amazonaws.com/dev/entries',
      );
      const data = await response.json();
      const dataReplace = data
        .filter(
          (obj: any) =>
            obj.key && obj.timeline[0].ringId && obj.quadrant.trim() !== '',
        )
        .map((obj: any) => {
          obj.quadrant = obj.quadrant
            .replace(/\s/g, '')
            .toLocaleLowerCase('en-US');
          obj.key = obj.key + obj.id;
          return obj;
        });

      // const response2 = await fetch('https://ig473nnd05.execute-api.us-east-1.amazonaws.com/dev/kc')
      // const data2 = await response2.json()
      mock.entries = dataReplace;
      // mock.quadrants = data2.map((d:any)=>({id:d.id,name:d.nombre}))
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
    return mock;
  }
}
