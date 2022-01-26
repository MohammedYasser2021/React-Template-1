import React from 'react'
import {
  Creative,
  CreativeInfo,
  CreativeInfoTitle,
  CreativeInfoTitleSpan,
  InfoDir,
  InfoDesc,
  InfoDescAnchor,
} from './style'
export default function About() {
  return (
    <>
      <Creative>
        <div className="container">
          <CreativeInfo>
            <CreativeInfoTitle>
              <CreativeInfoTitleSpan>This is</CreativeInfoTitleSpan> Me
            </CreativeInfoTitle>
            <InfoDir>Creative Director</InfoDir>
            <InfoDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{' '}
              <InfoDescAnchor href="#">explicabo</InfoDescAnchor> maxime
              quibusdam quaerat nihil aliquid aperiam deleniti, repellendus
              dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            <InfoDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
              explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
              repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
          </CreativeInfo>
        </div>
      </Creative>
    </>
  )
}
