import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  WorkSection,
  WorkTitle,
  Part,
  WorkTitleSpan,
  WorkPartIcon,
  WorkPartTitle,
  WorkPartLine,
  WorkPartDesc,
} from './style.js'

export default function Works() {
  const [works, setWorks] = useState([])

  useEffect(() => {
    axios.get('json/data.json').then((res) => {
      setWorks(res.data.works)
    })
  }, [works])

  const worksList = works.map((item) => {
    return (
      <Part first={item.id} key={item.id}>
        <WorkPartIcon className={item.icon_name}></WorkPartIcon>
        <WorkPartTitle>{item.title}</WorkPartTitle>
        <WorkPartLine />
        <WorkPartDesc>{item.body}</WorkPartDesc>
      </Part>
    )
  })
  return (
    <>
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <WorkTitleSpan>My</WorkTitleSpan> Work
          </WorkTitle>
          {worksList}
        </div>
      </WorkSection>
    </>
  )
}
