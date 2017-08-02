import React from 'react'
import Social from './social'
import styled from 'styled-components/';

const Main = styled.a`
  // remove default button styles
  cursor: pointer;
  text-decoration:none;
  color:black;

  // Main styles
  display:inline-block;
  padding: 1rem 2rem;
  margin-top:1rem;
  background-color:#fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  };
`

export default () => (
	<Main href="http://work.charlesduong.com">
    design work 👀
	</Main>
)
