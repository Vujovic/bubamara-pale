import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "onama1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Hero>
        <h1>О нама</h1>
        <div className="content">
          <div className="lead">
            <p>
              Наш вртић је предшколска установа верификована од стране
              Министранства просвјете и културе Републике Српске, усмјерена ка
              пружању његе и подршци при образовању и васпитању дјеце од јаслица
              до предшколског узраста.
            </p>
            <p>
              Смјештени смо у самом центру Пала, а објекат је намјенски грађен
              за потребе вртића,од чврстог материјала и у потпуности одговара
              намјени. Велику пажњу поклањамо квалитету средине у којој дјеца
              бораве. Васпитно-образовни рад са дјецом организован је у
              савремено опремљеним просторијама на преко 650 м². Објекат је
              покривен видео надзором и у потпуности климатизован и садржи:
              седам радних соба за рад са дјецом, простор за заједничке
              активности, гардеробере, санитарне просторе за дјецу, санитарни
              простор за одрасле, савремено опремљену кухињу, трпезарију.
            </p>
            <p>
              Такође, за потребе дјеце урађен је и прилагођен њиховим потребама
              простор на отвореном, односно двориште које се простире на преко
              5000 м². У нашем дворишту централно мјесто заузима игралиште за
              дјецу са тобоганима, бројним клацкалицама, љуљашкама, вртешкама,
              пјешчаником и пењалицама. Један дио дворишта чини травната
              површина на којој се налази терен за фудбал и друге разне спортске
              активности.
            </p>
            <p>
              Све што радимо у нашем вртићу оријентисано је ка свеобухватном
              развоју малишана од најранијег дјетињства. То постижемо путем
              нашег динамичног програма за предшколско образовање, који спроводи
              квалификовано особље заједно са стручним сарадником, водећи притом
              рачуна да потребе сваког појединачног дјетета буду испуњене.
            </p>
          </div>
          <div className="image">
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
        </div>
      </Hero>
    </>
  )
}

export default HeroSection

const Hero = styled.section`
  background-color: #ffec89;
  color: #ff0066;
  min-height: 90vh;
  padding: 150px 10px 75px 10px;
  z-index: 0;
  > h1 {
    font-size: 36px;
    margin: 20px 0;
    text-align: center;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    flex-wrap: wrap;
  }
  .lead {
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
