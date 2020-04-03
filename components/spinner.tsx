
import {Component} from 'react'
import Cursor from './cursor'

interface Props {
  theposition: number;
  name:string;
  client?:{
    x:number,
    y:number
}
}

class Spinner extends Component<Props> {
  constructor(props){
    super(props);
  }
  render(){
      return(
          <div className="container">
          {/* <Cursor client={this.props.client}/> */}
          <div className="spin">
          {this.props.name.split("").map((letter,i) => letter === " " ? (<div key={i} className="break"/>) :(
                  
              <div 
                  key={i} 
                  id="spin__letters" 
                  style={{
                      "animationDuration": `${this.props.theposition*i*10}s`
                  }}
              >
                  {letter}
              </div>
              ))}
          </div>
              <style jsx>
                  {`
                  .container{
                    height:100vh;
                    overflow:hidden;
                  }
                  .spin{
                    display:flex;
                    justify-content:flex-start;
                    align-items:flex-start;
                    flex-wrap:wrap;
                  }            
                  .break {
                    flex-basis: 100%;
                    height: 0;
                  }
                  #spin__letters{
                    font-size:200px;
                    font-family: "MintGrotesk-Bold";
                    animation-name: spin, depth;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    margin:10px;
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
                  `}
              </style>
          </div>
      )
  }
}

export default Spinner