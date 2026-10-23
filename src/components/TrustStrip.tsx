import React from "react";
import Image from "next/image";
import styles from "./TrustStrip.module.css";

const CLIENT_SLOTS = [1, 2, 3, 4, 5, 6];

export default function TrustStrip() {
  return (
    <section className={styles.trustSection} aria-label="Kredibilitas dan Klien">
      <div className={styles.container}>
        {/* Left Info Column */}
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>
            Dipercaya lebih dari 500 klien korporat
            <br />
            di Indonesia
          </h2>
          <p className={styles.subheading}>
            20 tahun melayani industri · Tersertifikasi ISO 9001 &amp; 27001
          </p>

          <div className={styles.certBadges}>
            <Image
              src="/assets/section-1-certified-1.webp"
              alt="Certified ISO 9001 - Bureau Veritas"
              width={105}
              height={42}
              className={styles.certImage}
            />
            <Image
              src="/assets/section-1-certified-2.png"
              alt="Certified ISO 27001 - Bureau Veritas"
              width={105}
              height={42}
              className={styles.certImage}
            />
          </div>
        </div>

        {/* Right Client Logo Slots */}
        <div className={styles.clientLogosGrid}>
          {CLIENT_SLOTS.map((slotIndex) => (
            <div
              key={slotIndex}
              className={styles.clientCard}
              role="figure"
              aria-label={`Logo Klien Terverifikasi ${slotIndex}`}
            >
              <span className={styles.clientPlaceholderText}>
                [Verified client logo]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
