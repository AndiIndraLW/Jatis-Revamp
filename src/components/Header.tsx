"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink} aria-label="Jatis Mobile Home">
          <Image
            src="/assets/logo-jatis-mobile.png"
            alt="Jatis Mobile"
            width={130}
            height={50}
            priority
            className={styles.logoImage}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Navigasi Utama">
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Beranda
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#tentang-kami" className={styles.navLink}>
                Tentang Kami
              </Link>
            </li>
            <li className={styles.navItem}>
              <button
                type="button"
                className={styles.navButton}
                aria-haspopup="true"
              >
                Produk
                <svg
                  className={styles.chevronIcon}
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="#email-marketing" className={styles.dropdownItem}>
                  Email Marketing (Blast)
                </Link>
                <Link href="#whatsapp-business" className={styles.dropdownItem}>
                  WhatsApp Business API
                </Link>
                <Link href="#sms-broadcast" className={styles.dropdownItem}>
                  SMS Broadcast & OTP
                </Link>
                <Link href="#omnichannel-chat" className={styles.dropdownItem}>
                  Omnichannel Chat
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="#use-case" className={styles.navLink}>
                Use Case
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#clients" className={styles.navLink}>
                Clients
              </Link>
            </li>
            <li className={styles.navItem}>
              <button
                type="button"
                className={styles.navButton}
                aria-haspopup="true"
              >
                Hubungan Investor
                <svg
                  className={styles.chevronIcon}
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="#laporan-keuangan" className={styles.dropdownItem}>
                  Laporan Keuangan
                </Link>
                <Link href="#keterbukaan-informasi" className={styles.dropdownItem}>
                  Keterbukaan Informasi
                </Link>
                <Link href="#rups" className={styles.dropdownItem}>
                  Rapat Umum Pemegang Saham
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <button
                type="button"
                className={styles.navButton}
                aria-haspopup="true"
              >
                Artikel
                <svg
                  className={styles.chevronIcon}
                  viewBox="0 0 10 6"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="#blog" className={styles.dropdownItem}>
                  Blog & Insight
                </Link>
                <Link href="#edukasi" className={styles.dropdownItem}>
                  Edukasi & Panduan
                </Link>
                <Link href="#berita" className={styles.dropdownItem}>
                  Siaran Pers
                </Link>
              </div>
            </li>
            <li className={styles.navItem}>
              <Link href="#kontak" className={styles.navLink}>
                Kontak
              </Link>
            </li>
            <li className={styles.navItem}>
              <div
                className={styles.langBadge}
                title="Bahasa Indonesia"
                role="button"
                tabIndex={0}
                aria-label="Pilih Bahasa: Bahasa Indonesia"
              >
                <div className={styles.flagIcon}>
                  <div className={styles.flagTop}></div>
                  <div className={styles.flagBottom}></div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Hamburger Toggle */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="#tentang-kami" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="#produk" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Produk
              </Link>
            </li>
            <li>
              <Link href="#use-case" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Use Case
              </Link>
            </li>
            <li>
              <Link href="#clients" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Clients
              </Link>
            </li>
            <li>
              <Link href="#hubungan-investor" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Hubungan Investor
              </Link>
            </li>
            <li>
              <Link href="#artikel" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Artikel
              </Link>
            </li>
            <li>
              <Link href="#kontak" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
