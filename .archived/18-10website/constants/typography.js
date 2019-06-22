import styled from 'styled-components';

const H1 = styled.h1`
	color: ${props => props.theme.colors.black};
  font-size: 1.5rem;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	font-weight: 700
`;

const H2 = styled.h2`
	color: ${props => props.theme.colors.black};
  font-size: 1.25rem;
`;

const Caption = styled.h6`
	color: ${props => props.theme.colors.black};
	font-size: 0.75rem;
	text-align:right;
	font-weight: 400;
	opacity: .8;
`;

const Para = styled.p`
	color: ${props => props.theme.colors.black};
  font-size: .875rem;
  line-height: 1.5;
	margin-top: 0;
	break-inside: avoid;
`;

export {
  H1,
  H2,
	Caption,
  Para
}
