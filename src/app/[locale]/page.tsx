import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import DeepDive from '@/components/DeepDive';
import BasicInfo from '@/components/BasicInfo';
import HistoryTimeline from '@/components/HistoryTimeline';
import RouteSection from '@/components/RouteSection';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import NearbyExplorations from '@/components/NearbyExplorations';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <DeepDive />
        <BasicInfo />
        <HistoryTimeline />
        <RouteSection />
        <HoursSection />
        <TicketsSection />
        <TransportSection />
        <Gallery />
        <Reviews />
        <NearbyExplorations />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
