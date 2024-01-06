import React from 'react';
import styled from 'styled-components'
import menuicon from '../../assets/Icon/menuicon.svg'
import searchicon from '../../assets/Icon/searchicon.svg'
import shoppingicon from '../../assets/Icon/shoppingicon.svg'
import usericon from '../../assets/Icon/usericon.svg'
import '../../style/Font.css'

export default function MainHeader() {
  return(
    <>
      <BasicHeaderStyled>
        <LeftMenu>
          <MenuIcon />
        </LeftMenu>
        <MainTitle>
          <a href="/">푸른노을</a>
        </MainTitle>
        <RightMenu>
          <SearchIcon />
          <UserIcon href="/"/>
          <ShoppingIcon href="/" />
        </RightMenu>
      </BasicHeaderStyled>
    </>
  )
}

const BasicHeaderStyled = styled.div`
  height: 127px;
  margin: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 0px 1px red; 
`
const LeftMenu = styled.div`
  position: absolute;
  left: 0;
`
  
export const MenuIcon = styled.button`
  width: 50px;
  height: 50px;
  background: url(${menuicon}) center/cover no-repeat;
`

const MainTitle = styled.h1`
  a{
    font-family: 'UhBeeSe_hyun';
    font-size: 4rem;
  }
`

const RightMenu = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  gap: 15px;

  button, a {
    width: 50px;
    height: 50px;
  }
`

export const SearchIcon = styled.button`
  background: url(${searchicon}) center/cover no-repeat;
`

export const UserIcon = styled.a`
  background: url(${usericon}) center/cover no-repeat;
`

export const ShoppingIcon = styled.a`
  background: url(${shoppingicon}) center/cover no-repeat;
`
