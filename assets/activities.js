const initialActivities = [
  {
    id: "1",
    title: "Surfing",
    categoryIds: ["111", "112", "113"],
    area: "Soorts-Hossegor",
    country: "France",
    description:
      "Immerse yourself in the rhythmic dance of the Atlantic waves as you surf the pristine shores of Hossegor. Feel the energy of the ocean beneath your board, where each crest and break becomes a moment of pure exhilaration. Hossegor, a haven for surfers, invites you to ride the tides and embrace the artistry of the sea.",
    imageUrl:
      "https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "2",
    title: "Hiking",
    categoryIds: ["111", "114", "115"],
    area: "Garmisch-Partenkirchen",
    country: "Germany",
    description:
      "Embark on a journey through the enchanting landscapes of Garmisch, where every step is a discovery of alpine grandeur. Traverse ancient forests, ascend majestic peaks, and breathe in the crisp mountain air as you explore trails that lead to panoramic vistas. Garmisch, a tapestry of emerald meadows and cascading waterfalls, beckons hikers to embrace the embrace of nature's wonder.",
    imageUrl:
      "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "3",
    title: "Kayaking",
    categoryIds: ["111", "112", "113"],
    area: "Phang Nga Bay",
    country: "Thailand",
    description:
      "Glide through the emerald waters of Phang Nga Bay, where limestone cliffs rise majestically from the sea. Kayaking in this tropical paradise is a journey through hidden lagoons and picturesque caves. Let the tranquility of the bay surround you as you paddle beneath towering karst formations, creating memories of serenity in the heart of Thailand's natural beauty.",
    imageUrl:
      "https://images.unsplash.com/photo-1706724728271-a81750af4b8f?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "4",
    title: "Biking",
    categoryIds: ["111", "112", "114"],
    area: "Onomichi",
    country: "Japan",
    description:
      "Explore the charming streets of Onomichi on two wheels, where each pedal takes you on a journey through time and tradition. Bike through narrow alleys, past historic temples, and along the scenic Shimanami Kaido cycling route. Onomichi, a quaint coastal town, invites cyclists to savor the beauty of its landscapes and the warmth of its cultural heritage.",
    imageUrl:
      "https://images.unsplash.com/photo-1458708606976-4af51a03c931?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "5",
    title: "Hot Air Ballooning",
    categoryIds: ["111", "115"],
    area: "Cappadocia",
    country: "Turkey",
    description:
      "Soar above the otherworldly landscapes of Cappadocia in a hot air balloon. Drift effortlessly over fairy-tale-like valleys, ancient rock formations, and charming villages. Experience the magic of sunrise or sunset from the sky, creating memories that defy gravity.",
    imageUrl:
      "https://images.unsplash.com/photo-1507691640734-887fa7be3377?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "6",
    title: "Sailing",
    categoryIds: ["111", "115", "113"],
    area: "Fiji",
    country: "Fiji",
    description:
      "Set sail across the azure waters of the Fiji Islands, where a tapestry of coral reefs and palm-fringed islands awaits. Feel the gentle trade winds as you navigate between vibrant coral gardens and secluded bays. Sailing in Fiji is a voyage into paradise, where the turquoise sea and warm hospitality create memories of a seafaring adventure like no other.",
    imageUrl:
      "https://images.unsplash.com/uploads/141095223684089854824/a352f6f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "7",
    title: "Rock Climbing",
    categoryIds: ["111", "112", "115"],
    area: "Yosemite National Park",
    country: "USA",
    description:
      "Challenge yourself with the thrilling climbs of Yosemite's granite walls. Whether you're scaling El Capitan or Half Dome, each ascent offers a unique test of skill and endurance. Yosemite's stunning vistas and rugged terrain make it a climber's paradise.",
    imageUrl:
      "https://images.unsplash.com/photo-1522362485439-83fcff4673f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "8",
    title: "Scuba Diving",
    categoryIds: ["111", "113", "112"],
    area: "Great Barrier Reef",
    country: "Australia",
    description:
      "Dive into the vibrant underwater world of the Great Barrier Reef. Encounter an array of marine life, from colorful coral formations to diverse fish species. Scuba diving here is an unparalleled experience, offering breathtaking views of one of the world's natural wonders.",
    imageUrl:
      "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "9",
    title: "Skiing",
    categoryIds: ["111", "116", "112"],
    area: "Zermatt",
    country: "Switzerland",
    description:
      "Carve through the pristine snow of Zermatt's slopes. With the majestic Matterhorn as your backdrop, skiing in Zermatt offers a blend of challenging runs and stunning alpine scenery. Experience the thrill of the descent and the beauty of the Swiss Alps.",
    imageUrl:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "10",
    title: "Paragliding",
    categoryIds: ["111", "112", "115"],
    area: "Interlaken",
    country: "Switzerland",
    description:
      "Soar above the picturesque landscapes of Interlaken. Paragliding here offers a bird's-eye view of lakes, mountains, and valleys. The sensation of flying and the breathtaking scenery combine for an unforgettable adventure.",
    imageUrl:
      "https://images.unsplash.com/photo-1694811401894-59f6a0f5237e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "11",
    title: "Mountain Biking",
    categoryIds: ["111", "112", "115"],
    area: "Whistler",
    country: "Canada",
    description:
      "Experience the thrill of mountain biking in Whistler, renowned for its challenging trails and stunning scenery. Ride through dense forests, over rocky terrains, and down exhilarating slopes. Whistler offers an adventure that tests your skills and rewards you with breathtaking views.",
    imageUrl:
      "https://images.unsplash.com/photo-1629056528325-f328b5f27ae7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "12",
    title: "Snorkeling",
    categoryIds: ["111", "113", "114"],
    area: "Molokini Crater",
    country: "USA",
    description:
      "Discover the vibrant underwater world of Molokini Crater, a partially submerged volcanic crater. Snorkeling here provides an opportunity to swim alongside colorful coral reefs and diverse marine life in crystal-clear waters. Molokini offers an unforgettable experience for nature enthusiasts.",
    imageUrl:
      "https://images.unsplash.com/photo-1708487864802-a85aa984c93a?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "13",
    title: "Skydiving",
    categoryIds: ["111", "112", "115"],
    area: "Queenstown",
    country: "New Zealand",
    description:
      "Feel the adrenaline rush as you skydive over the stunning landscapes of Queenstown. Experience the ultimate adventure as you freefall from a plane, enjoying panoramic views of mountains, lakes, and valleys. Skydiving in Queenstown is a thrill-seeker's dream.",
    imageUrl:
      "https://images.unsplash.com/photo-1659901981145-dbc056431a8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "14",
    title: "Caving",
    categoryIds: ["111", "115", "114"],
    area: "Waitomo Caves",
    country: "New Zealand",
    description:
      "Explore the underground wonders of the Waitomo Caves. Navigate through a labyrinth of limestone formations and marvel at the glowworms illuminating the caves. This caving adventure offers a unique and mystical experience deep within the earth.",
    imageUrl:
      "https://images.unsplash.com/photo-1638793774287-90f9505b2bb1?q=80&w=1445&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
  {
    id: "15",
    title: "White Water Rafting",
    categoryIds: ["111", "113", "115"],
    area: "Zambezi River",
    country: "Zambia",
    description:
      "Tackle the exhilarating rapids of the Zambezi River, one of the world's premier white water rafting destinations. Navigate through turbulent waters, surrounded by stunning gorges and wildlife. This adventure offers an intense and unforgettable rafting experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1692095296859-60427614df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isBookmarked: false,
  },
];

export default initialActivities;
