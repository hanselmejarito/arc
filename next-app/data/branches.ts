export type Province = "nueva-ecija" | "tarlac";

export type Branch = {
  number: number;
  name: string;
  shortName: string;
  brand: "ARC" | "ARCII" | "LIFEMED";
  address: string;
  hours: string;
  phone: string;
  phoneHref: string;
  province: Province;
  accredited: boolean;
  mapQuery: string;
  coordinates: [number, number];
  photo?: string;
  mapEmbedUrl?: string;
  mapStyle: string;
  mapShape: "cross" | "roads" | "circle" | "triangle" | "waves" | "box";
  main?: boolean;
};

export const branches: Branch[] = [
  {
    number: 1,
    name: "ARC Guimba — Main Branch",
    shortName: "Guimba — ARC (Main)",
    brand: "ARC",
    address:
      "JB Lacson Bldg, Parairo Street, Cor Saranay District, Guimba, Nueva Ecija",
    hours: "Daily 7AM–11PM",
    phone: "0946 945 1531",
    phoneHref: "09469451531",
    province: "nueva-ecija",
    accredited: true,
    mapQuery: "ARC ANTI-RABIES GUIMBA BRANCH, Guimba, Nueva Ecija",
    coordinates: [15.65841885, 120.76641978],
    photo: "/branches/guimba.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.7476849314085!2d120.76641977676934!3d15.658418850301473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33912d0060b57023%3A0x1f5c9f81c3f453!2sARC%20ANTI-RABIES%20GUIMBA%20BRANCH!5e0!3m2!1sen!2sph!4v1783994626920!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#e8f0f8,#ccddf0)",
    mapShape: "cross",
    main: true,
  },
  {
    number: 2,
    name: "ARC Baloc Branch",
    shortName: "Baloc — ARC",
    brand: "ARC",
    address: "MLD Bldg., Purok 3, Baloc, Sto. Domingo, Nueva Ecija",
    hours: "Daily 8AM–5PM",
    phone: "0953 665 5592",
    phoneHref: "09536655592",
    province: "nueva-ecija",
    accredited: false,
    mapQuery: "ARC BALOC, Sto. Domingo, Nueva Ecija",
    coordinates: [15.6420077, 120.8862445],
    photo: "/branches/baloc.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.055970512497!2d120.88624449999999!3d15.642007699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33912b00474e6e11%3A0xbabf6ac14b503d14!2sARC%20BALOC!5e0!3m2!1sen!2sph!4v1783994461390!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#f0e8e8,#f0d0d0)",
    mapShape: "cross",
  },
  {
    number: 3,
    name: "ARC Talavera Branch",
    shortName: "Talavera — ARC",
    brand: "ARC",
    address: "Maharlika Highway, Brgy. Mestrang Kikay, Talavera, Nueva Ecija",
    hours: "Daily 7AM–5PM",
    phone: "0955 750 7872",
    phoneHref: "09557507872",
    province: "nueva-ecija",
    accredited: false,
    mapQuery: "HWJ9+PRF, Talavera, Nueva Ecija",
    coordinates: [15.58185129, 120.91972692],
    photo: "/branches/talavera.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.3979151199307!2d120.9197269151966!3d15.58185128754092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972af35a813933%3A0x7baa4797ff2d831b!2sHWJ9%2BPRF%2C%20Talavera%2C%20Nueva%20Ecija!5e0!3m2!1sen!2sph!4v1784008382943!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#f8e8f0,#f0c8e0)",
    mapShape: "roads",
  },
  {
    number: 4,
    name: "ARC Cabanatuan City Branch",
    shortName: "Cabanatuan City — ARC",
    brand: "ARC",
    address:
      "Stall No. 20, Mabini Arcade, Mabini St., Quezon District, Cabanatuan City, Nueva Ecija",
    hours: "Daily 7AM–11PM",
    phone: "0952 528 2411",
    phoneHref: "09525282411",
    province: "nueva-ecija",
    accredited: true,
    mapQuery: "ARC Animal Bite Center, Cabanatuan City, Nueva Ecija",
    coordinates: [15.4896628, 120.95303929],
    photo: "/branches/cabanatuan.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15379.610965647598!2d120.95303928715818!3d15.48966280000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33972900731ab6a3%3A0xcac922e12d86bfe3!2sARC%20Animal%20Bite%20Center!5e0!3m2!1sen!2sph!4v1783996419747!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#e8f8ee,#cceedc)",
    mapShape: "circle",
  },
  {
    number: 5,
    name: "ARC Palayan City Branch",
    shortName: "Palayan City — ARC",
    brand: "ARC",
    address: "Aurora Road, Caimito, Palayan City, Nueva Ecija",
    hours: "Daily 8AM–8PM",
    phone: "0997 096 8023",
    phoneHref: "09970968023",
    province: "nueva-ecija",
    accredited: true,
    mapQuery: "ARC ANTI-RABIES PALAYAN CITY, Nueva Ecija",
    coordinates: [15.5445221, 121.04762817],
    photo: "/branches/palayan.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30751.046014812306!2d121.04762817431642!3d15.544522100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339733bd76212015%3A0xbdc521317f4a4349!2sARC%20ANTI-RABIES%20PALAYAN%20CITY!5e0!3m2!1sen!2sph!4v1783995903408!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#eef8e8,#d0eec4)",
    mapShape: "triangle",
  },
  {
    number: 6,
    name: "ARC Laur Branch",
    shortName: "Laur — ARC",
    brand: "ARC",
    address: "Gen. Tinio St., Brgy. 1, Laur, Nueva Ecija",
    hours: "Daily 8AM–5PM",
    phone: "0997 652 7942",
    phoneHref: "09976527942",
    province: "nueva-ecija",
    accredited: false,
    mapQuery: "Laur Public Market, Laur, Nueva Ecija",
    coordinates: [15.5840926, 121.1851264],
    photo: "/branches/laur.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7686.282788039812!2d121.1851264!3d15.584092600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390cb4fb261a9cf%3A0x154febd3f1604b12!2sLaur%20Public%20Market!5e0!3m2!1sen!2sph!4v1784009101879!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#e8eef8,#c0d8f8)",
    mapShape: "circle",
  },
  {
    number: 7,
    name: "ARC Paniqui Branch",
    shortName: "Paniqui — ARC",
    brand: "ARC",
    address: "BZMAN Center, Zamora St., Poblacion Sur, Paniqui, Tarlac",
    hours: "Daily 7AM–5PM",
    phone: "0953 127 8974",
    phoneHref: "09531278974",
    province: "tarlac",
    accredited: false,
    mapQuery: "Bz Man Center, Paniqui, Tarlac",
    coordinates: [15.66631209, 120.57996905],
    photo: "/branches/paniqui.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.1999121451043!2d120.57996905483071!3d15.666312089386656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396cb2c0cf42fd1%3A0x1ecccae7307cfb6b!2sBz%20Man%20Center!5e0!3m2!1sen!2sph!4v1783995842546!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#e8f4f8,#bcd8ec)",
    mapShape: "circle",
  },
  {
    number: 8,
    name: "ARCII Rizal Branch",
    shortName: "Rizal — ARCII",
    brand: "ARCII",
    address: "KBKD Bldg., Poblacion Sur, Rizal, Nueva Ecija",
    hours: "Daily 7AM–5PM",
    phone: "0965 210 0188",
    phoneHref: "09652100188",
    province: "nueva-ecija",
    accredited: true,
    mapQuery: "PROLIFE DIAGNOSTIC CENTER, Rizal, Nueva Ecija",
    coordinates: [15.70734512, 121.10405696],
    photo: "/branches/rizal.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.434356849476!2d121.10405696421118!3d15.707345118627936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ce49bb11337b%3A0xef904168427330ce!2sPROLIFE%20DIAGNOSTIC%20CENTER!5e0!3m2!1sen!2sph!4v1784008050287!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#f8f8e8,#eeeed0)",
    mapShape: "waves",
  },
  {
    number: 9,
    name: "ARCII Talugtug Branch",
    shortName: "Talugtug — ARCII",
    brand: "ARCII",
    address: "Zone 3, Talugtug, Nueva Ecija",
    hours: "Daily 7AM–5PM",
    phone: "0975 784 5887",
    phoneHref: "09757845887",
    province: "nueva-ecija",
    accredited: false,
    mapQuery: "ARC Anti - Rabies Clinic - TALUGTUG N,E",
    coordinates: [15.77841886, 120.80821253],
    photo: "/branches/talugtug.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.483892563873!2d120.8082125308369!3d15.77841886350014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339129ab14ed220d%3A0x91abf64c7adaefb6!2sARC%20Anti%20-%20Rabies%20Clinic%20-%20TALUGTUG%20N%2CE!5e0!3m2!1sen!2sph!4v1783996560448!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#e8eef8,#c8d8f0)",
    mapShape: "waves",
  },
  {
    number: 10,
    name: "ARCII Gapan City Branch",
    shortName: "Gapan City — ARCII",
    brand: "ARCII",
    address: "ARC Anti Rabies Clinic, Gapan City, Nueva Ecija",
    hours: "Daily 8AM–6PM",
    phone: "0975 754 1622",
    phoneHref: "09757541622",
    province: "nueva-ecija",
    accredited: false,
    mapQuery: "ARC Anti-Rabies Clinic - GAPAN CITY - NUEVA ECIJA",
    coordinates: [15.29549792, 120.94317239],
    photo: "/branches/gapan.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.491572646149!2d120.94317239127943!3d15.295497921735178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339721685630c1b1%3A0x511268287bb7d646!2sARC%20Anti-Rabies%20Clinic%20-%20GAPAN%20CITY%20-%20NUEVA%20ECIJA!5e0!3m2!1sen!2sph!4v1783996859419!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#f8f0e8,#f0dcc0)",
    mapShape: "box",
  },
  {
    number: 11,
    name: "LIFEMED Muñoz Branch",
    shortName: "Muñoz — LIFEMED",
    brand: "LIFEMED",
    address:
      "2/F Queseng Bldg., D. Delos Santos St., Poblacion East, Science City of Muñoz, Nueva Ecija",
    hours: "Daily 8AM–6PM",
    phone: "0953 105 8993",
    phoneHref: "09531058993",
    province: "nueva-ecija",
    accredited: true,
    mapQuery: "Lifemed Animal Bite Clinic, Science City of Muñoz, Nueva Ecija",
    coordinates: [15.71313985, 120.90207468],
    photo: "/branches/munoz.png",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.717466458564!2d120.90207467676977!3d15.713139848869206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d700134bb85d%3A0x42465e47f5b69113!2sLifemed%20Animal%20Bite%20Clinic!5e0!3m2!1sen!2sph!4v1783996915017!5m2!1sen!2sph",
    mapStyle: "linear-gradient(135deg,#e8f8ee,#b8e8c8)",
    mapShape: "box",
  },
];
