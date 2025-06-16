import DowntimeSection from './DownSection';
import InstantRecovery from './InstantRecovery';

export default function DowntimeAndRecovery() {
  return (
  <section className="w-full bg-white px-4 sm:px-8 md:px-16 py-8 md:py-12">
  <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
    <InstantRecovery />
    <DowntimeSection />
  </div>
</section>
  );
}
