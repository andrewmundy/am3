import { Component } from "react";
import Explode from "../components/explode";
import Spinner from "../components/spinner";
import Cursor from "../components/cursor";
import Contact from "../components/contact";
import { MouseCoordinates } from "../components/helpers";
import Jubalee from "../components/jubalee";
import Work from "../components/work";
import Animation from "../components/animation";
import Shapes from "../components/shapes";
import Head from "next/head";

interface State {
  theposition: number;
  client: MouseCoordinates;
  isMobile: Boolean;
}
class Home extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      theposition: 0,
      isMobile: false,
      client: {
        x: 0,
        y: 0,
      },
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.setState({
      isMobile: window.innerWidth < 700,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  setMousePosition = (e) => {
    this.setState({
      client: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  };

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = height > 0 ? winScroll / height : 0;

    this.setState({
      theposition: scrolled,
    });
  };

  findTopPosition = (element) => {
    return this.state.theposition + document.getElementById(element).offsetTop;
  };

  render() {
    const name = "Andrew Mundy";
    return (
      <div
        className="app--container"
        onMouseMove={(e) => this.setMousePosition(e)}
        id="header"
      >
        <Head>
          <title>Andrew Mundy</title>
        </Head>
        <Jubalee name={name} theposition={this.state.theposition} />
        <div
          // style={{ minHeight: height }}
          className="content"
        >
          <Work />
          {/* <Shapes client={this.state.client} theposition={this.state.theposition} /> */}
          <Contact client={this.state.client} isMobile={this.state.isMobile} />
        </div>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            overflow-x: hidden;
            font-family: "Overused Grotesk", sans-serif;
            font-weight: 700;
            background: black;
          }
          .content {
            padding-top: 3rem;
            min-height: 100vh;
          }
          * {
            box-sizing: border-box;
          }
          @font-face {
            font-family: "Overused Grotesk";
            src: url("/fonts/Overused-Grotesk/OverusedGrotesk-Medium.woff2")
              format("woff2");
            font-weight: 500;
            font-display: swap;
          }
          @font-face {
            font-family: "Overused Grotesk";
            src: url("/fonts/Overused-Grotesk/OverusedGrotesk-Bold.woff2")
              format("woff2");
            font-weight: 700;
            font-display: swap;
          }
          input,
          textarea {
            -webkit-appearance: none;
            border-radius: 0;
          }
          @media (max-width: 700px) {
            .content {
              min-height: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
