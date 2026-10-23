import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ValueOverview from "@/components/ValueOverview";
import FiturUtama from "@/components/FiturUtama";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ValueOverview />
        <FiturUtama />
      </main>
    </>
  );
}
