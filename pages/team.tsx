import type { NextPage } from 'next';
import Footer from '../components/footer';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Team from '../components/team';

const TeamPage: NextPage = () => {
  return (
    <Layout title='Kim Investment | Team'>
      <Navbar />
      <Team />
      <Footer />
    </Layout>
  );
};

export default TeamPage;
