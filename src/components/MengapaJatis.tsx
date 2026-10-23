import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./MengapaJatis.module.css";

interface ReasonCardItem {
  icon: string;
  title: string;
  description?: string;
  dashedBox?: string;
}

const REASONS: ReasonCardItem[] = [
  {
    icon: "/assets/section-6-20-tahun.png",
    title: "20 tahun melayani industri",
    description:
      "Pengalaman panjang menyediakan solusi komunikasi untuk bisnis di Indonesia.",
  },
  {
    icon: "/assets/section-6-klien.png",
    title: "500+ klien korporat",
    description:
      "Dipercaya oleh lebih dari 500 perusahaan untuk kebutuhan komunikasi pelanggan.",
  },
  {
    icon: "/assets/section-6-terverifikasi.png",
    title: "Tersertifikasi ISO 9001 & 27001",
    description:
      "Standar manajemen mutu dan keamanan informasi. [Butuh konfirmasi terkait cakupan sertifikasi untuk layanan email]",
  },
  {
    icon: "/assets/section-6-satu.png",
    title: "Satu penyedia untuk banyak kanal",
    description:
      "Selain email, Jatis Mobile menyediakan WhatsApp Business API dan SMS Broadcast.",
  },
  {
    icon: "/assets/section-6-dukungan.png",
    title: "Dukungan & implementasi",
    dashedBox: "[Model dukungan dan pendampingan implementasi terverifikasi]",
  },
  {
    icon: "/assets/section-6-pengelolaan.png",
    title: "Pengelolaan data pelanggan",
    dashedBox: "[Security / compliance information to be supplied]",
  },
];

export default function MengapaJatis() {
  return (
    <section
      className={styles.section}
      aria-labelledby="mengapa-jatis-title"
      id="mengapa-jatis"
    >
      <div className={styles.container}>
        {/* Left Column Overview */}
        <div className={styles.leftCol}>
          <h2 id="mengapa-jatis-title" className={styles.title}>
            Mengapa
            <br />
            Menggunakan
            <br />
            Email Marketing
            <br />
            dari Jatis Mobile?
          </h2>
          <p className={styles.description}>
            Jatis Mobile adalah penyedia solusi komunikasi bisnis di Indonesia.
            Email Marketing menjadi bagian dari rangkaian kanal yang kami kelola
            untuk klien korporat.
          </p>
          <Link href="#tentang-kami" className={styles.aboutLink}>
            <span>Tentang Jatis Mobile</span>
            <span className={styles.aboutArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Right Column Cards Grid */}
        <div className={styles.cardsGrid}>
          {REASONS.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <Image
                    src={item.icon}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                    className={styles.cardIcon}
                  />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              {item.description && (
                <p className={styles.cardDesc}>{item.description}</p>
              )}

              {item.dashedBox && (
                <div className={styles.dashedBox}>{item.dashedBox}</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
