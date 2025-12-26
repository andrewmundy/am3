import { Component } from "react";

interface Props {}
interface State {}

class Work extends Component<Props, State> {
  constructor(props) {
    super(props);
    // this.state = {
    // };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <h1>
          Hi <span className="wave">👋</span>
        </h1>
        <h1>Feel free to reach out with anything</h1>
        <style jsx>
          {`
            h1 {
              color: white;
            }
            .container {
              background: black;
              padding: 0 4em;
            }
            .wave {
              display: inline-block;
              animation: wave 2.5s infinite;
              transform-origin: 70% 70%;
            }
            @keyframes wave {
              0% {
                transform: rotate(0deg);
              }
              10% {
                transform: rotate(14deg);
              }
              20% {
                transform: rotate(-8deg);
              }
              30% {
                transform: rotate(14deg);
              }
              40% {
                transform: rotate(-4deg);
              }
              50% {
                transform: rotate(10deg);
              }
              60% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(0deg);
              }
            }
            @media (max-width: 700px) {
              .container {
                padding: 1em;
              }
              h1 {
                font-size: 20px;
              }
            }
          `}
        </style>
      </div>
    );
  }
}

export default Work;
