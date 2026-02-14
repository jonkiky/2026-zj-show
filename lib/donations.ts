export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  anonymous: boolean;
  timestamp: number;
}

let donations: Donation[] = [];

export function addDonation(donorName: string, amount: number, anonymous: boolean): Donation {
  const donation: Donation = {
    id: Date.now().toString(),
    donorName: anonymous ? "Anonymous" : donorName,
    amount,
    anonymous,
    timestamp: Date.now(),
  };
  donations.push(donation);
  return donation;
}

export function getAllDonations(): Donation[] {
  return [...donations].sort((a, b) => b.timestamp - a.timestamp);
}

export function getTotalRaised(): number {
  return donations.reduce((sum, donation) => sum + donation.amount, 0);
}
