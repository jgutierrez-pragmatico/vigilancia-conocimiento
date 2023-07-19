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


import {useServiceTechRadar} from "../../api/services";
import {useEffect, useState} from "react";

const useTechForm = (initForm:any)=>{
  const [selectData,setSelectData]= useState({
    kc:[],
    chapter:[],
    fases:[]

  })
  const {getKC, getChapter, getFases, sendForm} = useServiceTechRadar()
  const [form,setForm] = useState<any>(initForm)
  const initController = async()=>{
    const chapter = await getChapter()
    const kc = await getKC()
    const fases = await getFases()
    setSelectData({
      chapter,
      kc,
      fases
    })

  }
  useEffect(()=>{
    initController()
    if(form.id_radar){
      setForm({
        ...form,
        siguiente_fase:form.siguiente_fase?.split('T')[0],
        obsolescencia:form.obsolescencia?.split('T')[0],
      })
    }
  },[])

  console.log(form)
  const onChange = (event:any,number:boolean=false)=>{
    if(number){
      setForm({...form,[event.target.name]:parseInt(event.target.value, 10)})
    }else{
      setForm({...form,[event.target.name]:event.target.value})
    }

  }
  const sendData = async ()=>{
    try {
      const response  = await sendForm(form)
      // eslint-disable-next-line no-console
      console.log({response})
    }catch (e) {
      console.log(e)
    }

  }
  return {
    selectData,
    onChange,
    form,
    sendData
  }
}
export default useTechForm
