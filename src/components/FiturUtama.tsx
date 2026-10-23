import React from "react";
import Image from "next/image";
import styles from "./FiturUtama.module.css";

interface FeatureItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  checklist: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const FEATURES: FeatureItem[] = [
  {
    id: "interactive-template",
    eyebrow: "Interactive Template",
    title: "Ratusan Template Email\nInteraktif Siap Pakai",
    description:
      "Mulai kampanye dari ratusan contoh email marketing interaktif, lalu sesuaikan isinya dengan kebutuhan bisnis Anda.",
    checklist: [
      "Tambahkan gambar, tombol CTA, dan tombol media sosial",
      "Susun template sendiri sesuai kebutuhan kampanye",
      "Persiapan desain lebih cepat untuk setiap pengiriman",
    ],
    imageSrc: "/assets/sectiion-3-image1.png",
    imageAlt: "Template Email Interaktif Siap Pakai Jatis Mobile",
    reverse: false,
  },
  {
    id: "grup-kontak",
    eyebrow: "Grup Kontak",
    title: "Kirim Pesan yang\nSesuai untuk Setiap\nKelompok Pelanggan",
    description:
      "Klasifikasikan pelanggan ke dalam grup kontak agar pesan yang Anda kirim sesuai dengan kebutuhan masing-masing.",
    checklist: [
      "Kelompokkan pelanggan berdasarkan kebutuhan komunikasi",
      "Kirim ke grup tertentu, bukan selalu ke seluruh database",
      "Tanpa batasan jumlah database email yang valid",
    ],
    imageSrc: "/assets/sectiion-3-image2.png",
    imageAlt: "Grup Kontak Pelanggan Jatis Mobile",
    reverse: true,
  },
  {
    id: "laporan-penggunaan",
    eyebrow: "Laporan Penggunaan",
    title: "Pahami Hasil Setiap\nKampanye Email",
    description:
      "Analisis aktivitas email blast melalui laporan yang komprehensif untuk menentukan langkah kampanye berikutnya.",
    checklist: [
      "Lihat jumlah email terkirim dan open rate",
      "Pantau klik, unsubscribe, dan pengiriman gagal",
      "Gunakan data untuk memperbaiki kampanye berikutnya",
    ],
    imageSrc: "/assets/sectiion-3-image3.png",
    imageAlt: "Laporan Penggunaan dan Analisis Kampanye Email Jatis Mobile",
    reverse: false,
  },
];

export default function FiturUtama() {
  return (
    <section
      className={styles.section}
      aria-labelledby="fitur-utama-title"
      id="fitur-utama"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 id="fitur-utama-title" className={styles.title}>
            Fitur Utama Email Blast Jatis Mobile
          </h2>
          <p className={styles.subtitle}>
            Tiga fitur inti untuk menyiapkan, menargetkan, dan mengevaluasi
            kampanye.
          </p>
        </div>

        {/* 3 Alternating Features */}
        <div className={styles.featuresList}>
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`${styles.featureRow} ${
                feature.reverse ? styles.reverse : ""
              }`}
            >
              {/* Illustration Column */}
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    width={460}
                    height={400}
                    className={styles.featureImage}
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className={styles.contentCol}>
                <span className={styles.eyebrow}>{feature.eyebrow}</span>
                <h3 className={styles.featureTitle}>
                  {feature.title.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < feature.title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className={styles.featureDesc}>{feature.description}</p>

                {/* Checklist */}
                <ul className={styles.checklist}>
                  {feature.checklist.map((item, index) => (
                    <li key={index} className={styles.checkItem}>
                      <span
                        className={styles.checkIconCircle}
                        aria-hidden="true"
                      >
                        <svg
                          className={styles.checkSvg}
                          viewBox="0 0 12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="2.5 6 5 8.5 9.5 3.5" />
                        </svg>
                      </span>
                      <span className={styles.checkText}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
