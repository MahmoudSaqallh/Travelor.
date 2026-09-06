"use client";

import { useState } from "react";

export default function FaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="overflow-hidden rounded-3xl border border-secondary/10 bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={i > 0 ? "border-t border-secondary/10" : ""}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-afacad font-semibold text-secondary"
            >
              {faq.question}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm text-gray-500">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
