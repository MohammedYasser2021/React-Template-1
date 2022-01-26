import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  SocialMedia,
  SocialDiv,
  SocialMediaIcon,
  SocialMediaParagraph,
  SocialMediaSpan,
} from './style'
export default function Social() {
  const [social, setSocial] = useState([])

  useEffect(() => {
    axios.get('json/data.json').then((res) => {
      setSocial(res.data.social)
    })
  }, [social])
  const socialList = social.map((item) => {
    return (
      <SocialDiv key={item.id} feature={item.feature}>
        <SocialMediaIcon className={item.icon}></SocialMediaIcon>
        <SocialMediaParagraph>
          <SocialMediaSpan>{item.title}</SocialMediaSpan>
          <SocialMediaSpan className="info2">{item.body}</SocialMediaSpan>
        </SocialMediaParagraph>
      </SocialDiv>
    )
  })
  return (
    <>
      <SocialMedia>{socialList}</SocialMedia>
    </>
  )
}
