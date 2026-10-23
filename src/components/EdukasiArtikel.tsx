import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./EdukasiArtikel.module.css";

interface ArticleItem {
  category: string;
  title: string;
  href: string;
}

const ARTICLES: ArticleItem[] = [
  {
    category: "CONTOH",
    title: "5 Contoh Email Marketing yang Menarik yang Harus Dipelajari",
    href: "#artikel-1",
  },
  {
    category: "PANDUAN",
    title: "9 Cara Membuat Email Marketing yang Wajib Anda Pelajari!",
    href: "#artikel-2",
  },
  {
    category: "CARA KERJA",
    title: "Pahami Cara Kerja Email Marketing dan Tips Menariknya",
    href: "#artikel-3",
  },
];

export default function EdukasiArtikel() {
  return (
    <section
      className={styles.section}
      aria-labelledby="edukasi-artikel-title"
      id="edukasi-artikel"
    >
      <div className={styles.container}>
        {/* Part 1: Top Feature Card (Apa Itu Email Blast) */}
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}>
            <Image
              src="/assets/section-9-apa-itu.png"
              alt="Email Blast Icon"
              width={96}
              height={96}
              className={styles.featureIcon}
            />
          </div>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>Apa Itu Email Blast?</h3>
            <p className={styles.featureDesc}>
              Email blast adalah pengiriman pesan email yang sama kepada banyak
              penerima secara bersamaan. Metode ini menjadi salah satu bentuk
              email marketing dan biasanya dijalankan menggunakan aplikasi khusus
              agar pengiriman massal lebih mudah dikelola.
            </p>
            <div>
              <Link href="#tentang-email-blast" className={styles.learnMoreLink}>
                <span>Pelajari lebih lanjut tentang email blast</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Part 2: Educational Articles Grid */}
        <div>
          <div className={styles.articlesHeader}>
            <h2 id="edukasi-artikel-title" className={styles.articlesTitle}>
              Pelajari Lebih Lanjut tentang Email Marketing
            </h2>
            <Link href="#semua-artikel" className={styles.viewAllLink}>
              <span>Lihat semua artikel</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className={styles.articlesGrid}>
            {ARTICLES.map((article, index) => (
              <article key={index} className={styles.articleCard}>
                <div className={styles.thumbnailPlaceholder}>
                  [Thumbnail artikel]
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.categoryTag}>{article.category}</span>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <Link href={article.href} className={styles.readLink}>
                    <span>Baca artikel</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
