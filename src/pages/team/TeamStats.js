import React, {useContext, useEffect} from 'react';
import teamContext from '../../context/team/teamContext';
import ProgressBar from '../../components/util/ProgressBar';

const TeamStats = () => {

    const TeamContext = useContext(teamContext);
    const { team, teamHeight, teamStats, teamWeight, getTeamAverage, getTeamStats } = TeamContext;
 
    // console.log(teamStats);
    // console.log(listTeamStats);
    
    useEffect(()=> {
        getTeamAverage();
        getTeamStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[team]);

    return ( 
        <>
            <h1 className="text-left">ESTADOS DEL EQUIPO</h1>
            <hr/>
            <div className="bg-secondary p-4 row">
                <div className="col-12 col-md-7 col-lg-7">
                    <h4>TIPO DE EQUIPO : <span className="text-info">
                        { teamStats.length !== 0  ?
                        teamStats[0][0].toUpperCase(): '???'}
                    </span></h4>
                    <h4>ALTURA PROMEDIO : <b className="text-info">{ isNaN(teamHeight) ? '???' : `${teamHeight}cm` }</b></h4>
                    <h4>PESO PROMEDIO : <b className="text-info">{ isNaN(teamWeight) ? '???' : `${teamWeight}kg` }</b></h4>
                </div>
                <div className="col-12 col-md-5 col-lg-5">
                    {
                        team?.length !== 0 
                            ?
                            (
                            teamStats.map((stats,index) =>
                                <ProgressBar 
                                    key={index}
                                    property={stats[0]}
                                    width={(stats[1]/600*100).toFixed(2)}
                                    accumulator={stats[1]}
                                />
                            )
                            )
                            : null
                    }
                </div>
            </div>
        </>
    );
}
 
export default TeamStats;