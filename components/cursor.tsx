import {Component} from 'react'
import { MouseCoordinates } from './helpers';

interface Props{
    client?: MouseCoordinates;
}

class Cursor extends Component<Props> {
    constructor(props){
      super(props);
    }
    roundNumbers = (x) => {
        const stringify = this.props.client.x.toString().split('');
        let newNum = 0;
        
        for(let i=0;i < stringify.length; i++){
            if(stringify[i] === "0"){
                newNum = 1
            }
        }
        return newNum
    }
    render(){
        return(
            <div 
                className="cursor" 
                style={{
                    width:"40px",
                    left:`${this.props.client.x}px`,
                    top:`${this.props.client.y}px`,
                    translate:"(-50%, -50%)",
                    scale:`(${1 + Math.abs(this.props.client.x ) * 0.001}, ${1 + Math.abs(this.props.client.y) * 0.001})`
                }}>
                <svg fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#a)">
                        <path fill="none" d="M0 0h30v30H0z"/>
                        <path 
                            d={`
                                M16
                                3c4 0 8 2 10 
                                5.635C27.26 10 28 12 28 
                                16c0 3-1 6-4 
                                ${this.roundNumbers(1)}.534C21.227 25 18 28 15 
                                28c-1.203 0-2.695-.388-4.256-1.04a23.447 23 0 
                                01-4.11-2.246c-1.717-1.183-2.838-2.484-3.55-3.983C2.364 19 2 17 2 
                                15c0-4.29 2.083-7.267 5.635-9A12 12 0 0115 
                                3z`
                            }
                            stroke="#000" 
                            strokeWidth="4"
                            style={{"scale":`(${1 + Math.abs(this.props.client.x ) * 0.001}, ${1 + Math.abs(this.props.client.y) * 0.001})`}}
                            />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h30v30H0z"/>
                        </clipPath>
                    </defs>
                </svg>
                <style jsx>{`
                    .cursor{
                        position:absolute;
                    }
                `}</style>
            </div>
        )
    }
}

export default Cursor