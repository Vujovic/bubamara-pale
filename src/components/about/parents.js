import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ParentsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "onama2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Parents>
      <h1>Савјет родитеља</h1>
      <div className="content">
        <div className="image">
          <Img fluid={data.image1.childImageSharp.fluid} />
        </div>
        <div className="parents">
          <p>
            Родитељи чија дјеца похађају цјелодневни боравак у вртићу имају
            право да оснују Савјет родитеља. Савјет родитеља по правилу одржава
            националну структуру дјеце у вртићу и једнаку заступљеност полова.
          </p>
          <ul>
            Савјет родитеља обавља сљедеће послове :
            <li>Залаже се за права и интересе дјеце,</li>
            <li>
              Промовише интересе предшколске установе у јединици локалне
              заједнице,
            </li>
            <li>Презентује ставове родитеља Управном одбору вртића,</li>
            <li>Подстиче ангажман родитеља у раду вртића,</li>
            <li>
              Информише Управни одбор о својим ставовим када оцијени да је то
              потребно, или на захтјев Управног одбора, о сваком питању које се
              односи на рад прешколске установе,
            </li>
            <li>Кандидује представника родитеља у Управни одбор.</li>
          </ul>
          <p>
            Савјет родитеља своје приједлоге, питања и ставове упућује Управном
            одбору, директору и стручним органима вртића. Савјет родитеља доноси
            пословник о раду Савјета родитеља и бира предсједника.
          </p>
          <p>
            Предсједник Савјета родитеља у договору са директором вртића
            заказује састанке Савјета родитеља, одређује дневни ред и термин
            одржвања састанака. Састанци Савјета родитеља су јавни и њима могу
            присуствовати чланови Стручног вијећа и родитељи који су
            заинтересовани за одређену проблематику која се налази на дневном
            реду.
          </p>
          <p>
            Чланови Стручног вијећа и родитељи који желе присуствовати састанку
            Савјета родитеља морају се претходно најавити предсједнику Савјета
            родитеља и немају право одлучивања.
          </p>
          <p>
            Одлуке Савјета родитеља се доносе јавним изјашњавањем већине од
            присутних чланова Савјета родитеља.
          </p>
        </div>
      </div>
    </Parents>
  )
}

export default ParentsSection

const Parents = styled.section`
  background-color: #ffec89;
  color: #ff0066;
  min-height: 90vh;
  padding: 75px 10px 75px 10px;
  z-index: 0;
  text-align: center;
  > h1 {
    border-bottom: 2px solid #3a9a9f;
    display: inline-block;
    font-size: 24px;
    margin: 20px 0;
    text-align: center;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    text-align: justify;
  }
  .parents {
    padding: 20px;
    > * {
      margin: 20px 0;
    }
    p,
    li {
      max-width: 700px;
      padding: 0 10px;
      text-align: justify;
    }
  }
  .image {
    max-width: 40vw;
    width: 600px;
  }
  @media screen and (max-width: 1024px) {
    .image {
      max-width: 70vw;
    }
  }
`
