import React from "react";
import styled from 'styled-components';
import '../style/Font.css'
import MainHeader from '../components/Header/MainHeader';
import MainFooter from '../components/Footer/MainFooter';
import theBeautyOfThings from '../assets/Img/theBeautyOfThings.svg'
import things1 from '../assets/Img/things1.svg'

export default function MainPage() {
  return(
    <>
      <MainHeader />
      <ContentsWrap>
        <ProductSection id="the_beauty_of_things">
          <div className="title">물건의 아름다움</div>
          <div className="list">
            <ul>
              <li><a href="/"><img src={things1} alt="" />a</a></li>
              <li><a href="/"><img src="" alt="" />a</a></li>
              <li><a href="/"><img src="" alt="" />a</a></li>
            </ul>
          </div>
        </ProductSection>

      </ContentsWrap>
      <MainFooter />
    </>
  )
}

const ContentsWrap = styled.div`
  height: auto;
  min-height: 100%;

  // margin: 50px 100px;
  // position: relative;
  // min-height: calc(100vh - 680px);
  // padding-bottom: 680px;

  .title {
    font-size: 48px;
    font-family: 'UhBeeSe_hyun';
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    padding: 10.625rem 4.375rem;

    li {
      background: #F5F5F5;
      padding: 25px 54px;
    }
  }
`

const ProductSection = styled.div`
  .title {
    width: 100%;
    height: 21.1875rem;
    background: url(${theBeautyOfThings}) center/cover no-repeat rgba(193, 218, 255, 40%);
    background-blend-mode: multiply;
    opacity: 0.8;
  }
`