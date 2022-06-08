import type { NextPage } from 'next';
// import Footer from '../components/footer';
import Landing from '../components/landing';
import Layout from '../components/layout';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  return (
    <Layout title='Adsift | Landing'>
      <Navbar />
      <Landing />
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
