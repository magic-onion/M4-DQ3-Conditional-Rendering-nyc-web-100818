import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    div: ''
  }

  handleClicks = (event) => {
    const bullShit = Array.from(event.target.parentElement.children)
    this.setState({
      div: this.whichComp(event.target.id)})
    bullShit.forEach(bull => bull.className = 'item')
    event.target.className = 'item active'
  }

  whichComp = (id) => {
    switch (id) {
      case 'cocktail':
        return <Cocktails />
      case 'pokemon':
        return <Pokemon />
      case 'profile':
        return <Profile />
      case 'photo':
        return <Photos />
    }
  }




  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    // const detailsToDisplay = <div><Cocktail /></div>

    return (
      <div>
        <MenuBar clickEvent={this.handleClicks} itemActive={"item active"}/>
        {this.state.div}
      </div>
    )
  }

}

const styling = {display:'none'}
export default MainBox
