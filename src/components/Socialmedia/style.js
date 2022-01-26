/*
    ===============================
            Socail Styles
    ===============================
*/
import styled from 'styled-components'
export const SocialMedia = styled.div`
  height: auto;
  overflow: hidden;
`

export const SocialDiv = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;
  background: ${(props) =>
    props.feature === 'face'
      ? '#3b5998'
      : props.feature === 'twitter'
      ? '#498cbf'
      : props.feature === 'pin'
      ? '#cc2127'
      : ''};
`

export const SocialMediaIcon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  text-align: center;
  line-height: 50px;
  color: #888;
  float: left;
  margin-right: 15px;
  margin-top: 7px;
`

export const SocialMediaParagraph = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  color: #fffx;
`
export const SocialMediaSpan = styled.span`
  display: block;
  margin-bottom: 8px;

  &.info2 {
    font-weight: normal;
  }
`
