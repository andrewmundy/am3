import {Component} from 'react'

  interface Props {
    theposition: number;
    name:string;
    client?:{
        x:number,
        y:number
    }
  }

class Explode extends Component<Props> {
    constructor(props){
      super(props);
    }
    render(){
        return(
            <div className="container">
            <div className="expode">
                {this.props.name.split("").map((letter,i) => letter === " " ? (<div key={i} className="break"/>) :(
                <div 
                    key={i} 
                    id="explode__letters" 
                    style={{
                        "transform":`translate3d(${this.props.theposition*1000*i}px, ${this.props.theposition*1000*i}px, ${this.props.theposition*1000*i}0px)`, 
                        "textShadow":`0px ${this.props.theposition*i*1000}px 0 black`
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
                    .break {
                        flex-basis: 100%;
                        height: 0;
                      }
                    .expode{
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                        flex-wrap:wrap;
                    }
                    #explode__letters{
                        font-size:200px;
                        font-family: "MintGrotesk-Bold";
                        animation-name: spin, depth;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;
                        margin:10px;
                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Explode