import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content Column */}
          <div className={styles.contentCol}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/" className={styles.breadcrumbHome}>
                Home
              </Link>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                »
              </span>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                Email Marketing
              </span>
            </nav>

            {/* Main Heading */}
            <h1 id="hero-heading" className={styles.title}>
              Software Email
              <br />
              Blast untuk Bisnis
              <br />
              di Indonesia
            </h1>

            {/* Description */}
            <p className={styles.description}>
              Buat, kelola, kirim, dan evaluasi kampanye email marketing dari
              satu platform. Gunakan template interaktif, kelompokkan kontak
              pelanggan, lalu pantau hasil setiap pengiriman melalui laporan
              penggunaan.
            </p>

            {/* CTA Buttons */}
            <div className={styles.actionsGroup}>
              <Link
                href="#daftar"
                className={styles.primaryBtn}
                id="cta-coba-email-blast"
              >
                Coba Email Blast Sekarang
              </Link>
              <Link
                href="#demo"
                className={styles.secondaryBtn}
                id="cta-request-demo"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className={styles.visualCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/hero image.png"
                alt="Software Email Blast untuk Bisnis di Indonesia - Jatis Mobile"
                width={560}
                height={520}
                priority
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Us CTA */}
      <a
        href="https://wa.me/6281119330888?text=Halo%20Jatis%20Mobile,%20saya%20tertarik%20dengan%20solusi%20Email%20Marketing"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.chatFloatingBtn}
        aria-label="Chat Us via WhatsApp"
        id="floating-chat-us"
      >
        <svg
          className={styles.chatIcon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.39 17.07L2.14 21.67L6.87 20.44C8.32 21.43 10.09 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.63 15.68C16.42 16.27 15.54 16.79 14.88 16.94C14.43 17.04 13.85 17.11 11.89 16.3C9.39 15.26 7.78 12.72 7.65 12.55C7.53 12.39 6.64 11.2 6.64 9.98C6.64 8.76 7.27 8.16 7.51 7.91C7.71 7.7 8.04 7.6 8.35 7.6C8.45 7.6 8.54 7.6 8.62 7.61C8.86 7.62 8.98 7.63 9.14 8.01C9.34 8.49 9.83 9.68 9.89 9.8C9.95 9.92 9.99 10.07 9.91 10.23C9.83 10.39 9.78 10.47 9.66 10.61C9.54 10.75 9.41 10.92 9.31 11.04C9.19 11.17 9.07 11.31 9.21 11.55C9.35 11.79 9.84 12.59 10.56 13.23C11.49 14.06 12.25 14.33 12.52 14.44C12.72 14.52 12.96 14.5 13.11 14.34C13.3 14.14 13.54 13.79 13.78 13.45C13.95 13.21 14.16 13.18 14.38 13.26C14.6 13.34 15.79 13.93 16.03 14.05C16.27 14.17 16.43 14.25 16.49 14.35C16.55 14.45 16.55 14.93 16.34 15.52L16.63 15.68Z"
            fill="currentColor"
          />
        </svg>
        <span>Chat Us</span>
      </a>
    </section>
  );
}
