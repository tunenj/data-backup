import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Home/Hero/Hero';
import TrustedTeams from '@/components/Home/TrustedTeams';
import ChooseUs from '@/components/Home/ChooseUs'
import BackupRestore from '@/components/Home/BackupRestore'
import Footer from '@/components/Footer/Footer';
import Integrations from '@/components/Home/Integrations'
import PricingTable from '@/components/Home/PricingTable';


export default function Home() {
  return (
    <>
      <Head>
        <title>Secure Data Backup Solutions</title>
        <meta name="description" content="Automated, secure, and scalable backups for business continuity" />
      </Head>
      <main className="relative">
        <Navbar />
        <Hero />
        <TrustedTeams />
        <ChooseUs />
        <BackupRestore />
        <Integrations />
        <PricingTable />
        <Footer />
      </main>
    </>
  );
}