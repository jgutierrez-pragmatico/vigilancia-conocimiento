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
const TechForm = ({initForm, handleClose}:any)=>{

  const {selectData:{fases,kc,chapter}, sendData,form,onChange} = useTechForm(initForm);

  return (
    <div>
      <FormControl fullWidth style={style}>
          <InputLabel id="kc-label" htmlFor="kc_id">KC</InputLabel>
          <Select
            labelId="kc-label"
            id="kc_id"
            name="kc_id"
            value={form.kc_id}
            label="KC"
            onChange={(e)=>onChange(e,true)}
            fullWidth
          >
            {kc.map((object:any,index)=><MenuItem value={object.id} key={`kc${index}`}>{object.nombre}</MenuItem>)}
          </Select>
      </FormControl>
        <FormControl fullWidth style={style}>
          <InputLabel id="chapter-label">Chapter</InputLabel>
          <Select
            labelId="chapter-label"
            id="chapter_id"
            name="chapter_id"
            value={form.chapter_id}
            label="Chapter"
            onChange={(e)=>onChange(e,true)}
            fullWidth
          >
            {chapter.map((object:any,index)=><MenuItem value={object.id} key={`kc${index}`}>{object.nombre}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            type="email"
            id="responsable_email"
            name="responsable_email"
            label="Responsable (Correo)"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.responsable_email}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="tipificacion"
            name="tipificacion"
            label="Tema (Tipificacion)"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.tipificacion}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="tema_principal"
            name="tema_principal"
            label="Tema Pricipal"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.tema_principal}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="sub_tema"
            name="sub_tema"
            label="Sub Tema"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.sub_tema}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true}}
            id="obsolescencia"
            name="obsolescencia"
            label="Dead line de obsolescencia (Fecha)"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.obsolescencia}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            label="Fecha para pasar a la siguiete fase"
            InputLabelProps={{ shrink: true }}
            type="date"
            id="siguiente_fase"
            name="siguiente_fase"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.siguiente_fase}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <InputLabel id="fase-label">Fase</InputLabel>
          <Select
            labelId="fase-label"
            id="Fase_id"
            name="Fase_id"
            value={form.fase_id}
            label="Fase"
            onChange={(e)=>onChange(e,true)}
            fullWidth
          >
            {fases.map((object:any,index)=><MenuItem value={object.id} key={`kc${index}`}>{object.nombre}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="ruta_habilitacion"
            name='ruta_habilitacion'
            label="Link Ruta habilitacion"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.ruta_habilitacion}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="artefacto"
            name="artefacto"
            label="Artefacto"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.artefacto}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="reto_asincrono"
            name="reto_asincrono"
            label="Retos Asincronos"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.reto_asincrono}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="charla"
            name="charla"
            label="Charlas"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.charla}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="solicitud_priorizacion"
            name="solicitud_priorizacion"
            label="Solicitud de priorizacion"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.solicitud_priorizacion}
          />
        </FormControl>
        <FormControl fullWidth style={style}>
          <TextField
            id="necesidad"
            name="necesidad"
            label="Necesidades"
            variant="outlined"
            fullWidth
            onChange={onChange}
            value={form.necesidad}
          />
        </FormControl>
      <FormControl fullWidth style={style}>
        <Button onClick={()=>{
          sendData();
          handleClose();
        }}>Enviar</Button>
      </FormControl>
    </div>
  )
}
export default TechForm
