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

rings.push({ id: 'Explotando', name: 'Explotando', color: '#5BA300' });
rings.push({ id: 'Escalando', name: 'Escalando', color: '#009EB0' });
rings.push({
  id: 'Experimientando',
  name: 'Experimientando',
  color: '#C7BA00',
});
rings.push({
  id: 'Explorando',
  name: 'Explorando',
  color: '#E09B96',
});

const quadrants = new Array<RadarQuadrant>();
quadrants.push({ id: 'computerscience', name: 'Computer Science' });
quadrants.push({ id: 'datascience', name: 'Data Science' });
quadrants.push({
  id: 'people-centereddesign',
  name: 'People - Centered Design',
});

quadrants.push({ id: 'powerfulteams', name: 'Powerful teams' });
const entries = new Array<RadarEntry>();

export const mock: TechRadarLoaderResponse = {
  entries,
  quadrants,
  rings,
};

export class SampleTechRadarApi2 implements TechRadarApi {
  async load() {
    try {
      const response = await fetch(
        'https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/entries?format=radar&limit=1000',
      );
      // console.log(response)
      const data = await response.json();
      const dataReplace = data.entries
        .filter(
          (obj: any) =>
            obj.key && obj.timeline[0].ringId && obj.quadrant.trim() !== '',
        )
        .map((obj: any) => {
          obj.quadrant = obj.quadrant
            .replace(/\s/g, '')
            .toLocaleLowerCase('en-US');
          obj.key = obj.key + obj.id;
          obj.timeline[0].date = new Date('2020-08-06');
          return obj;
        });

      mock.entries = dataReplace;
    } catch (e) {
      // console.warn(e);
    }
    return mock;
  }
}

export class SampleTechRadarApi implements TechRadarApi {
  async load() {
    try {
      const response = await fetch(
        'https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/entries?format=radar&limit=1000',
      );
      const data = await response.json();
      const dataReplace = data.entries
        .filter(
          (obj: any) =>
            obj.fase_nombre &&
            obj.kc_nombre &&
            obj.chapter_nombre !== 'undefined',
        )
        .map((obj: any) => {
          return {
            timeline: [
              {
                moved: 0,
                ringId: obj.fase_nombre,
                date: new Date('2020-08-06'),
                description: obj.tipificacion,
              },
            ],
            key: obj.id_radar,
            id: obj.id_radar,
            title: obj.tema_principal,
            quadrant: obj.kc_nombre
              .replace(/\s/g, '')
              .toLocaleLowerCase('en-US'),
            links: [
              {
                title: 'code',
                url: obj.ruta_habilitacion,
              },
            ],
            description: obj.descripcion,
            artefactos: [
              {
                habilitacion: obj.ruta_habilitacion
                  ?.split('https://')
                  .filter(Boolean)
                  .map((url: string) => `https://${url}`),
                artefactos: obj.artefacto
                  ?.split('https://')
                  .filter(Boolean)
                  .map((url: string) => `https://${url}`),
                charlas: obj.charla,
                retos: obj.reto_asincrono,
              },
            ],
          };
        });
      mock.entries = dataReplace;
    } catch (e) {
      // console.warn(e);
    }
    return mock;
  }
}
