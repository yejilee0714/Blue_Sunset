import React from "react";
import styled from 'styled-components';
import footerBg from '../../assets/Img/footerBg.svg'
import blogicon from '../../assets/Icon/icon-blog.svg'
import facebookicon from '../../assets/Icon/icon-facebook.svg'
import instaicon from '../../assets/Icon/icon-insta.svg'
import youtubeicon from '../../assets/Icon/icon-youtube.svg'
import '../../style/Font.css'

export default function MainFooter() {
  return(
    <>
      <BasicFooterStyled>
        <FooterLeft>
          <FooterLTop>
            <a href="/" className="WebTitle">아름다운 순간들을 담아내는 공간, <br /><span>푸른노을</span></a>
            <ul>
              <li><a href="/">회사소개</a></li>
              <li><a href="/">이용약관</a></li>
              <li><a href="/">개인정보처리방침</a></li>
            </ul>
          </FooterLTop>
          <FooterLBot>
              <div className="webInfoTitle">쇼핑몰 기본정보</div>
              <WebInfo>
              <div id="company_name">
                <span className="field">상호명 </span>
                <span className="value">푸른노을</span>
              </div>
              <div id="president_name">
                <span className="field">대표자명 </span>
                <span className="value">이예지</span>
              </div>
              <div id="address">
                <span className="field">사업장 주소 </span>
                <span className="value">대구광역시 고백구 행복동</span>
              </div>
              <div id="phone">
                <span className="field">대표번호 </span>
                <span className="value">010-1234-5678</span>
              </div>
              <div id="company_regno">
                <span className="field">사업자 등록번호 </span>
                <span className="value">000-**-00000</span>
              </div>
            </WebInfo>
            <p className="copyright">Copyright © 푸른노을. All Rights Reserved.</p>
          </FooterLBot>
        </FooterLeft>
        <FooterRight>
          <SnsList>
            <a href="/"><img src={blogicon} alt="blog" /></a>
            <a href="/"><img src={facebookicon} alt="blog" /></a>
            <a href="/"><img src={instaicon} alt="blog" /></a>
            <a href="/"><img src={youtubeicon} alt="blog" /></a>
          </SnsList>
        </FooterRight>
    </BasicFooterStyled>
    </>
  )
}

const BasicFooterStyled = styled.div`
  height: 42.5rem;
  background: url(${footerBg}) center/cover no-repeat;
  display: flex;
  padding: 3.125rem 4.375rem;
  justify-content: space-between;

  // wrap에 min-height: 100%, padding-bottom: (footer 높이) 값 지정하기
  // position: relative;
  // transform: translateY(0%);
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FooterLTop = styled.div`
  .WebTitle{
    display: block;
    font-family: 'UhBeeSe_hyun';
    font-size: 3rem;

    span {
      font-size: 4rem;
      font-weight: bold;
    }
  }

  li {
    margin-right: 1.25rem;
    font-size: 1.1875rem;
    line-height: 5;
  }
`

const FooterLBot = styled.div`
  margin-top: 7.625rem;
 
  .webInfoTitle {
    margin-bottom: .625rem;
    font-weight: bold;
 }

 .copyright {
    margin-top: 1rem;
 }
`
const WebInfo = styled.div`
  max-width: 28.75rem;
  display: flex;
  flex-wrap: wrap;
  line-height: 2;

  div {
    margin-right: 1.5rem;
  }
  
  .field{
    font-weight: bold;
  }
` 

const FooterRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: flex-end;
`

const SnsList = styled.div`
  a {
    margin-left: 1rem;
  }
`