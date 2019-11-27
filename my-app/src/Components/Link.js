import React from 'react'
import './Link.css'

class Link extends React.Component {

  render(){
    return <a className="App-link" href={this.props.url} target={this.props.blank == "yes" ? "_blank" : "_self"} rel="noopener noreferrer" >{this.props.text}</a>
  }

}
export default Link