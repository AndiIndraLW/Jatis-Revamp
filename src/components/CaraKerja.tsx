import React from "react";
import styles from "./CaraKerja.module.css";

interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  note?: string;
}

const STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: "Siapkan Kontak",
    description:
      "Masukkan database email pelanggan dan kelompokkan ke dalam grup kontak.",
  },
  {
    stepNumber: 2,
    title: "Buat Email",
    description:
      "Pilih template interaktif, lalu sesuaikan teks, gambar, dan tombol CTA.",
  },
  {
    stepNumber: 3,
    title: "Kirim Kampanye",
    description: "Kirim email ke grup kontak yang dipilih.",
    note: "[Perlu konfirmasi dari tim internal Jatis]",
  },
  {
    stepNumber: 4,
    title: "Evaluasi Hasil",
    description:
      "Baca laporan penggunaan untuk melihat performa dan merencanakan kampanye berikutnya.",
  },
];

export default function CaraKerja() {
  return (
    <section
      className={styles.section}
      aria-labelledby="cara-kerja-title"
      id="cara-kerja"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 id="cara-kerja-title" className={styles.title}>
            Cara Kerja Email Blast Jatis Mobile
          </h2>
          <p className={styles.subtitle}>
            Empat langkah dari database pelanggan hingga evaluasi kampanye.
          </p>
        </div>

        {/* Stepper with connecting line */}
        <div className={styles.stepperWrapper}>
          <div className={styles.stepperLine} aria-hidden="true" />
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.stepNumber} className={styles.stepItem}>
                <div className={styles.circleBadge} aria-hidden="true">
                  {step.stepNumber}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
                {step.note && (
                  <span className={styles.confirmBadge}>{step.note}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
