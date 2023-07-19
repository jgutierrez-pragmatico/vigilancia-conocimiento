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
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {useServiceTechRadar} from "../../api/services";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CustomTable = ({handleOpen, setForm}:any)=> {
  const [data, setData] = useState<any>([])
  const {getEntries, getEntry} = useServiceTechRadar()
  const initComponent = async ()=>{
    const response = await getEntries();
    setData(response)

  }
  const getData = async (id:string)=>{
    const response = await getEntry(id)
    setForm(response)
    handleOpen()
  }

  useEffect(()=>{
    initComponent();
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>KC</TableCell>
            <TableCell align="right">Chapter</TableCell>
            <TableCell align="right">Tipificacion</TableCell>
            <TableCell align="right">Tema Principal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <TableRow
              key={row.key+i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={()=>getData(row.id)}
            >
              <TableCell component="th" scope="row">
                {row.key}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.timeline[0].description}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomTable;
