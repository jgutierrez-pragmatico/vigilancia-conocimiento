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
import React from 'react'
import {Button,TextField, Select, InputLabel, MenuItem, FormControl} from "@material-ui/core";
import useTechForm from "../../controllers/techForm";

const style = {
  marginTop:"1rem"
}
const TechForm = ()=>{
  const [faseSelect, setFase] = React.useState('');
  const [kcSelect, setKC] = React.useState('');
  const [chapterSelect, setChapter] = React.useState('');

  const {selectData:{fases,kc,chapter}} = useTechForm();
  return (
    <div>
      <FormControl fullWidth style={style}>
          <InputLabel id="kc-label" htmlFor="kc">KC</InputLabel>
          <Select
            labelId="kc-label"
            id="kc"
            value={kcSelect}
            label="KC"
            onChange={(event:any)=>setKC(event.target.value as string)}
            fullWidth
          >
            {kc.map((object:any,index)=><MenuItem value={object.id} key={`kc${index}`}>{object.nombre}</MenuItem>)}
          </Select>
      </FormControl>
        <FormControl fullWidth style={style}>
          <InputLabel id="chapter-label">Chapter</InputLabel>
          <Select
            labelId="chapter-label"
            id="chapter"
            value={chapterSelect}
            label="Chapter"
            onChange={(event:any)=>setChapter(event.target.value as string)}
            fullWidth
          >
            {chapter.map((object:any,index)=><MenuItem value={object.id} key={`kc${index}`}>{object.nombre}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField type="email" id="email" label="Responsable (Correo)" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField  id="tema" label="Tema (Tipificacion)" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField  id="main-tema" label="Tema Pricipal" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField  id="sub-tema" label="Sub Tema" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField type="date" id="sub-tema" label="Dead line de obsolencia (Fecha)" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <InputLabel htmlFor="date2">Fecha para pasar a la siguiete fase</InputLabel>
          <TextField type="date" id="date2" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <InputLabel id="fase-label">Fase</InputLabel>
          <Select
            labelId="fase-label"
            id="fase"
            value={faseSelect}
            label="Fase"
            onChange={(event:any)=>setFase(event.target.value as string)}
            fullWidth
          >
            {fases.map((object:any,index)=><MenuItem value={object.id} key={`kc${index}`}>{object.nombre}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField  id="link" label="Link Ruta habilitacion" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField id="artefacto" label="Artefacto" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField id="retos" label="Retos Asincronos" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField id="charlas" label="Charlas" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField id="solicitud" label="Solicitud de priorizacion" variant="outlined" fullWidth   />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField id="necesidades" label="Necesidades" variant="outlined" fullWidth   />
        </FormControl>
      <FormControl fullWidth style={style}>
        <Button>Enviar</Button>
      </FormControl>
    </div>
  )
}
export default TechForm
