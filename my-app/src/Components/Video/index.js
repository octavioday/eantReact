import React from 'react'

class Video extends React.Component {

  render(){
    return <iframe src={`https://www.youtube.com/embed/${this.props.id}?autoplay=${this.props.play == "yes" ? 1 : 0}`}  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={ { width:480, height:320 }}></iframe>
  }

}
export default Video