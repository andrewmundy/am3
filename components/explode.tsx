import {Component} from 'react'
import { MouseCoordinates } from './helpers';

  interface Props {
    theposition: number;
    name:string;
    client?: MouseCoordinates;
  }

class Explode extends Component<Props> {
    constructor(props){
      super(props);
    }
    render(){
        const { theposition } = this.props
        const newPosition = theposition*1000 < 500 ? 0 : theposition-0.5
        return(
            <div className="container">
                <div className="expode">
                    {this.props.name.split("").map((letter,i) => {
                        const half = this.props.name.length/2;
                        const direction = i < half ? i : i - (half-1);

                        return letter === " " ? (<div key={i} className="break"/>) :(
                        <div 
                            key={i} 
                            id="explode__letters" 
                            style={{
                                "transform":`translate3d(${newPosition * 1000 * direction}px, ${newPosition * 1000 * direction}px, ${newPosition * 1000 * direction}0px)`, 
                                "textShadow":`0px ${newPosition * direction * 1000}px 0 black`
                            }}
                        >
                            {letter}
                        </div>
                    )})}
                </div>
                <style jsx>
                    {`
                    .container{
                        height:100vh;
                        overflow:hidden;
                    }
                    .break {
                        flex-basis: 100%;
                        height: 0;
                      }
                    .expode{
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                        flex-wrap:wrap;
                        margin:50px;
                    }
                    #explode__letters{
                        font-size:${this.props.name.length*3}px;
                        font-family: "MintGrotesk-Bold";
                        animation-name: spin, depth;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                    }

                    @media (max-width: 700px) {
                        #explode__letters {
                          font-size: 50px;
                        }
                        .explode{
                          margin:
                        }
                      }
                    `}
                </style>
            </div>
        )
    }
}

export default Explode