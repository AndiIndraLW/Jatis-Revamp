import React from "react";
import Image from "next/image";
import styles from "./ValueOverview.module.css";

interface ValueCardItem {
  icon: string;
  title: string;
  description: string;
}

const VALUE_CARDS: ValueCardItem[] = [
  {
    icon: "/assets/section-2-icon-jangkau.png",
    title: "Jangkau banyak pelanggan sekaligus",
    description:
      "Kirim pesan yang sama ke seluruh database pelanggan tanpa mengirim satu per satu.",
  },
  {
    icon: "/assets/section-2-icon-pesan.png",
    title: "Pesan lebih relevan",
    description:
      "Kelompokkan pelanggan agar setiap kelompok menerima pesan yang sesuai kebutuhannya.",
  },
  {
    icon: "/assets/section-2-icon-email.png",
    title: "Email tampil profesional",
    description:
      "Gunakan template interaktif dengan gambar, tombol CTA, dan tombol media sosial.",
  },
  {
    icon: "/assets/section-2-icon-evaluasi.png",
    title: "Evaluasi berbasis data",
    description:
      "Pantau email terkirim, open rate, klik, unsubscribe, dan kegagalan pengiriman.",
  },
];

export default function ValueOverview() {
  return (
    <section
      className={styles.section}
      aria-labelledby="value-overview-title"
      id="value-overview"
    >
      <div className={styles.container}>
        {/* Header Content */}
        <div className={styles.header}>
          <h2 id="value-overview-title" className={styles.title}>
            Kelola Kampanye Email
            <br />
            Marketing Lebih Efektif
          </h2>
          <p className={styles.subtitle}>
            Email Blast dari Jatis Mobile membantu tim marketing dan komunikasi
            pelanggan menjangkau banyak penerima melalui email secara
            terstruktur, dari menyiapkan pesan hingga membaca hasilnya.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.cardsGrid}>
          {VALUE_CARDS.map((card, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  width={48}
                  height={48}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </article>
          ))}
        </div>

        {/* Bottom Audience Tags */}
        <div className={styles.tagsRow} aria-label="Audiens Sasaran">
          <span className={styles.tagsLabel}>Cocok untuk:</span>
          <span className={styles.tagPill}>Tim marketing</span>
          <span className={styles.tagPill}>Tim CRM &amp; komunikasi pelanggan</span>
          <span className={styles.tagDashed}>[Segmen industri tertentu]</span>
        </div>
      </div>
    </section>
  );
}
