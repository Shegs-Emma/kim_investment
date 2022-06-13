import type { NextPage } from 'next';
import Footer from '../components/footer';
import ContactUs from '../components/contactUs';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

const About: NextPage = () => {
  return (
    <Layout title='Kim Investment | Contact Us'>
      <Navbar />
      <ContactUs />
      <Footer />
    </Layout>
  );
};

export default About;
