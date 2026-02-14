"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface ProgramItem {
  performance: string;
  performer: string;
}

interface ProgramSection {
  id: string;
  title: string;
  items: ProgramItem[];
}

interface EventData {
  eventTitle: string;
  sections: ProgramSection[];
}

export default function Home() {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = () => {
      const timestamp = new Date().getTime();
      fetch(`https://raw.githubusercontent.com/jonkiky/2026-zj-show/refs/heads/main/data/event.json?t=${timestamp}`)
        .then((res) => res.json())
        .then((data) => {
          setEventData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading event data:", error);
          setLoading(false);
        });
    };

    // Fetch immediately on mount
    fetchEventData();

    // Set up interval to fetch every 30 seconds
    const interval = setInterval(fetchEventData, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-cny-red to-cny-dark-red text-white py-12 px-4 text-center shadow-lg border-b-4 border-cny-gold">
        <div className="max-w-4xl mx-auto">
          <div className="text-3xl font-bold text-cny-gold mb-4 tracking-wider">丙午年 · 2026</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            2026 Chinese New Year Festival
          </h1>
          <div className="inline-block bg-cny-gold text-cny-dark-red px-8 py-3 rounded font-bold text-xl mb-4 border-2 border-white">
            马年大吉 · Year of the Horse
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Zhejiang University Alumni Association
          </h2>
          <h3 className="text-lg md:text-xl mb-4">
            Greater Washington DC Chapter
          </h3>
          <p className="text-lg italic text-amber-200">
            "Celebrating Culture, Community, and Prosperity"
          </p>
        </div>
      </header>

      {/* Prominent Donate Button */}
      <div className="bg-cny-gold py-6 px-4 text-center shadow-md border-t-2 border-b-2 border-cny-dark-red">
        <Link
          href="/fundraising"
          className="inline-block bg-white text-cny-red px-10 py-4 rounded text-xl font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg border-2 border-cny-red"
        >
          Support the Festival – Donate Now
        </Link>
        <p className="text-cny-dark-red font-semibold mt-3 text-lg">马到成功</p>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Agenda Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8 border-t-4 border-cny-gold">
          <div className="text-center mb-6">
            <div className="inline-block bg-gradient-to-r from-cny-red to-cny-gold text-white px-8 py-3 rounded font-bold text-lg mb-2 border-2 border-cny-dark-red">
              龙马精神
            </div>
          </div>
          <h2 className="text-3xl font-bold text-cny-red mb-6 border-b-4 border-cny-gold pb-2 text-center">
            Festival Program
          </h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading program...</p>
            </div>
          ) : eventData ? (
            <div className="space-y-6">
              {eventData.sections.map((section, index) => {
                const isSpecialSection = section.id === "game1" || section.id === "raffle";
                const borderColor = index % 2 === 0 ? "border-cny-gold" : "border-cny-red";
                
                return (
                  <div key={section.id} className={`border-l-4 ${borderColor} pl-6`}>
                    {(section.id === "opening" || section.id === "closing") && (
                      <h3 className="text-xl font-semibold text-cny-dark-red mb-3">
                        {section.title}
                      </h3>
                    )}
                    <ul className="space-y-2 text-gray-700">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-cny-gold mr-2">•</span>
                          <span className={isSpecialSection ? "font-semibold text-cny-red" : ""}>
                            {item.performance}
                            {item.performer && ` — ${item.performer}`}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-red-600">Failed to load program data.</p>
            </div>
          )}
        </section>

        {/* Mid-page Fundraising CTA */}
        <div className="bg-gradient-to-r from-cny-red to-cny-dark-red text-white rounded-lg shadow-lg p-8 text-center mb-8 border-4 border-cny-gold">
          <div className="text-2xl font-bold text-cny-gold mb-4 tracking-wider">一马当先</div>
          <h3 className="text-2xl font-bold mb-4">Help Make This Festival Possible</h3>
          <p className="mb-6 text-lg">
            Your generous support helps us celebrate our culture and community
          </p>
          <Link
            href="/fundraising"
            className="inline-block bg-cny-gold text-cny-dark-red px-8 py-3 rounded text-lg font-bold hover:bg-amber-600 transition-all transform hover:scale-105 border-2 border-white"
          >
            View Fundraising Progress
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-cny-dark-red to-cny-red text-white py-8 px-4 text-center border-t-4 border-cny-gold">
        <div className="max-w-4xl mx-auto">
          <div className="text-2xl font-bold text-cny-gold mb-4 tracking-wider">
            万马奔腾
          </div>
          <Link
            href="/fundraising"
            className="inline-block bg-cny-gold text-cny-dark-red px-8 py-3 rounded font-bold hover:bg-amber-600 transition-all mb-6 border-2 border-white"
          >
            Support the Festival
          </Link>
          <p className="text-sm text-amber-200 mt-4">
            © 2026 Zhejiang University Alumni Association, Greater Washington DC Chapter
          </p>
          <p className="text-sm text-amber-200 mt-2">
            恭贺新禧 · 马年大吉 · Year of the Horse 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
