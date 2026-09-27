// Edit this file to customize IRON PULSE without touching component code.

export const brand = {
  name: 'IRON PULSE',
  tagline: 'FORGE YOUR BODY. BUILD YOUR POWER.',
}

export const contact = {
  address: '221 Foundry Road, Sector 18, Bengaluru, Karnataka 560001',
  phone: '+91 98765 43210',
  email: 'hello@ironpulse.fit',
  hours: [
    { day: 'Monday – Friday', time: '5:00 AM – 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 8:00 PM' },
  ],
  mapEmbedQuery: 'Bengaluru+Karnataka',
}

export const social = {
  instagram: 'https://instagram.com/ironpulse.fit',
  youtube: 'https://youtube.com/@ironpulse.fit',
  facebook: 'https://facebook.com/ironpulse.fit',
}

export const stats = [
  { value: 500, suffix: '+', label: 'Active Members' },
  { value: 10, suffix: '+', label: 'Expert Trainers' },
  { value: 20, suffix: '+', label: 'Training Programs' },
  { value: 5, suffix: '+', label: 'Years Forging Results' },
]

export const programs = [
  {
    id: 'strength',
    name: 'Strength Training',
    desc: 'Progressive overload programming built around the big lifts — squat, bench, deadlift, press.',
  },
  {
    id: 'muscle',
    name: 'Muscle Building',
    desc: 'Hypertrophy-focused splits with volume tracking to pack on quality, lasting mass.',
  },
  {
    id: 'weightloss',
    name: 'Weight Loss',
    desc: 'Metabolic conditioning paired with nutrition coaching to cut fat without losing strength.',
  },
  {
    id: 'cross',
    name: 'Cross Training',
    desc: 'Varied, high-intensity functional workouts that build all-round athletic capacity.',
  },
  {
    id: 'personal',
    name: 'Personal Training',
    desc: 'One-on-one coaching with a dedicated trainer building a plan around your goals.',
  },
  {
    id: 'functional',
    name: 'Functional Fitness',
    desc: 'Movement patterns that carry over directly into daily life and sport.',
  },
]

export const trainers = [
  {
    name: 'Arjun Mehta',
    specialty: 'Strength & Powerlifting',
    experience: '9 years',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Sana Kapoor',
    specialty: 'Hypertrophy & Physique',
    experience: '7 years',
    photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Rohit Verma',
    specialty: 'Functional & Mobility',
    experience: '6 years',
    photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    instagram: '#',
    linkedin: '#',
  },
  {
    name: 'Divya Nair',
    specialty: 'Weight Loss & Nutrition',
    experience: '8 years',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    instagram: '#',
    linkedin: '#',
  },
]

export const facilities = [
  { name: 'Modern Equipment', desc: 'Commercial-grade machines serviced weekly.' },
  { name: 'Free Weights', desc: 'Full range of plates, bars, and dumbbells up to 60kg.' },
  { name: 'Cardio Zone', desc: 'Treadmills, rowers, and bikes with heart-rate tracking.' },
  { name: 'Functional Area', desc: 'Turf, sleds, ropes, and rigs for athletic training.' },
  { name: 'Locker Rooms', desc: 'Private showers, secure lockers, fresh towels daily.' },
  { name: 'PT Studio', desc: 'A dedicated space for one-on-one coaching sessions.' },
]

export const plans = [
  {
    id: 'basic',
    name: 'BASIC',
    price: 1999,
    period: '/month',
    features: ['Full gym floor access', 'Locker room access', 'Free fitness assessment', '1 group class / week'],
    cta: 'Start Basic',
    featured: false,
  },
  {
    id: 'pro',
    name: 'PRO',
    price: 3499,
    period: '/month',
    features: ['Everything in Basic', 'Unlimited group classes', 'Monthly progress review', 'Nutrition plan template', 'Guest pass x2 / month'],
    cta: 'Go Pro',
    featured: true,
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: 5999,
    period: '/month',
    features: ['Everything in Pro', '4 personal training sessions', 'Custom nutrition coaching', 'Priority booking', 'Recovery zone access'],
    cta: 'Go Elite',
    featured: false,
  },
]

export const testimonials = [
  {
    name: 'Karan Shah',
    result: 'Lost 14kg in 5 months',
    quote: 'The coaching kept me accountable when nothing else had. Every session had a purpose.',
    photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&q=80',
  },
  {
    name: 'Meera Iyer',
    result: 'Added 25kg to her deadlift',
    quote: 'I walked in nervous about the weight room. The trainers made it feel like mine.',
    photo: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=300&q=80',
  },
  {
    name: 'Vikram Rao',
    result: 'Trained for 3 years, zero injuries',
    quote: 'Programming here is smart. Progress has been steady, not reckless.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Contact', href: '#contact' },
]
