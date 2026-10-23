import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Pricing.module.css";

interface PricingFactor {
  icon: string;
  title: string;
  description: string;
}

const FACTORS: PricingFactor[] = [
  {
    icon: "/assets/section-8-kebutuhan.png",
    title: "Kebutuhan kampanye",
    description: "Jenis dan frekuensi pengiriman email",
  },
  {
    icon: "/assets/section-8-ukuran.png",
    title: "Ukuran database",
    description: "Jumlah kontak yang akan dijangkau",
  },
  {
    icon: "/assets/section-8-fitur.png",
    title: "Fitur yang dibutuhkan",
    description: "Template, grup kontak, laporan",
  },
  {
    icon: "/assets/section-8-dukungan.png",
    title: "Dukungan implementasi",
    description: "Kebutuhan setup dan pendampingan",
  },
];

const PROCESS_STEPS = [
  "Tim kami mempelajari kebutuhan kampanye Anda",
  "Demo produk sesuai skenario bisnis Anda",
  "Anda menerima penawaran yang disesuaikan",
];

export default function Pricing() {
  return (
    <section
      className={styles.section}
      aria-labelledby="pricing-title"
      id="pricing"
    >
      <div className={styles.container}>
        {/* Left Column: Title & 4 Factors Grid */}
        <div className={styles.leftCol}>
          <h2 id="pricing-title" className={styles.title}>
            Paket yang Disesuaikan
            <br />
            dengan Kebutuhan
            <br />
            Bisnis Anda
          </h2>
          <p className={styles.subtitle}>
            Setiap bisnis memiliki kebutuhan kampanye yang berbeda.
            <br />
            Penawaran disusun berdasarkan faktor berikut:
          </p>

          <div className={styles.factorsGrid}>
            {FACTORS.map((factor, index) => (
              <div key={index} className={styles.factorCard}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={factor.icon}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                    className={styles.factorIcon}
                  />
                </div>
                <div className={styles.factorContent}>
                  <h3 className={styles.factorTitle}>{factor.title}</h3>
                  <p className={styles.factorDesc}>{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Consultation Card */}
        <div className={styles.consultationCard}>
          <h3 className={styles.cardHeading}>Setelah Anda menghubungi kami</h3>

          <div className={styles.stepsList}>
            {PROCESS_STEPS.map((stepText, idx) => (
              <div key={idx} className={styles.stepRow}>
                <div className={styles.stepNumberCircle} aria-hidden="true">
                  {idx + 1}
                </div>
                <p className={styles.stepText}>{stepText}</p>
              </div>
            ))}
          </div>

          <div className={styles.packageDashedBox}>
            [Package information to be confirmed] &mdash; misalnya, model per
            email terkirim, paket bulanan, atau kontrak enterprise.
          </div>

          <Link
            href="#kontak"
            className={styles.ctaButton}
            id="cta-diskusikan-kebutuhan"
          >
            Diskusikan Kebutuhan Anda
          </Link>
        </div>
      </div>
    </section>
  );
}
