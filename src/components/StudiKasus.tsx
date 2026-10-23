import React from "react";
import Link from "next/link";
import styles from "./StudiKasus.module.css";

export default function StudiKasus() {
  return (
    <section
      className={styles.section}
      aria-labelledby="studi-kasus-title"
      id="studi-kasus"
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 id="studi-kasus-title" className={styles.title}>
            Hasil Nyata dari Klien Kami
          </h2>
        </div>

        {/* Main Case Study Card */}
        <div className={styles.cardContainer}>
          {/* Left Indigo Column */}
          <div className={styles.leftCol}>
            <div>
              <span className={styles.categoryTag}>
                STUDI KASUS · EMAIL MARKETING
              </span>
              <div>
                <span className={styles.logoSlot}>[Logo pelanggan]</span>
              </div>
              <h3 className={styles.caseStudyTitle}>
                [Email Marketing case study to be supplied]
              </h3>
            </div>

            <div>
              <hr className={styles.divider} />
              <div className={styles.metricSection}>
                <span className={styles.metricLabel}>Hasil terukur</span>
                <span className={styles.metricValue}>
                  [Metrik terverifikasi]
                </span>
              </div>
            </div>
          </div>

          {/* Right White Column */}
          <div className={styles.rightCol}>
            {/* 3 Detail Columns */}
            <div className={styles.detailsGrid}>
              <div className={styles.detailCol}>
                <span className={styles.colHeader}>TANTANGAN</span>
                <div className={styles.detailBox}>
                  [Tantangan bisnis pelanggan]
                </div>
              </div>

              <div className={styles.detailCol}>
                <span className={styles.colHeader}>SOLUSI JATIS</span>
                <div className={styles.detailBox}>
                  [Bagaimana Email Blast Jatis Mobile digunakan]
                </div>
              </div>

              <div className={styles.detailCol}>
                <span className={styles.colHeader}>HASIL</span>
                <div className={styles.detailBox}>
                  [Hasil terukur yang disetujui pelanggan]
                </div>
              </div>
            </div>

            {/* Bottom Row: Testimonial & CTA Button */}
            <div className={styles.bottomRow}>
              <p className={styles.testimonialText}>
                &ldquo;[Client testimonial]&rdquo; &mdash; [Nama, Jabatan,
                Perusahaan]
              </p>
              <Link href="#studi-kasus-lengkap" className={styles.ctaBtn}>
                Baca Studi Kasus Lengkap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
