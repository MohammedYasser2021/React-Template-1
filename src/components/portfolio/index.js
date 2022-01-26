import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioTitleSpan,
  PortfolioList,
  PortfolioItem,
  BoxDiv,
  BoxDivImg,
  BoxDivOverlay,
  OverlaySpan,
} from './style.js'
export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    axios.get('json/data.json').then((res) => {
      setPortfolio(res.data.portfolio)
    })
  }, [portfolio])

  const portfolioList = portfolio.map((item) => {
    return (
      <BoxDiv key={item.id}>
        <BoxDivImg src={item.image} alt="" />
        <BoxDivOverlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </BoxDivOverlay>
      </BoxDiv>
    )
  })
  return (
    <>
      <PortfolioSection>
        <PortfolioTitle>
          <PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio
        </PortfolioTitle>
        <PortfolioList>
          <PortfolioItem active>All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>

        <div className="box">{portfolioList}</div>
      </PortfolioSection>
    </>
  )
}
