export type FeaturedEventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  fee: number;
  visibility: string;
  organizerId: string;
  organizer: { id: string; name: string };
  _count: { registrations: number };
  userRegistration?: { id: string; status: string } | null;
};

export type EventCardEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  fee: number;
  visibility: string;
  organizer: { name: string };
  _count?: { registrations: number };
  averageRating?: number;
};

export interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    time: string;
    venue: string;
    type: string;
    fee: number;
    visibility: string;
    organizer: { name: string };
    _count?: { registrations: number };
    averageRating?: number;
  };
}

export interface EventDetail {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  type: string;
  fee: number;
  visibility: string;
  organizerId: string;
  organizer: { id: string; name: string };
  _count: { registrations: number };
  averageRating: number;
  reviewCount: number;
  userRegistration?: { id: string; status: string } | null;
}
