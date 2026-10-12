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
    name_ta: "மகாலட்சுமி சிற்பங்கள்",
    tagline: "Crafting Tradition. Preserving Divine Art.",
    tagline_ta: "பாரம்பரியத்தை வடிவமைக்கிறோம். தெய்வீகக் கலையைப் பாதுகாக்கிறோம்.",
    experienceYears: 25,
    owner: "Muthu Kumar",                      // as listed on IndiaMART
    owner_ta: "முத்து குமார்",
    city: "Madurai",
    city_ta: "மதுரை",
    state: "Tamil Nadu",
    state_ta: "தமிழ்நாடு",
    country: "India",
    address: null,                             // TODO: full street address, e.g. "12, Example Street, Madurai 625001"
    address_ta: null,                          // TODO: the same address in Tamil (optional)
    phone: "+919994984943",                    // used for tel: links
    phoneDisplay: "+91 99949 84943",
    whatsapp: "919994984943",                  // country code + number, digits only
    email: null,                               // TODO: e.g. "info@yourdomain.com"
    hours: null,                               // TODO: e.g. "Mon – Sat, 9:00 AM – 7:00 PM"
    hours_ta: null,                            // TODO: e.g. "திங்கள் – சனி, காலை 9 – மாலை 7"
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

  /* Categories — grouped from the products listed on IndiaMART.
     Fields ending in _ta are the Tamil versions shown when the visitor switches to தமிழ்.
     "short" is the label used on the gallery filter buttons. */
  categories: [
    {
      id: "deity-statues",
      name: "Deity Stone Statues",
      name_ta: "தெய்வக் கற்சிலைகள்",
      short: "Deity", short_ta: "தெய்வங்கள்",
      description: "Stone statues of Hindu gods and goddesses for temples, homes and sacred spaces.",
      description_ta: "கோயில்கள், வீடுகள் மற்றும் புனித இடங்களுக்கான இந்துக் கடவுள்கள் மற்றும் தெய்வங்களின் கற்சிலைகள்.",
      image: "assets/images/products/vinayagar.jpg"
    },
    {
      id: "navagraha",
      name: "Navagraha Stone Statues",
      name_ta: "நவக்கிரக கற்சிலைகள்",
      short: "Navagraha", short_ta: "நவக்கிரகம்",
      description: "Stone statues of the Navagraha deities, including Raghu and Ketu.",
      description_ta: "ராகு, கேது உள்ளிட்ட நவக்கிரக தெய்வங்களின் கற்சிலைகள்.",
      image: "assets/images/products/raghu.jpg"
    },
    {
      id: "sarpam",
      name: "Sarpam (Naga) Stone Statues",
      name_ta: "சர்ப்பம் (நாகர்) கற்சிலைகள்",
      short: "Sarpam (Naga)", short_ta: "சர்ப்பம் (நாகர்)",
      description: "Traditional serpent-form stone statues for temples and sacred trees.",
      description_ta: "கோயில்கள் மற்றும் புனித மரங்களுக்கான பாரம்பரிய சர்ப்ப வடிவக் கற்சிலைகள்.",
      image: "assets/images/products/sarpam-2.jpg"
    },
    {
      id: "temple-sculptures",
      name: "Other Stone Sculptures",
      name_ta: "பிற கற்சிற்பங்கள்",
      short: "Other", short_ta: "பிற",
      description: "Vahanas and traditional sculptural pieces for temples and homes.",
      description_ta: "கோயில்கள் மற்றும் வீடுகளுக்கான வாகனங்கள் மற்றும் பாரம்பரிய சிற்பப் படைப்புகள்.",
      image: "assets/images/products/coconut-sirpam.jpg"
    }
  ],

  /* Products
     Fields: id (unique, no spaces), name, category (a category id from above), images (list),
     name_ta / description_ta / material_ta / availability_ta (Tamil versions),
     material, finish, height, dimensions, weight, price (null shows "Price on Request"),
     description, availability, featured (true = shown on homepage). */
  products: [
    {
      id: "vinayagar-stone-statue",
      name: "Vinayagar Stone Statue",
      name_ta: "விநாயகர் கற்சிலை",
      category: "deity-statues",
      images: ["assets/images/products/vinayagar.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "A stone statue of Lord Vinayagar (Ganesha) shown seated, with traditional detailing on the crown, ornaments and hands. Suitable for temples, homes and sacred spaces.", // TODO: verify
      description_ta: "அமர்ந்த நிலையில் உள்ள விநாயகப் பெருமானின் கற்சிலை — கிரீடம், அணிகலன்கள் மற்றும் கைகளில் பாரம்பரிய நுணுக்க வேலைப்பாடுகளுடன். கோயில்கள், வீடுகள் மற்றும் புனித இடங்களுக்கு ஏற்றது.",
      featured: true
    },
    {
      id: "ghaja-lakshmi-stone-statue",
      name: "Ghaja Lakshmi Stone Statue",
      name_ta: "கஜலட்சுமி கற்சிலை",
      category: "deity-statues",
      images: ["assets/images/products/ghaja-lakshmi.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "A stone panel depicting Goddess Lakshmi flanked by two elephants, in the traditional Ghaja Lakshmi form.", // TODO: verify
      description_ta: "இருபுறமும் யானைகளுடன் கூடிய லட்சுமி தேவியின் பாரம்பரிய கஜலட்சுமி வடிவக் கற்பலகை.",
      featured: true
    },
    {
      id: "raghu-stone-statue",
      name: "Raghu Stone Statue",
      name_ta: "ராகு கற்சிலை",
      category: "navagraha",
      images: ["assets/images/products/raghu.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "A stone statue of Raghu (Rahu), one of the Navagraha, in serpent form.", // TODO: verify
      description_ta: "நவக்கிரகங்களில் ஒருவரான ராகுவின் சர்ப்ப வடிவக் கற்சிலை.",
      featured: true
    },
    {
      id: "ketu-stone-statue",
      name: "Ketu Stone Statue",
      name_ta: "கேது கற்சிலை",
      category: "navagraha",
      images: ["assets/images/products/ketu.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "A stone statue of Ketu, one of the Navagraha, in serpent form.", // TODO: verify
      description_ta: "நவக்கிரகங்களில் ஒருவரான கேதுவின் சர்ப்ப வடிவக் கற்சிலை.",
      featured: false
    },
    {
      id: "sarpam-stone-statue",
      name: "Sarpam Stone Statue",
      name_ta: "சர்ப்பக் கற்சிலை",
      category: "sarpam",
      images: ["assets/images/products/sarpam-2.jpg", "assets/images/products/sarpam-1.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "Stone sarpam (naga) statues in the coiled serpent form, traditionally installed in temple premises and beneath sacred trees.", // TODO: verify
      description_ta: "சுருண்ட பாம்பு வடிவிலான சர்ப்பம் (நாகர்) கற்சிலைகள் — பாரம்பரியமாகக் கோயில் வளாகங்களிலும் புனித மரங்களின் அடியிலும் நிறுவப்படுபவை.",
      featured: true
    },
    {
      id: "moonjur-stone-statue",
      name: "Moonjur Stone Statue",
      name_ta: "மூஞ்சூறு கற்சிலை",
      category: "temple-sculptures",
      images: ["assets/images/products/moonjur.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "A stone statue of the Moonjur (mooshika), the vahana of Lord Vinayagar.", // TODO: verify
      description_ta: "விநாயகப் பெருமானின் வாகனமான மூஞ்சூறின் கற்சிலை.",
      featured: false
    },
    {
      id: "coconut-sirpam-stone-statue",
      name: "Coconut Sirpam Stone Statue",
      name_ta: "தேங்காய் கற்சிற்பம்",
      category: "temple-sculptures",
      images: ["assets/images/products/coconut-sirpam.jpg"],
      material: "Stone", material_ta: "கல்",
      finish: null, height: null, dimensions: null, weight: null, price: null,
      availability: "Sizes and pricing on request",
      availability_ta: "அளவுகள் மற்றும் விலை கோரிக்கையின் பேரில்",
      description: "A stone sculpture in the form of a coconut on a carved base.", // TODO: verify
      description_ta: "செதுக்கப்பட்ட அடித்தளத்தின் மீது தேங்காய் வடிவிலான கற்சிற்பம்.",
      featured: false
    }
  ],

  /* Optional workshop / product videos. Example:
     { title: "At the workshop", youtubeId: "dQw4w9WgXcQ" } */
  videos: []
};
