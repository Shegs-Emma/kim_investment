import type { NextPage } from 'next';
import Footer from '../components/footer';
import AboutUs from '../components/aboutUs';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

const About: NextPage = () => {
  return (
    <Layout title='Kim Investment | About Us'>
      <Navbar />
      <AboutUs />
      <Footer />
    </Layout>
  );
};

export default About;
