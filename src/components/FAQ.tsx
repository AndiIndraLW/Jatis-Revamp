"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Apa Itu Email Blast?",
    answer:
      "Email blast adalah kegiatan mengirimkan pesan email yang sama kepada banyak orang secara bersamaan. Email blast merupakan salah satu bentuk email marketing dan biasanya dijalankan menggunakan aplikasi khusus agar pengiriman massal lebih mudah dikelola.",
  },
  {
    id: 2,
    question: "Software email blast ini cocok untuk bisnis seperti apa?",
    answer:
      "Software ini cocok untuk berbagai skala bisnis, mulai dari UMKM, startup, hingga korporasi besar di berbagai sektor seperti retail, e-commerce, perbankan, perhotelan, hingga institusi pendidikan yang membutuhkan komunikasi email massal yang efisien dan tepat sasaran.",
  },
  {
    id: 3,
    question: "Apakah saya bisa membuat template email sendiri?",
    answer:
      "Ya, Anda dapat membuat template email sendiri menggunakan drag-and-drop editor yang intuitif atau mengunggah kode HTML kustom sesuai dengan identitas dan kebutuhan brand Anda.",
  },
  {
    id: 4,
    question: "Berapa batas maksimal database yang bisa dikirimi email blast?",
    answer:
      "Kapasitas database dapat disesuaikan dengan kebutuhan Anda, mulai dari ribuan hingga jutaan kontak per pengiriman dengan infrastruktur server kami yang berkecepatan tinggi dan andal.",
  },
  {
    id: 5,
    question: "Bagaimana cara mengetahui laporan analitik dari email blast?",
    answer:
      "Dashboard Jatis Mobile menyediakan laporan komprehensif secara real-time yang mencakup metrik open rate, click-through rate (CTR), bounce rate, hingga unsubscribe rate secara terperinci.",
  },
  {
    id: 6,
    question: "Bagaimana skema harga Email Blast Jatis Mobile?",
    answer:
      "Kami menyediakan skema harga transparan dan fleksibel berbasis volume pengiriman atau kuota bulanan/tahunan yang disesuaikan dengan skala dan target pengiriman bisnis Anda.",
  },
  {
    id: 7,
    question: "Bagaimana proses onboarding setelah berlangganan?",
    answer:
      "Tim onboarding profesional kami akan mendampingi Anda mulai dari setup akun, verifikasi domain/DNS (SPF, DKIM, DMARC), integrasi sistem, hingga panduan pengiriman email pertama Anda.",
  },
  {
    id: 8,
    question: "Dukungan apa yang tersedia jika saya mengalami kendala?",
    answer:
      "Kami menyediakan layanan dukungan teknis dan operasional 24/7 melalui dedicated account manager, live chat, email, dan WhatsApp support untuk memastikan kelancaran kampanye Anda.",
  },
  {
    id: 9,
    question: "Bagaimana cara agar open rate email saya tinggi?",
    answer:
      "Gunakan subjek email yang menarik dan relevan, lakukan segmentasi audiens yang tepat, kirimkan email pada jam optimal, dan pastikan reputasi sender domain selalu terjaga dengan baik.",
  },
];

export default function FAQ() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.section} aria-labelledby="faq-title" id="faq">
      <div className={styles.container}>
        <h2 id="faq-title" className={styles.title}>
          Frequently Asked Question
        </h2>

        <div className={styles.faqList}>
          {FAQ_DATA.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span
                    className={`${styles.iconCircle} ${
                      isOpen ? styles.iconCircleOpen : ""
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H11"
                          stroke="#ff6c22"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1V11M1 6H11"
                          stroke="#ff6c22"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answerText}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
