import Navbar from '../../components/layout/Navbar';
import Team from './Team';
import TeamStats from './TeamStats';

const MyTeam = () => {
    return ( 
        <>
            <Navbar />
            <div className="container">
                <TeamStats />
                <Team />
            </div>
        </>
    );
}
 
export default MyTeam;