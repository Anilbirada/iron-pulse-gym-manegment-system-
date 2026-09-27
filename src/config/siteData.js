const siteData = {
  brand: {
    name: 'IRON PULSE',
    tagline: 'Premium Fitness & Strength Training',
    description:
      'Where raw determination meets world-class training. IRON PULSE is more than a gym — it is a forge for those who refuse to settle.',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Programs', href: '#programs' },
      { label: 'Trainers', href: '#trainers' },
      { label: 'Membership', href: '#membership' },
      { label: 'Facilities', href: '#facilities' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    headline: 'FORGE YOUR BODY. BUILD YOUR POWER.',
    subtext:
      'Step into the forge. Our world-class trainers and cutting-edge equipment are here to push you beyond limits you never knew existed.',
    ctaPrimary: { label: 'Join Now', href: '#membership' },
    ctaSecondary: { label: 'Explore Programs', href: '#programs' },
  },

  about: {
    title: 'More Than a Gym',
    description:
      'IRON PULSE was built on a single belief: strength is earned, never given. Every square foot of our facility, every program we run, and every trainer on our team exists to serve one purpose — helping you become the strongest version of yourself. We don\'t do shortcuts. We do results.',
    stats: [
      { value: 500, suffix: '+', label: 'Members' },
      { value: 10, suffix: '+', label: 'Expert Trainers' },
      { value: 20, suffix: '+', label: 'Programs' },
      { value: 5, suffix: '+', label: 'Years Strong' },
    ],
  },

  programs: [
    {
      id: 'strength',
      name: 'Strength Training',
      description:
        'Build raw power with progressive overload programs designed for all levels. Barbells, dumbbells, and compound lifts.',
      icon: 'dumbbell',
    },
    {
      id: 'muscle',
      name: 'Muscle Building',
      description:
        'Hypertrophy-focused routines to sculpt lean muscle mass. Structured splits with periodized volume.',
      icon: 'flexBicep',
    },
    {
      id: 'weightloss',
      name: 'Weight Loss',
      description:
        'High-intensity metabolic sessions that torch calories and keep your metabolism firing long after you leave.',
      icon: 'flame',
    },
    {
      id: 'crosstraining',
      name: 'Cross Training',
      description:
        'Varied functional workouts that build endurance, agility, and all-around athleticism. Never the same session twice.',
      icon: 'bolt',
    },
    {
      id: 'personal',
      name: 'Personal Training',
      description:
        'One-on-one coaching tailored to your goals. Your trainer, your plan, your pace — with zero guesswork.',
      icon: 'userCoach',
    },
    {
      id: 'functional',
      name: 'Functional Fitness',
      description:
        'Train movements, not just muscles. Improve mobility, balance, and real-world strength for everyday life.',
      icon: 'heartPulse',
    },
  ],

  trainers: [
    {
      name: 'Marcus Cole',
      specialty: 'Strength & Powerlifting',
      experience: '12 years experience',
      photo: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop&crop=face',
      socialUrl: 'https://instagram.com',
    },
    {
      name: 'Sarah Voss',
      specialty: 'HIIT & Weight Loss',
      experience: '8 years experience',
      photo: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&h=400&fit=crop&crop=face',
      socialUrl: 'https://instagram.com',
    },
    {
      name: 'David Kimura',
      specialty: 'Functional Training',
      experience: '10 years experience',
      photo: 'https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=400&h=400&fit=crop&crop=face',
      socialUrl: 'https://instagram.com',
    },
    {
      name: 'Elena Rivera',
      specialty: 'Bodybuilding & Nutrition',
      experience: '9 years experience',
      photo: 'https://images.unsplash.com/photo-1609899517237-354987e80030?w=400&h=400&fit=crop&crop=face',
      socialUrl: 'https://instagram.com',
    },
  ],

  facilities: [
    {
      name: 'Modern Equipment',
      description: 'State-of-the-art machines from top brands, regularly maintained and upgraded.',
      icon: 'gear',
    },
    {
      name: 'Free Weights Area',
      description: 'Extensive dumbbell rack (5–120 lbs), Olympic platforms, squat racks, and benches.',
      icon: 'dumbbell',
    },
    {
      name: 'Cardio Zone',
      description: 'Treadmills, rowing machines, bikes, and stair climbers with integrated displays.',
      icon: 'heartPulse',
    },
    {
      name: 'Functional Training Area',
      description: 'Battle ropes, kettlebells, TRX systems, plyo boxes, and open turf for dynamic work.',
      icon: 'bolt',
    },
    {
      name: 'Locker Rooms',
      description: 'Clean, spacious locker rooms with showers, saunas, and complimentary toiletries.',
      icon: 'locker',
    },
    {
      name: 'Personal Training Area',
      description: 'Private training suites for focused one-on-one sessions away from the main floor.',
      icon: 'userCoach',
    },
  ],

  membership: {
    tiers: [
      {
        name: 'Basic',
        price: 29,
        period: '/month',
        features: [
          'Full gym access',
          'Locker room access',
          'Free Wi-Fi',
          '2 guest passes / month',
        ],
        isFeatured: false,
        ctaText: 'Get Started',
      },
      {
        name: 'Pro',
        price: 59,
        period: '/month',
        features: [
          'Everything in Basic',
          'All group classes',
          'Nutrition consultation',
          'Sauna & recovery zone',
          '5 guest passes / month',
        ],
        isFeatured: true,
        ctaText: 'Go Pro',
      },
      {
        name: 'Elite',
        price: 99,
        period: '/month',
        features: [
          'Everything in Pro',
          '4 personal training sessions',
          'Custom meal plan',
          'Priority booking',
          'Unlimited guest passes',
          'Exclusive member events',
        ],
        isFeatured: false,
        ctaText: 'Go Elite',
      },
    ],
  },

  testimonials: [
    {
      quote:
        'I walked in weighing 240 lbs with zero confidence. Eleven months later I\'m at 185 and I\'ve never felt stronger. The trainers here don\'t just count reps — they change lives.',
      name: 'Jason Mercer',
      result: 'Lost 55 lbs in 11 months',
      photo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        'As a competitive powerlifter, I needed a gym that takes strength seriously. Iron Pulse\'s coaching and equipment are on another level. I hit a 500 lb deadlift here.',
      name: 'Priya Sharma',
      result: 'Competition-ready in 6 months',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        'The functional training program fixed my chronic back pain and got me moving again. I went from barely touching my toes to doing Turkish get-ups with a 24 kg bell.',
      name: 'Tom Hensley',
      result: 'Pain-free after 4 months',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
  ],

  ctaBanner: {
    headline: 'READY TO BECOME STRONGER?',
    buttonText: 'START YOUR JOURNEY',
    buttonLink: '#membership',
  },

  contact: {
    address: '742 Iron Works Blvd, Austin, TX 73301',
    phone: '+1 (512) 555-0199',
    email: 'info@ironpulse.com',
    hours: [
      { days: 'Monday – Friday', time: '5:00 AM – 11:00 PM' },
      { days: 'Saturday', time: '6:00 AM – 9:00 PM' },
      { days: 'Sunday', time: '7:00 AM – 7:00 PM' },
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220957.04830498444!2d-97.89631242968749!3d30.307182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  },

  footer: {
    blurb:
      'Forging strength since 2021. IRON PULSE is Austin\'s premier training facility for athletes, lifters, and anyone ready to work.',
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Programs', href: '#programs' },
      { label: 'Membership', href: '#membership' },
      { label: 'Contact', href: '#contact' },
    ],
    socialLinks: [
      { platform: 'Instagram', url: 'https://instagram.com/ironpulse' },
      { platform: 'Facebook', url: 'https://facebook.com/ironpulse' },
      { platform: 'Twitter', url: 'https://twitter.com/ironpulse' },
      { platform: 'YouTube', url: 'https://youtube.com/ironpulse' },
    ],
    copyright: `© ${new Date().getFullYear()} IRON PULSE. All rights reserved.`,
  },

  meta: {
    title: 'IRON PULSE | Premium Fitness & Strength Training',
    description:
      'IRON PULSE — Austin\'s premier gym for strength training, muscle building, and personal coaching. World-class equipment, expert trainers, real results.',
    ogImage: '/og-image.jpg',
    url: 'https://ironpulse.com',
  },
};

export default siteData;
