import React from 'react'
import {
  HomeSection,
  HomeInformation,
  HomeTitle,
  HomeInfo,
  HomeDesc,
  DescSpan,
  HomeBtn,
} from './style.js'
export default function Home() {
  return (
    <>
      <HomeSection>
        <div className="container">
          <HomeInformation>
            <HomeTitle className="margin-bottom">Mohamemd Yasser</HomeTitle>
            <HomeInfo>Frontend Developer</HomeInfo>
            <HomeDesc>
              Iam a professional <DescSpan>UX Designer</DescSpan> and Front-End
              Developer creating modern and resposive designs to Web and Mobile.
              Let us work together. Thank you.
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
        </div>
      </HomeSection>
    </>
  )
}
