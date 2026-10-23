import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ValueOverview from "@/components/ValueOverview";
import FiturUtama from "@/components/FiturUtama";
import UseCases from "@/components/UseCases";
import CaraKerja from "@/components/CaraKerja";
import MengapaJatis from "@/components/MengapaJatis";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ValueOverview />
        <FiturUtama />
        <UseCases />
        <CaraKerja />
        <MengapaJatis />
      </main>
    </>
  );
}
