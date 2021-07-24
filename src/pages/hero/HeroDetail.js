import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/heroes/Hero';

const HeroDetail = ({id}) => {
    return ( 
        <>
            <Navbar />
            <h1>Detalles hero</h1>
            <div className="container">
                <Hero 
                    id={id}
                />
            </div>
        </>
    );
}
 
export default HeroDetail;