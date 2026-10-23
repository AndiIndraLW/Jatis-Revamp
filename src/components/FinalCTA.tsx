import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title" id="final-cta">
      <div className={styles.container}>
        <div className={styles.banner}>
          {/* Background Graphical Circles */}
          <div className={styles.graphicWrapper} aria-hidden="true">
            <Image
              src="/assets/section-11-graphic.png"
              alt=""
              width={1100}
              height={1510}
              className={styles.graphicImage}
              unoptimized
              priority
            />
          </div>

          {/* Banner Content */}
          <div className={styles.content}>
            <h2 id="cta-title" className={styles.title}>
              Maksimalkan
              <br />
              Email Marketing Anda Sekarang!
            </h2>

            <p className={styles.subtitle}>
              Diskusikan kebutuhan kampanye Anda dan lihat
              <br />
              langsung cara kerja Email Blast Jatis Mobile.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="#request-demo" className={styles.primaryButton}>
                Request a Demo
              </Link>
              <Link href="#coba-sekarang" className={styles.secondaryButton}>
                Coba Email Blast Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
