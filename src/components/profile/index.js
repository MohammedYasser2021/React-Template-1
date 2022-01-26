import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  ProfileSkills,
  ProfileSkillsProf,
  ProfileList,
  ProfileItem,
  ProfileItemSpan,
  Skills,
  SkillsDesc,
  SkillsBar,
  SkillsBarTitle,
  SkillsBarPerc,
  SkillsBarParent,
  SkillsBarParentSpan,
  ProfileSkillsTitle,
  ProfileTitle,
  ProfileTitleSpan,
  ProfileSkillsTitleSpan,
} from './style'
export default function Profile() {
  const [bars, setBars] = useState([])

  useEffect(() => {
    axios.get('json/data.json').then((res) => {
      setBars(res.data.skills)
    })
  }, [bars])

  const barsList = bars.map((bar) => {
    return (
      <SkillsBar key={bar.id}>
        <SkillsBarTitle>{bar.title}</SkillsBarTitle>
        <SkillsBarPerc>{bar.percentage}</SkillsBarPerc>
        <SkillsBarParent>
          <SkillsBarParentSpan sp={bar.type}></SkillsBarParentSpan>
        </SkillsBarParent>
      </SkillsBar>
    )
  })
  return (
    <>
      <ProfileSkills>
        <div className="container">
          <ProfileSkillsProf>
            <ProfileTitle>
              <ProfileTitleSpan>My </ProfileTitleSpan>Profile
            </ProfileTitle>
            <ProfileList>
              <ProfileItem>
                <ProfileItemSpan>Name</ProfileItemSpan>
                Hamza Nabil
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Birthday</ProfileItemSpan>
                21/1/1996
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Address</ProfileItemSpan>
                Ain shams
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Phone</ProfileItemSpan>
                4444 5555 6666
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Email</ProfileItemSpan>
                hamza@hamza.com
              </ProfileItem>
              <ProfileItem>
                <ProfileItemSpan>Website</ProfileItemSpan>
                <ProfileItemSpan web>www.google.com</ProfileItemSpan>
              </ProfileItem>
            </ProfileList>
          </ProfileSkillsProf>

          <Skills>
            <ProfileSkillsTitle>
              Some <ProfileSkillsTitleSpan>skills</ProfileSkillsTitleSpan>
            </ProfileSkillsTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {barsList}
          </Skills>
        </div>
      </ProfileSkills>
    </>
  )
}
