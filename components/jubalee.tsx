import {Component} from 'react'
import { MouseCoordinates } from './helpers';

  interface Props {
    theposition?: number;
    name?:string;
    client?: MouseCoordinates;
  }

class Jubalee extends Component<Props> {
    constructor(props){
      super(props);
    }
    render(){
        const { name, theposition } = this.props
        return(
            <div className="container">
                <div className="soup">
                    {name.split("").map((letter,i) => {
                        const half = name.length/2;
                        const direction = i < half ? i : i - (half-1);
                        const everyOther = i % 2 != 0 ? -i : i;
                        const whack = (everyOther * direction) * theposition;

                        return letter === " " ? ( 
                            <div key={i} className="break" /> ) 
                        :(
                            <div 
                                key={i} 
                                id="soup__letters" 
                                style={{
                                    "rotate": `${whack * 30}0deg`,
                                    "transform":`translate3d(${whack * 50}px, ${whack * 50}px, ${whack * 50}px)`
                                }}
                            >
                                {letter}
                            </div>
                        )
                    })}
                </div>
                <style jsx>
                    {`
                    .container{
                        overflow: hidden;
                        height: 80vh;
                        margin: 50px;
                    }
                    .break {
                        flex-basis: 100%;
                        height: 0;
                      }
                    .soup{
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                        flex-wrap:wrap;
                        margin:50px;
                    }
                    #soup__letters{
                        font-size:100px;
                        font-family: "MintGrotesk-Bold";
                    }
                    
                    @media (max-width: 700px) {
                        .container{
                            margin:10px;
                        }
                      }
                    `}
                </style>
            </div>
        )
    }
}

export default Jubalee