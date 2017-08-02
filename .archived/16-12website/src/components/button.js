import React from 'react'
import Social from './social'
import styled from 'styled-components/';

const Main = styled.a`
  // GRADIENT BORDER
  // border-image: linear-gradient(to left, #74EBD5, #ACB6E5) 100% 1;
  // border-width: 0 0 2px 0px;
  // border-style: solid;

  // LINE ANIMATION
  // position:relative;
  // &:before {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   height: 2px;
  //   bottom: 0;
  //   left: 0;
  //   margin-bottom:-4px;
  //   background: linear-gradient(to left, #74EBD5, #ACB6E5);
  //   visibility: hidden;
  //   transform: translateY(2px);
  //   transition: all 0.3s ease-in-out 0s;
  // }
  //
  // &:hover:before {
  //   visibility: visible;
  //   transform: translateX(0);
  // }

  border-bottom: 2px solid #0000EE;
  text-decoration:none;
  display:inline-block;
  line-height:1rem;
  margin-top:1rem;
  padding-bottom:4px;

  &:hover, &:focus {
    padding-bottom:6px;
    margin-bottom:-2px;
  };
  &:visited, &:active {
    border-bottom:2px solid #551A8B
    text-decoration:none;
  }
`

const Moji = styled.span`
  margin-left:0.5rem;
`

export default () => (
  <div>
  	<Main href="http://work.charlesduong.com">
      view design work
  	</Main>
    <Moji>👀</Moji>
  </div>
)
