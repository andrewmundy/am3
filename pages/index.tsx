import {Component} from 'react'
import Explode from '../components/explode'
import Spinner from '../components/spinner'
import Cursor from '../components/cursor'

interface State {
  theposition:number,
  client:MouseCoordinates
}
interface MouseCoordinates {
  x:number,
  y:number
}
class Home extends Component<{},State> {
  constructor(props){
    super(props);
    this.state = {
      theposition:0,
      client:{
        x:0,
        y:0
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  setMousePosition = (e) => {
    this.setState({
      client:{
        x:e.clientX,
        y:e.clientY,
      }
    })
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      theposition: scrolled,
    })
  }

  render(){
  const name = "Andrew Mundy"


  return(
  <div className="app--container" onMouseMove={(e) => this.setMousePosition(e)}>
    <Explode name={name} theposition={this.state.theposition} />
    <Spinner name={name} theposition={this.state.theposition} />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        overflow-x:hidden;
      }
      .mint {
        font-family: "MintGrotesk-Bold";
        font-size: 100px;
      }
      .roto {
        font-family: "Rotor-0";
        font-size: 100px;
      }
      * {
        box-sizing: border-box;
      }
      @font-face {
        font-family: "MintGrotesk-Black";
        src: url("/fonts/Mint-Grotesk/MintGroteskTrialV0.7-Black.otf");
      }
      @font-face {
        font-family: "MintGrotesk-Bold";
        src: url("/fonts/Mint-Grotesk/MintGroteskTrialV0.7-Bold.otf");
      }
      @font-face {
        font-family: "MintGrotesk-Medium";
        src: url("/fonts/Mint-Grotesk/MintGroteskTrialV0.7-Medium.otf");
      }
      @font-face {
        font-family: "Rotor-0";
        src: url("/fonts/Rotor/rotor-trial-0.otf");
      }
      @font-face {
        font-family: "Rotor-90";
        src: url("/fonts/Rotor/rotor-trial-90.otf");
      }
      @font-face {
        font-family: "Rotor-180";
        src: url("/fonts/Rotor/rotor-trial-180.otf");
      }
    `}</style>
  </div>
)}};

export default Home;
