import {Component} from 'react'
import Explode from '../components/explode'
import Spinner from '../components/spinner'
import Cursor from '../components/cursor'
import Contact from '../components/contact'
import MyApp from './_app'
import { MouseCoordinates } from '../components/helpers'
import Jubalee from '../components/jubalee'
import Animation from '../components/animation'



interface State {
  theposition:number,
  client:MouseCoordinates
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
    <Jubalee name={name} theposition={this.state.theposition}/>
    {/* <Spinner name={name} theposition={this.state.theposition} /> */}
    <Animation theposition={this.state.theposition}/>
    <Explode name={"Front-end Developer & Designer"} theposition={this.state.theposition} />
    <Contact client={this.state.client} />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        overflow-x:hidden;
        font-family: "MintGrotesk-Bold";
        overflow-x:hidden;
        background: rgb(0,0,0);
        background: linear-gradient(180deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 50%,rgb(0, 0, 0) 50.1%,rgb(0, 0, 0) 100%);
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
      input, textarea {
        -webkit-appearance: none;
        border-radius: 0;
      }
    `}</style>
  </div>
)}};

export default Home;
