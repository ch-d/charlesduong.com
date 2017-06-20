import React from 'react'

class Social extends React.Component {
  render() {
    return (
    	<a href={this.props.url} target='_blank'>
        <img className='grow dim pv2 pr3' src={'https:icon.now.sh/' + this.props.site + '/32/' + this.props.color} alt={this.props.site} />
      </a>
    )
  }
}

export default Social
