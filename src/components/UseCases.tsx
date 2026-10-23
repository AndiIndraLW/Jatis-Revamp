import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./UseCases.module.css";

interface UseCaseItem {
  icon: string;
  title: string;
  description: string;
  note?: string;
}

const USE_CASES: UseCaseItem[] = [
  {
    icon: "/assets/section-4-promosi.png",
    title: "Promosi & Penawaran",
    description:
      "Umumkan promo, produk baru, atau penawaran khusus ke banyak pelanggan sekaligus.",
  },
  {
    icon: "/assets/section-4-newsletter.png",
    title: "Newsletter",
    description:
      "Kirim kabar terbaru, konten, dan informasi bisnis secara berkala.",
  },
  {
    icon: "/assets/section-4-promosi-notifikasi.png",
    title: "Notifikasi Pelanggan",
    description:
      "Sampaikan informasi penting terkait layanan atau perubahan kepada pelanggan.",
  },
  {
    icon: "/assets/section-4-pe ngingat.png",
    title: "Pengingat",
    description:
      "Ingatkan pelanggan tentang jadwal, tenggat, atau tindak lanjut yang perlu dilakukan.",
  },
  {
    icon: "/assets/section-4-pengiriman.png",
    title: "Pengiriman OTP",
    description: "Kirim kode verifikasi melalui email.",
    note: "[Konfirmasi ketersediaan untuk produk ini]",
  },
];

export default function UseCases() {
  return (
    <section
      className={styles.section}
      aria-labelledby="use-cases-title"
      id="use-cases"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 id="use-cases-title" className={styles.title}>
            Email Marketing untuk Berbagai
            <br />
            Kebutuhan Bisnis
          </h2>
          <p className={styles.subtitle}>
            Gunakan email blast untuk komunikasi yang perlu menjangkau banyak
            pelanggan sekaligus.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className={styles.grid}>
          {USE_CASES.map((item, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Image
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  width={44}
                  height={44}
                  className={styles.icon}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>
                  {item.description}
                  {item.note && (
                    <span className={styles.noteText}>{item.note}</span>
                  )}
                </p>
              </div>
            </article>
          ))}

          {/* 6th Card: Custom CTA Card */}
          <div className={styles.ctaCard}>
            <div>
              <h3 className={styles.ctaTitle}>Punya kebutuhan lain?</h3>
              <p className={styles.ctaDesc}>
                Ceritakan skenario komunikasi Anda kepada tim kami.
              </p>
            </div>
            <div>
              <Link href="#kontak" className={styles.ctaLink}>
                <span>Diskusikan Kebutuhan Anda</span>
                <span className={styles.ctaArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
