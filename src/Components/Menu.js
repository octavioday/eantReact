import React from 'react'
import Link from './Link'

class Menu extends React.Component {

  render(){
    {/*
    const menu = this.props.items.map( (e, i) => <a href={e.url} target={ e.blank ? "_blank" : "_self" } key={i}>{e.text}</a> )
    return menu
    */}
    const menu = this.props.items.map( (e, i) => <Link url={e.url} blank={e.blank} text={e.text} key={i} />)

    return <nav>{menu}</nav>
  }

}
export default Menu