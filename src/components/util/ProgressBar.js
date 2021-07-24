import { Progress } from '../util/Progress';
import './progress.css';

const ProgressBar = ({ property, width, accumulator=0 }) => {
    if (width==="null") {
        width = '???';
    }
    return (  
        <div className="powerstats d-flex justify-content-around align-items-center">
            <p className="stats" >{property}: <b>{accumulator!== 0 ? accumulator : width }</b></p>
            <div className={`progress-bar ${property} stripes shine`}>
                <Progress width={width} />
            </div>
        </div>
    );
}

 
export default ProgressBar;