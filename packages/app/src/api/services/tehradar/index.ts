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
export const useServiceTechRadar = () => {
  const getEntries = async ()=>{
    try {
      const response = await fetch('https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/entries')
      return await response.json()
    }catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }

  }
  const getEntry = async (id:string)=>{
    try {
      const response = await fetch(`https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/entries/${id}`)
      return await response.json()
    }catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }

  }
  const getKC = async ()=>{
    try {
      const response = await fetch('https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/kc')
      return await response.json()
    }catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }

  }
  const getChapter = async ()=>{
    try {
      const response = await fetch('https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/chapter')
      return await response.json()
    }catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }

  }
  const getFases = async ()=>{
    try {
      const response = await fetch('https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/fases')
      return await response.json()
    }catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }

  }
  const sendForm = async (form:any)=>{
    try {
      const response = await fetch('https://nietwmqv32.execute-api.us-east-1.amazonaws.com/production/entries',{
        method:'POST',
        body:JSON.stringify(form)
      })
      return await response.json()
    }catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }

  }
  return{
    getEntries,
    getKC,
    getChapter,
    getFases,
    sendForm,
    getEntry
  }
}
