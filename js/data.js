/* =====================================================================
   MAHALAKSHMI SCULPTURES — SITE CONTENT
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to update business details,
   categories and products. No coding knowledge required — just keep the
   quotes, commas and brackets in place.

   • Set a value to null to hide it on the website.
   • Lines marked  TODO  are sample / unconfirmed content — please verify
     or replace them before going live.
   • Images: put photos in assets/images/products/ and reference them by
     path. Portrait photos (3:4) look best.
   ===================================================================== */

window.SITE = {
  business: {
    name: "Mahalakshmi Sculptures",
    tagline: "Crafting Tradition. Preserving Divine Art.",
    experienceYears: 25,
    owner: "Muthu Kumar",                      // as listed on IndiaMART
    city: "Madurai",
    state: "Tamil Nadu",
    country: "India",
    address: null,                             // TODO: full street address, e.g. "12, Example Street, Madurai 625001"
    phone: "+919994984943",                    // used for tel: links
    phoneDisplay: "+91 99949 84943",
    whatsapp: "919994984943",                  // country code + number, digits only
    email: null,                               // TODO: e.g. "info@yourdomain.com"
    hours: null,                               // TODO: e.g. "Mon – Sat, 9:00 AM – 7:00 PM"
    mapQuery: "Madurai, Tamil Nadu",           // TODO: replace with exact address once confirmed
    indiamart: "https://www.indiamart.com/mahalakshmi-sculptures-madurai/",
    social: {                                  // add full URLs when available, e.g. instagram: "https://instagram.com/..."
      instagram: null,
      facebook: null,
      youtube: null
    }
  },

  /* Enquiry delivery
     - Leave endpoint empty ("") → enquiries are sent through WhatsApp to the number above.
     - To ALSO receive enquiries by email, create a free form endpoint (e.g. Formspree, Getform,
       or your own backend) and paste its URL here. The form will POST JSON to it and only
       show "submitted" when the server confirms success. */
  enquiry: {
    endpoint: ""
  },

  /* Categories — grouped from the products listed on IndiaMART. */
  categories: [
    {
      id: "deity-statues",
      name: "Deity Stone Statues",
      description: "Stone statues of Hindu gods and goddesses for temples, homes and sacred spaces.",
      image: "assets/images/products/vinayagar.jpg"
    },
    {
      id: "navagraha",
      name: "Navagraha Stone Statues",
      description: "Stone statues of the Navagraha deities, including Raghu and Ketu.",
      image: "assets/images/products/raghu.jpg"
    },
    {
      id: "sarpam",
      name: "Sarpam (Naga) Stone Statues",
      description: "Traditional serpent-form stone statues for temples and sacred trees.",
      image: "assets/images/products/sarpam-2.jpg"
    },
    {
      id: "temple-sculptures",
      name: "Other Stone Sculptures",
      description: "Vahanas and traditional sculptural pieces for temples and homes.",
      image: "assets/images/products/coconut-sirpam.jpg"
    }
  ],

  /* Products
     Fields: id (unique, no spaces), name, category (a category id from above), images (list),
     material, finish, height, dimensions, weight, price (null shows "Price on Request"),
     description, availability, featured (true = shown on homepage). */
  products: [
    {
      id: "vinayagar-stone-statue",
      name: "Vinayagar Stone Statue",
      category: "deity-statues",
      images: ["assets/images/products/vinayagar.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "A stone statue of Lord Vinayagar (Ganesha) shown seated, with traditional detailing on the crown, ornaments and hands. Suitable for temples, homes and sacred spaces.", // TODO: verify
      featured: true
    },
    {
      id: "ghaja-lakshmi-stone-statue",
      name: "Ghaja Lakshmi Stone Statue",
      category: "deity-statues",
      images: ["assets/images/products/ghaja-lakshmi.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "A stone panel depicting Goddess Lakshmi flanked by two elephants, in the traditional Ghaja Lakshmi form.", // TODO: verify
      featured: true
    },
    {
      id: "raghu-stone-statue",
      name: "Raghu Stone Statue",
      category: "navagraha",
      images: ["assets/images/products/raghu.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "A stone statue of Raghu (Rahu), one of the Navagraha, in serpent form.", // TODO: verify
      featured: true
    },
    {
      id: "ketu-stone-statue",
      name: "Ketu Stone Statue",
      category: "navagraha",
      images: ["assets/images/products/ketu.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "A stone statue of Ketu, one of the Navagraha, in serpent form.", // TODO: verify
      featured: false
    },
    {
      id: "sarpam-stone-statue",
      name: "Sarpam Stone Statue",
      category: "sarpam",
      images: ["assets/images/products/sarpam-2.jpg", "assets/images/products/sarpam-1.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "Stone sarpam (naga) statues in the coiled serpent form, traditionally installed in temple premises and beneath sacred trees.", // TODO: verify
      featured: true
    },
    {
      id: "moonjur-stone-statue",
      name: "Moonjur Stone Statue",
      category: "temple-sculptures",
      images: ["assets/images/products/moonjur.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "A stone statue of the Moonjur (mooshika), the vahana of Lord Vinayagar.", // TODO: verify
      featured: false
    },
    {
      id: "coconut-sirpam-stone-statue",
      name: "Coconut Sirpam Stone Statue",
      category: "temple-sculptures",
      images: ["assets/images/products/coconut-sirpam.jpg"],
      material: "Stone",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      description: "A stone sculpture in the form of a coconut on a carved base.", // TODO: verify
      featured: false
    }
  ],

  /* Optional workshop / product videos. Example:
     { title: "At the workshop", youtubeId: "dQw4w9WgXcQ" } */
  videos: []
};
