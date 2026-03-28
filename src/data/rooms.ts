export interface RoomFeature {
  label: string;
  icon: string;
}

export interface RoomData {
  id: string;
  type: string;
  price: string;
  period: string;
  desc: string;
  longDesc: string;
  features: string[];
  detailedFeatures: RoomFeature[];
  images: { src: string; alt: string; label: string }[];
  virtualTourVideoId: string;
  badge: string;
  badgeColor: string;
  badgeTextColor: string;
  highlight: boolean;
  size: string;
  occupancy: string;
  deposit: string;
  availability: string;
  rules: string[];
  included: string[];
}

export const rooms: RoomData[] = [
  {
    id: 'single',
    type: 'Single Room',
    price: '₹20,000',
    period: '/month',
    desc: 'Your private sanctuary — a fully furnished single-occupancy room with attached bathroom, study area, and plenty of natural light.',
    longDesc:
      'Experience the ultimate privacy in our premium single-occupancy room. Designed for the modern woman who values her personal space, this room offers a serene retreat after a long day. With abundant natural light, a dedicated study corner, and an attached bathroom, you get everything you need to live comfortably and productively. The room is fully furnished with quality furniture, and the warm pastel interiors create a calming atmosphere that truly feels like home.',
    features: ['Attached Bathroom', 'Study Desk & Chair', 'Wardrobe', 'King Bed', 'AC Ready', 'Natural Light'],
    detailedFeatures: [
      { label: 'Attached Bathroom with Geyser', icon: 'HomeModernIcon' },
      { label: 'Study Desk & Ergonomic Chair', icon: 'AcademicCapIcon' },
      { label: '3-Door Wardrobe', icon: 'ArchiveBoxIcon' },
      { label: 'King-size Bed with Mattress', icon: 'HomeIcon' },
      { label: 'AC Ready (AC on request)', icon: 'SunIcon' },
      { label: 'Large Windows with Natural Light', icon: 'SunIcon' },
      { label: 'High-Speed WiFi', icon: 'WifiIcon' },
      { label: 'CCTV Secured Floor', icon: 'ShieldCheckIcon' },
      { label: 'Daily Housekeeping', icon: 'SparklesIcon' },
      { label: 'Power Backup', icon: 'BoltIcon' },
    ],
    images: [
      {
        src: '/assets/images/room_overview.png',
        alt: 'Bright single room with king bed, study desk, and natural sunlight',
        label: 'Room Overview',
      },
      {
        src: '/assets/images/study_area.png',
        alt: 'Study area with desk and good lighting for focused work',
        label: 'Study Area',
      },
      {
        src: 'https://images.unsplash.com/photo-1721396181219-1c676297c435',
        alt: 'Clean modern bathroom with geyser and good ventilation',
        label: 'Attached Bathroom',
      },
      {
        src: 'https://images.unsplash.com/photo-1723470915155-621e10d20dfa',
        alt: 'Modern modular kitchen with clean countertops and bright lighting',
        label: 'Common Kitchen',
      },
    ],
    virtualTourVideoId: 'dQw4w9WgXcQ',
    badge: 'Most Private',
    badgeColor: '#E6F0FF',
    badgeTextColor: '#3B82F6',
    highlight: false,
    size: '180 sq ft',
    occupancy: '1 Person',
    deposit: '₹40,000 (2 months)',
    availability: 'Available Now',
    rules: [
      'No male guests allowed inside rooms',
      'Gate closes at 10:30 PM',
      'No cooking in rooms',
      'Maintain cleanliness in common areas',
      'No loud music after 10 PM',
    ],
    included: [
      'Electricity (up to 200 units/month)',
      'RO Drinking Water',
      'WiFi Internet',
      'Daily Housekeeping',
      'Common Area Access',
      'Laundry Area Access',
    ],
  },
  {
    id: 'twin',
    type: 'Twin Sharing',
    price: '₹13,000',
    period: '/month',
    desc: 'Share a beautiful room with a fellow resident — the perfect blend of affordability and comfort with shared bathroom access.',
    longDesc:
      'Our twin sharing rooms are designed for those who love company and want to save on rent without compromising on comfort. Each resident gets their own bed, wardrobe, and study space. The rooms are bright, airy, and tastefully decorated. Sharing with a fellow resident means you always have someone to talk to, explore the city with, or study alongside. It\'s the perfect way to build friendships while living in a safe, homely environment.',
    features: ['Shared Bathroom', 'Individual Wardrobes', 'Study Area', 'Twin Beds', 'Common Hall Access', 'Window View'],
    detailedFeatures: [
      { label: 'Shared Bathroom with Geyser', icon: 'HomeModernIcon' },
      { label: 'Individual Wardrobes per Resident', icon: 'ArchiveBoxIcon' },
      { label: 'Dedicated Study Area', icon: 'AcademicCapIcon' },
      { label: 'Two Single Beds with Mattresses', icon: 'HomeIcon' },
      { label: 'Common Hall Access', icon: 'UsersIcon' },
      { label: 'Window with Garden View', icon: 'SunIcon' },
      { label: 'High-Speed WiFi', icon: 'WifiIcon' },
      { label: 'CCTV Secured Floor', icon: 'ShieldCheckIcon' },
      { label: 'Daily Housekeeping', icon: 'SparklesIcon' },
      { label: 'Power Backup', icon: 'BoltIcon' },
    ],
    images: [
      {
        src: '/assets/images/room_overview.png',
        alt: 'Spacious twin sharing room with two beds and bright aesthetic decor',
        label: 'Room Overview',
      },
      {
        src: '/assets/images/common_hall.png',
        alt: 'Spacious well-lit living hall with comfortable furniture',
        label: 'Common Hall',
      },
      {
        src: 'https://images.unsplash.com/photo-1721396181219-1c676297c435',
        alt: 'Clean modern bathroom with geyser and good ventilation',
        label: 'Shared Bathroom',
      },
      {
        src: 'https://images.unsplash.com/photo-1723470915155-621e10d20dfa',
        alt: 'Modern modular kitchen with clean countertops and bright lighting',
        label: 'Common Kitchen',
      },
    ],
    virtualTourVideoId: 'dQw4w9WgXcQ',
    badge: 'Best Value',
    badgeColor: '#FADADD',
    badgeTextColor: '#C97B6E',
    highlight: true,
    size: '220 sq ft (shared)',
    occupancy: '2 Persons',
    deposit: '₹26,000 (2 months)',
    availability: '1 Bed Available',
    rules: [
      'No male guests allowed inside rooms',
      'Gate closes at 10:30 PM',
      'No cooking in rooms',
      'Maintain cleanliness in common areas',
      'No loud music after 10 PM',
    ],
    included: [
      'Electricity (up to 150 units/month per person)',
      'RO Drinking Water',
      'WiFi Internet',
      'Daily Housekeeping',
      'Common Area Access',
      'Laundry Area Access',
    ],
  },
];

export function getRoomById(id: string): RoomData | undefined {
  return rooms.find((r) => r.id === id);
}
