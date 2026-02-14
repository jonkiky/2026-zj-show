"use client";

import { useState } from "react";
import Link from "next/link";

export default function PortalPage() {
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donorName: anonymous ? "Anonymous" : donorName,
          amount: parseFloat(amount),
          anonymous,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to add donation");
      } else {
        setMessage("Donation added successfully!");
        setDonorName("");
        setAmount("");
        setAnonymous(false);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-cny-red to-cny-dark-red text-white py-8 px-4 text-center shadow-lg border-b-4 border-cny-gold">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-cny-gold text-cny-dark-red px-8 py-3 rounded font-bold text-lg mb-4 border-2 border-white">
            马年大吉 · Year of the Horse 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Admin Portal
          </h1>
          <p className="text-lg text-amber-200">2026 Chinese New Year Festival</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <Link
              href="/fundraising"
              className="text-cny-red hover:text-cny-dark-red font-semibold"
            >
              ← Back to Fundraising Display
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-cny-red mb-6 border-b-4 border-cny-gold pb-2 text-center">
            Add New Donation
          </h2>

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {message}
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Anonymous Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="w-5 h-5 text-cny-red border-gray-300 rounded focus:ring-cny-red"
              />
              <label
                htmlFor="anonymous"
                className="ml-3 text-gray-700 font-medium"
              >
                Anonymous Donation
              </label>
            </div>

            {/* Donor Name */}
            <div>
              <label
                htmlFor="donorName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Donor Name {!anonymous && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                id="donorName"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                disabled={anonymous}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cny-red focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder={anonymous ? "Anonymous" : "Enter donor name"}
              />
            </div>

            {/* Amount */}
            <div>
              <label
                htmlFor="amount"
                className="block text-gray-700 font-semibold mb-2"
              >
                Amount (USD) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-lg">
                  $
                </span>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  step="0.01"
                  min="0.01"
                  required
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cny-red focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cny-red to-cny-dark-red text-white py-4 rounded-lg text-lg font-bold hover:from-cny-dark-red hover:to-cny-red transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Adding..." : "Add Donation"}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-amber-50 border-l-4 border-cny-gold p-4 rounded">
            <h3 className="font-semibold text-gray-800 mb-2">
              Validation Rules:
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Amount must be greater than $0</li>
              <li>• Donor name required unless Anonymous is checked</li>
              <li>• All donations are immediately visible on the fundraising page</li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="text-cny-red hover:text-cny-dark-red font-semibold"
          >
            View Event Agenda
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/fundraising"
            className="text-cny-red hover:text-cny-dark-red font-semibold"
          >
            View Fundraising Display
          </Link>
        </div>
      </main>
    </div>
  );
}
