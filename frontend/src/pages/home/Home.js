import Landing from '../Landing/Landing';
import Section1 from '../../components/LandingSections/Section1';
import Section2 from '../../components/LandingSections/Section2';
import Section3 from '../../components/LandingSections/Section3';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return <>
    <Landing />
    <Section1 />
    <Section2/>
    <Section3/>
    <Footer/>
  </>;
}
