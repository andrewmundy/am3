import {Component} from 'react'
import { MouseCoordinates } from './helpers';

  interface Props {
    theposition?: number;
    // name:string;
    // client?: MouseCoordinates;
  }

class Animate extends Component<Props> {
    constructor(props){
      super(props);
    }

    render(){
        return(
            <div className="container">
                <style jsx>
                    {`
                    .container{

                    }


                    @media (max-width: 700px) {

                    }
                    `}
                </style>
            </div>
        )
    }
}

export default Animate