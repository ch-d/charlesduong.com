import styled from 'styled-components';

const H1 = styled.h1`
	font-family: IBM Plex Sans;
	color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	font-weight:400
`;

const H2 = styled.h2`
	font-family: IBM Plex Sans;
	color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
	margin-bottom:0
`;

const Caption = styled.h6`
	color: ${props => props.theme.colors.blue};
	font-size: 0.75rem;
	text-align:right;
	font-weight:100;
`;

const Para = styled.p`
	color: ${props => props.theme.colors.black};
  font-size: 1rem;
  line-height:1.5;
`;

export {
  H1,
  H2,
	Caption,
  Para
}
