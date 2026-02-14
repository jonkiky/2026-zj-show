"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Donor {
  id: string;
  donorName: string;
  amount: number;
  timestamp: number;
}

export default function FundraisingPage() {
  const [total, setTotal] = useState(0);
  const [donors, setDonors] = useState<Donor[]>([]);
  const [visibleDonors, setVisibleDonors] = useState<Donor[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data
  const fetchData = async () => {
    try {
      const [totalRes, donorsRes] = await Promise.all([
        fetch("/api/total"),
        fetch("/api/donors"),
      ]);
      const totalData = await totalRes.json();
      const donorsData = await donorsRes.json();

      setTotal(totalData.total);
      setDonors(donorsData.donors);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000); // Refresh every 15 seconds
    return () => clearInterval(interval);
  }, []);

  // Rotating ticker logic
  useEffect(() => {
    if (donors.length === 0) return;

    const visibleCount = Math.min(5, donors.length);
    setVisibleDonors(donors.slice(currentIndex, currentIndex + visibleCount));

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= donors.length ? 0 : next;
      });
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [donors, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-cny-red to-cny-dark-red text-white py-8 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Support the 2026 ZJU DC Chinese New Year Festival
          </h1>
          <Link
            href="/"
            className="inline-block text-amber-200 hover:text-white transition-colors"
          >
            ← Return to Event Agenda
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Total Raised Section */}
        <section className="bg-white rounded-lg shadow-2xl p-12 mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Total Raised
          </h2>
          <div className="text-6xl md:text-7xl font-bold text-cny-red mb-2">
            ${total.toLocaleString("en-US", { minimumFractionDigits: 0 })}
          </div>
          <p className="text-gray-600 mt-4">
            Thank you for supporting our community!
          </p>
        </section>

        {/* Donor Ticker Section */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-cny-red mb-6 text-center border-b-4 border-cny-gold pb-2">
            Our Generous Supporters
          </h2>

          {donors.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 italic">
                Be the first to support the 2026 Festival!
              </p>
            </div>
          ) : (
            <div className="space-y-4 min-h-[300px]">
              {visibleDonors.map((donor, index) => (
                <div
                  key={`${donor.id}-${index}`}
                  className="bg-gradient-to-r from-red-50 to-amber-50 p-6 rounded-lg border-l-4 border-cny-gold transition-all duration-500 ease-in-out transform hover:scale-105"
                  style={{
                    animation: "fadeIn 0.5s ease-in",
                  }}
                >
                  <p className="text-lg text-gray-800">
                    Thank you,{" "}
                    <span className="font-bold text-cny-red">
                      {donor.donorName}
                    </span>
                    , for your generous support —{" "}
                    <span className="font-bold text-cny-gold">
                      ${donor.amount.toLocaleString("en-US")}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/portal"
            className="inline-block bg-gradient-to-r from-cny-red to-cny-dark-red text-white px-8 py-4 rounded-full text-lg font-bold hover:from-cny-dark-red hover:to-cny-red transition-all transform hover:scale-105 shadow-lg"
          >
            Staff Portal - Add Donation
          </Link>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
