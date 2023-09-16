import {Component} from 'react'

class WelcomeComponent extends Component {
  render() {
    const {name} = this.props
    return <h1> Hi,{name},man</h1>
  }
}

// const WelcomeComponent = () => (
//   <div>
//     <h1> Hello</h1>
//     <p> Hi kaise ho</p>
//   </div>
// )

export default WelcomeComponent
