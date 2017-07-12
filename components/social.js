import styled from 'styled-components';

const Icon= styled.img`
  padding: 0.5rem 1rem 0.5rem 0;
`

export default ({ url, site, color }) => (
	<a href={ url } target='_blank'>
    <Icon src={'https://icon.now.sh/' + site + '/24/' + color } alt={ site } />
  </a>
)
