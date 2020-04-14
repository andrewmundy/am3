
import {Component} from 'react'
import Cursor from './cursor'
import { MouseCoordinates } from './helpers';

interface Props {
  theposition: number;
  name:string;
  client?: MouseCoordinates;
}

class Spinner extends Component<Props> {
  constructor(props){
    super(props);
  }
  render(){
      return(
          <div className="container">
            <div className="spin">
              {this.props.name.split("").map((letter,i) => {
                  const half = this.props.name.length/2;
                  const direction = i < half ? i : i - (half-1)
                  return letter === " " ? (
                    <div key={i} className="break"/>) 
                  :(
                    <div 
                        key={i} 
                        id="spin__letters" 
                        style={{
                            "animationDuration": `${(this.props.theposition*direction)*10}s`
                        }}
                    >
                      {letter}
                  </div>
                )})}
            </div>
              <style jsx>
                  {`
                  .container {
                    // min-height:100vh;
                    overflow:hidden;
                  }
                  .spin {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    margin: 50px;
                  }            
                  .break {
                    flex-basis: 100%;
                    height: 0;
                  }
                  #spin__letters {
                    font-size: 150px;
                    font-family: "MintGrotesk-Bold";
                    animation-name: spin, depth;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    margin: 10px;
                  }
            
                  @keyframes spin {
                    from { transform: rotateY(0deg); }
                    to { transform: rotateY(-360deg); }
                  }
                  @keyframes depth {
                    0% { text-shadow: 0 0 black; }
                    25% { text-shadow: 10px 0 black, 20px 0 black, 30px 0 black, 40px 0 black, 50px 0 black; }
                    50% { text-shadow: 0 0 black; }
                    75% { text-shadow: -10px 0 black, -20px 0 black, -30px 0 black, -40px 0 black, -50px 0 black; }
                    100% { text-shadow: 0 0 black; }
                  }

                  @media (max-width: 700px) {
                    #spin__letters {
                      font-size: 70px;
                    }
                  }

                  `}
              </style>
          </div>
      )
  }
}

export default Spinner