/* =====================================================================
   Mahalakshmi Sculptures — translations (English / Tamil)
   ---------------------------------------------------------------------
   To change any wording, edit the text on the right-hand side.
   {placeholders} in curly braces are filled in automatically — keep them.
   Product and category names in Tamil live in js/data.js (name_ta etc.).
   ===================================================================== */
(function () {
  "use strict";

  const STR = {
    en: {
      "meta.home.title": "Mahalakshmi Sculptures, Madurai | Stone Statues & Temple Sculptures",
      "brand.name": "Mahalakshmi",
      "brand.sub": "Sculptures · {city}",
      "lang.label": "Language",

      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.collections": "Our Collections",
      "nav.gallery": "Gallery",
      "nav.why": "Why Choose Us",
      "nav.contact": "Contact",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "cta.quote": "Request a Quote",
      "cta.quoteShort": "Request a Quote",
      "cta.waUs": "WhatsApp Us",
      "cta.call": "Call Now",
      "cta.wa": "WhatsApp",
      "cta.waFloat": "Chat with us on WhatsApp",

      "hero.eyebrow": "Stone Sculptures · Madurai",
      "hero.title": "Timeless Sculptures. <em>A Legacy of Craftsmanship.</em>",
      "hero.lead": "With over 25 years of experience, Mahalakshmi Sculptures celebrates the beauty of traditional Indian artistry through carefully crafted sculptures that bring devotion, culture, and elegance to every space.",
      "hero.explore": "Explore Our Collection",
      "hero.enquire": "Enquire Now",
      "hero.trust1": "25+ Years of Experience",
      "hero.trust2": "Based in Madurai, Tamil Nadu",
      "hero.alt": "Vinayagar stone statue by Mahalakshmi Sculptures",
      "hero.capTitle": "Vinayagar Stone Statue",
      "hero.capSub": "From our collection",

      "about.eyebrow": "About Us",
      "about.title": "A Tradition of Excellence for Over 25 Years",
      "about.p1": "At Mahalakshmi Sculptures, we believe every sculpture represents more than form and detail—it reflects culture, devotion, and artistic expression. With over 25 years of experience in the sculpture business, we are committed to helping customers discover sculptures that reflect their preferences and requirements.",
      "about.p2": "Based in Madurai, Tamil Nadu, we aim to provide a reliable and personal experience for customers seeking traditional sculptures and artistic pieces.",
      "about.alt": "Ghaja Lakshmi stone panel with Goddess Lakshmi flanked by elephants",
      "about.badge": "Years of<br>Experience",
      "about.h1": "25+ Years of Experience",
      "about.h2": "Traditional Indian Artistry",
      "about.h3": "Customer-Focused Service",

      "col.eyebrow": "Our Collections",
      "col.title": "Explore Our Collection",
      "col.sub": "Discover sculptural pieces inspired by Indian traditions, artistic detail, and timeless design.",
      "col.design1": "1 design",
      "col.designN": "{n} designs",
      "col.view": "View Collection",
      "col.enquire": "Enquire About Products",
      "col.ctaTitle": "Looking for something specific?",
      "col.ctaText": "Tell us the deity, size or design you have in mind and we will let you know what is possible.",
      "col.ctaBtn": "Share Your Requirement",

      "feat.eyebrow": "Featured",
      "feat.title": "Featured Sculptures",
      "feat.viewAll": "View all sculptures",
      "card.details": "View Details",
      "card.enquire": "Enquire",

      "gal.eyebrow": "Our Gallery",
      "gal.title": "Artistry in Every Detail",
      "gal.sub": "Photographs of our stone sculptures. Select any image to view it larger.",
      "gal.all": "All",
      "gal.filterLabel": "Filter gallery by category",
      "gal.enlarge": "Enlarge image: {name}",
      "lb.label": "Image viewer",
      "lb.close": "Close viewer",
      "lb.prev": "Previous image",
      "lb.next": "Next image",
      "lb.details": "View product details →",

      "why.eyebrow": "Why Choose Mahalakshmi Sculptures?",
      "why.title": "Experience You Can Trust. Craftsmanship You Can Appreciate.",
      "why.1t": "25+ Years",
      "why.1p": "Over 25 years of experience in the sculpture business.",
      "why.2t": "Rooted in Tradition",
      "why.2p": "A collection inspired by traditional Indian sculpture.",
      "why.3t": "Helpful Guidance",
      "why.3p": "Product information and guidance to help you choose.",
      "why.4t": "Direct Contact",
      "why.4p": "Speak to us directly by phone or WhatsApp about any product.",
      "why.5t": "Clear Quotations",
      "why.5p": "Assistance with product specifications and quotations.",

      "enq.eyebrow": "Enquiry",
      "enq.title": "Looking for the Perfect Sculpture?",
      "enq.sub": "Tell us what you are looking for, and our team will help you with product details and pricing.",
      "aside.label": "Contact us directly",
      "aside.title": "Prefer to talk?",
      "aside.text": "Call or message us directly for product details, sizes and quotations.",
      "aside.l1": "Mention the deity or design, the approximate size and the quantity you need.",
      "aside.l2": "Let us know your delivery location so we can discuss the details.",
      "aside.l3": "Pricing is shared on request, based on your requirement.",

      "form.name": "Full name",
      "form.phone": "Phone number",
      "form.phonePh": "e.g. 98765 43210",
      "form.email": "Email address",
      "form.optional": "(optional)",
      "form.qty": "Quantity",
      "form.product": "Product or category of interest",
      "form.size": "Preferred size or material",
      "form.sizePh": "e.g. 3 ft height, stone",
      "form.msg": "Message or additional requirements",
      "form.msgPh": "Tell us where the sculpture will be placed, your timeline, delivery location, etc.",
      "form.select": "Select a product or category",
      "form.any": "{cat} — any / not sure",
      "form.anyValue": "{cat} (any)",
      "form.other": "Other / custom requirement",
      "form.submit": "Submit Enquiry",
      "form.sending": "Sending…",
      "form.waNote": "Your enquiry will open in WhatsApp, addressed to {phone}. Just tap <strong>Send</strong> to deliver it.",
      "err.name": "Please enter your name.",
      "err.phone": "Please enter a valid phone number (at least 10 digits).",
      "err.email": "Please enter a valid email address, or leave it blank.",
      "err.qty": "Please enter a quantity of 1 or more.",
      "err.product": "Please choose a product or category.",
      "status.wa": "Your enquiry has been prepared in WhatsApp. Please tap <strong>Send</strong> in WhatsApp to deliver it to us. WhatsApp didn't open? <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">Click here to open it</a>.",
      "status.ok": "Thank you, {name}. Your enquiry has been submitted and we will contact you soon. For a faster reply, you can also <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">send it on WhatsApp</a>.",
      "status.fail": "Sorry, we could not submit your enquiry right now. Please <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">send it on WhatsApp</a> or call <a href=\"tel:{tel}\">{phone}</a>.",

      "modal.title": "Request a Quote",
      "modal.sub": "Share a few details and we will get back to you with product information and pricing.",
      "modal.close": "Close",

      "wa.generic": "Hello {biz}, I would like to enquire about your sculptures.",
      "wa.intro": "Hello {biz}, I would like to make an enquiry.",
      "wa.product": "Product",
      "wa.qty": "Quantity",
      "wa.size": "Preferred size / material",
      "wa.name": "Name",
      "wa.phone": "Phone",
      "wa.email": "Email",
      "wa.msg": "Message",
      "wa.from": "(Sent from website: {url})",
      "wa.pd": "Hello {biz}, I am interested in the *{name}* (quantity: {q}). Please share available sizes and pricing.",

      "contact.eyebrow": "Contact Us",
      "contact.title": "Get in Touch With Us",
      "contact.business": "Business",
      "contact.owner": "Proprietor: {owner}",
      "contact.location": "Location",
      "contact.phone": "Phone",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "Email",
      "contact.hours": "Business hours",
      "contact.also": "Also on",
      "contact.indiamart": "IndiaMART business profile ↗",
      "contact.mapTitle": "Map showing {loc}",

      "footer.about": "Traditional stone sculptures and temple statues from {loc}, with over {years} years of experience in the sculpture business.",
      "footer.explore": "Explore",
      "footer.collections": "Collections",
      "footer.contact": "Contact",
      "footer.viewAll": "View all products",
      "footer.waEnquiry": "WhatsApp enquiry",
      "footer.indiamart": "IndiaMART profile ↗",
      "footer.rights": "All rights reserved.",

      "crumb.label": "Breadcrumb",
      "crumb.home": "Home",
      "crumb.collections": "Collections",
      "coll.all": "All Sculptures",
      "coll.allDesc": "Browse our stone statues and temple sculptures. Select any piece to view details or request a quote.",
      "coll.metaAll": "Browse stone statues and temple sculptures from {biz}, {loc}. Enquire for sizes and pricing.",
      "coll.metaCat": "{desc} Enquire with {biz}, {loc}.",
      "coll.allChip": "All",
      "coll.chipsLabel": "Collections",
      "coll.enquire": "Enquire About These Products",
      "coll.empty": "No products in this collection yet.",
      "coll.emptyBtn": "Tell us what you need",

      "pd.notFound": "Product not found",
      "pd.notFoundText": "This product may have been moved or renamed.",
      "pd.browse": "Browse all sculptures",
      "pd.priceReq": "Price on Request",
      "pd.category": "Category",
      "pd.material": "Material",
      "pd.finish": "Finish",
      "pd.height": "Height",
      "pd.dimensions": "Dimensions",
      "pd.weight": "Weight",
      "pd.availability": "Availability",
      "pd.qty": "Quantity",
      "pd.dec": "Decrease quantity",
      "pd.inc": "Increase quantity",
      "pd.enlarge": "Enlarge image",
      "pd.thumb": "Show image {i} of {n}",
      "pd.wa": "Enquire on WhatsApp",
      "pd.note": "Sizes, finishes and pricing vary by requirement. Contact us and we will share the details for this piece.",
      "pd.related": "You may also like",
      "pd.relatedTitle": "More from our collection",
      "pd.meta": "{desc} Enquire for sizes and pricing — {biz}, {loc}.",
      "skip": "Skip to content"
    },

    ta: {
      "meta.home.title": "மகாலட்சுமி சிற்பங்கள், மதுரை | கற்சிலைகள் & கோயில் சிற்பங்கள்",
      "brand.name": "மகாலட்சுமி",
      "brand.sub": "சிற்பங்கள் · {city}",
      "lang.label": "மொழி",

      "nav.home": "முகப்பு",
      "nav.about": "எங்களைப் பற்றி",
      "nav.collections": "தொகுப்புகள்",
      "nav.gallery": "படத்தொகுப்பு",
      "nav.why": "ஏன் நாங்கள்",
      "nav.contact": "தொடர்புக்கு",
      "nav.openMenu": "மெனுவைத் திற",
      "nav.closeMenu": "மெனுவை மூடு",
      "cta.quote": "விலை விவரம் பெற",
      "cta.quoteShort": "விலை கேட்க",
      "cta.waUs": "வாட்ஸ்அப்பில் தொடர்பு கொள்ள",
      "cta.call": "இப்போது அழைக்க",
      "cta.wa": "வாட்ஸ்அப்",
      "cta.waFloat": "வாட்ஸ்அப்பில் எங்களுடன் பேசுங்கள்",

      "hero.eyebrow": "கற்சிற்பங்கள் · மதுரை",
      "hero.title": "காலத்தால் அழியாத சிற்பங்கள். <em>கைவினைத்திறனின் மரபு.</em>",
      "hero.lead": "25 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், மகாலட்சுமி சிற்பங்கள் பாரம்பரிய இந்தியக் கலையின் அழகைக் கொண்டாடுகிறது — ஒவ்வொரு இடத்திற்கும் பக்தி, பண்பாடு மற்றும் நேர்த்தியைச் சேர்க்கும் கவனமாக உருவாக்கப்பட்ட சிற்பங்கள் மூலம்.",
      "hero.explore": "எங்கள் தொகுப்பைக் காண்க",
      "hero.enquire": "இப்போதே விசாரிக்க",
      "hero.trust1": "25+ ஆண்டு அனுபவம்",
      "hero.trust2": "மதுரை, தமிழ்நாடு",
      "hero.alt": "மகாலட்சுமி சிற்பங்களின் விநாயகர் கற்சிலை",
      "hero.capTitle": "விநாயகர் கற்சிலை",
      "hero.capSub": "எங்கள் தொகுப்பிலிருந்து",

      "about.eyebrow": "எங்களைப் பற்றி",
      "about.title": "25 ஆண்டுகளுக்கும் மேலான சிறப்பின் பாரம்பரியம்",
      "about.p1": "மகாலட்சுமி சிற்பங்களில், ஒவ்வொரு சிற்பமும் வடிவம் மற்றும் நுணுக்கத்தை விட மேலானது என்று நாங்கள் நம்புகிறோம் — அது பண்பாடு, பக்தி மற்றும் கலை வெளிப்பாட்டைப் பிரதிபலிக்கிறது. சிற்பத் தொழிலில் 25 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், வாடிக்கையாளர்கள் தங்கள் விருப்பங்களுக்கும் தேவைகளுக்கும் ஏற்ற சிற்பங்களைக் கண்டறிய உதவுவதில் நாங்கள் உறுதியாக உள்ளோம்.",
      "about.p2": "தமிழ்நாட்டின் மதுரையை மையமாகக் கொண்டு, பாரம்பரிய சிற்பங்களையும் கலைப் படைப்புகளையும் தேடும் வாடிக்கையாளர்களுக்கு நம்பகமான, தனிப்பட்ட அனுபவத்தை வழங்குவதே எங்கள் நோக்கம்.",
      "about.alt": "இருபுறமும் யானைகளுடன் லட்சுமி தேவி — கஜலட்சுமி கற்பலகை",
      "about.badge": "ஆண்டு<br>அனுபவம்",
      "about.h1": "25+ ஆண்டு அனுபவம்",
      "about.h2": "பாரம்பரிய இந்தியக் கலைத்திறன்",
      "about.h3": "வாடிக்கையாளர் நலன் சார்ந்த சேவை",

      "col.eyebrow": "எங்கள் தொகுப்புகள்",
      "col.title": "எங்கள் தொகுப்பை ஆராயுங்கள்",
      "col.sub": "இந்தியப் பாரம்பரியம், கலை நுணுக்கம் மற்றும் காலத்தால் அழியாத வடிவமைப்பால் ஈர்க்கப்பட்ட சிற்பங்களைக் கண்டறியுங்கள்.",
      "col.design1": "1 வடிவம்",
      "col.designN": "{n} வடிவங்கள்",
      "col.view": "தொகுப்பைக் காண்க",
      "col.enquire": "பொருட்கள் பற்றி விசாரிக்க",
      "col.ctaTitle": "குறிப்பிட்ட ஏதாவது தேடுகிறீர்களா?",
      "col.ctaText": "நீங்கள் விரும்பும் தெய்வம், அளவு அல்லது வடிவமைப்பை எங்களிடம் சொல்லுங்கள் — என்ன செய்ய முடியும் என்பதை நாங்கள் தெரிவிப்போம்.",
      "col.ctaBtn": "உங்கள் தேவையைப் பகிருங்கள்",

      "feat.eyebrow": "சிறப்புத் தேர்வுகள்",
      "feat.title": "சிறப்புச் சிற்பங்கள்",
      "feat.viewAll": "அனைத்து சிற்பங்களையும் காண்க",
      "card.details": "விவரங்கள்",
      "card.enquire": "விசாரிக்க",

      "gal.eyebrow": "படத்தொகுப்பு",
      "gal.title": "ஒவ்வொரு நுணுக்கத்திலும் கலைத்திறன்",
      "gal.sub": "எங்கள் கற்சிற்பங்களின் புகைப்படங்கள். பெரிதாகக் காண எந்தப் படத்தையும் தேர்ந்தெடுக்கவும்.",
      "gal.all": "அனைத்தும்",
      "gal.filterLabel": "வகை வாரியாகப் படங்களை வடிகட்டு",
      "gal.enlarge": "படத்தைப் பெரிதாக்கு: {name}",
      "lb.label": "படக் காட்சி",
      "lb.close": "மூடு",
      "lb.prev": "முந்தைய படம்",
      "lb.next": "அடுத்த படம்",
      "lb.details": "பொருள் விவரங்களைக் காண்க →",

      "why.eyebrow": "ஏன் மகாலட்சுமி சிற்பங்கள்?",
      "why.title": "நம்பக்கூடிய அனுபவம். பாராட்டத்தக்க கைவினைத்திறன்.",
      "why.1t": "25+ ஆண்டுகள்",
      "why.1p": "சிற்பத் தொழிலில் 25 ஆண்டுகளுக்கும் மேலான அனுபவம்.",
      "why.2t": "பாரம்பரியத்தில் வேரூன்றியது",
      "why.2p": "பாரம்பரிய இந்தியச் சிற்பக்கலையால் ஈர்க்கப்பட்ட தொகுப்பு.",
      "why.3t": "பயனுள்ள வழிகாட்டுதல்",
      "why.3p": "நீங்கள் தேர்வு செய்ய உதவும் பொருள் தகவல்களும் வழிகாட்டுதலும்.",
      "why.4t": "நேரடித் தொடர்பு",
      "why.4p": "எந்தப் பொருள் பற்றியும் தொலைபேசி அல்லது வாட்ஸ்அப்பில் எங்களுடன் நேரடியாகப் பேசுங்கள்.",
      "why.5t": "தெளிவான விலைப்புள்ளிகள்",
      "why.5p": "பொருள் விவரக்குறிப்புகள் மற்றும் விலைப்புள்ளிகளுக்கான உதவி.",

      "enq.eyebrow": "விசாரணை",
      "enq.title": "சரியான சிற்பத்தைத் தேடுகிறீர்களா?",
      "enq.sub": "நீங்கள் எதைத் தேடுகிறீர்கள் என்று சொல்லுங்கள் — பொருள் விவரங்கள் மற்றும் விலை குறித்து எங்கள் குழு உங்களுக்கு உதவும்.",
      "aside.label": "எங்களை நேரடியாகத் தொடர்பு கொள்ள",
      "aside.title": "பேச விரும்புகிறீர்களா?",
      "aside.text": "பொருள் விவரங்கள், அளவுகள் மற்றும் விலைப்புள்ளிகளுக்கு எங்களை நேரடியாக அழைக்கவும் அல்லது செய்தி அனுப்பவும்.",
      "aside.l1": "தெய்வம் அல்லது வடிவமைப்பு, தோராயமான அளவு மற்றும் தேவையான எண்ணிக்கையைக் குறிப்பிடவும்.",
      "aside.l2": "விவரங்களைப் பேச உங்கள் டெலிவரி இடத்தைத் தெரிவிக்கவும்.",
      "aside.l3": "உங்கள் தேவையின் அடிப்படையில் விலை விவரங்கள் கோரிக்கையின் பேரில் பகிரப்படும்.",

      "form.name": "முழுப் பெயர்",
      "form.phone": "தொலைபேசி எண்",
      "form.phonePh": "எ.கா. 98765 43210",
      "form.email": "மின்னஞ்சல் முகவரி",
      "form.optional": "(விருப்பத்திற்குரியது)",
      "form.qty": "எண்ணிக்கை",
      "form.product": "விருப்பமான பொருள் அல்லது வகை",
      "form.size": "விருப்பமான அளவு அல்லது மூலப்பொருள்",
      "form.sizePh": "எ.கா. 3 அடி உயரம், கல்",
      "form.msg": "செய்தி அல்லது கூடுதல் தேவைகள்",
      "form.msgPh": "சிற்பம் எங்கு வைக்கப்படும், உங்கள் காலக்கெடு, டெலிவரி இடம் போன்றவற்றைக் குறிப்பிடவும்.",
      "form.select": "ஒரு பொருள் அல்லது வகையைத் தேர்ந்தெடுக்கவும்",
      "form.any": "{cat} — ஏதேனும் / உறுதியாகத் தெரியவில்லை",
      "form.anyValue": "{cat} (ஏதேனும்)",
      "form.other": "பிற / தனிப்பட்ட தேவை",
      "form.submit": "விசாரணையை அனுப்பு",
      "form.sending": "அனுப்பப்படுகிறது…",
      "form.waNote": "உங்கள் விசாரணை {phone} என்ற எண்ணுக்கு வாட்ஸ்அப்பில் திறக்கும். அனுப்ப <strong>Send</strong> பொத்தானைத் தட்டவும்.",
      "err.name": "உங்கள் பெயரை உள்ளிடவும்.",
      "err.phone": "சரியான தொலைபேசி எண்ணை உள்ளிடவும் (குறைந்தது 10 இலக்கங்கள்).",
      "err.email": "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும், அல்லது காலியாக விடவும்.",
      "err.qty": "1 அல்லது அதற்கு மேற்பட்ட எண்ணிக்கையை உள்ளிடவும்.",
      "err.product": "ஒரு பொருள் அல்லது வகையைத் தேர்ந்தெடுக்கவும்.",
      "status.wa": "உங்கள் விசாரணை வாட்ஸ்அப்பில் தயாராக உள்ளது. எங்களுக்கு அனுப்ப வாட்ஸ்அப்பில் <strong>Send</strong> பொத்தானைத் தட்டவும். வாட்ஸ்அப் திறக்கவில்லையா? <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">இங்கே கிளிக் செய்யவும்</a>.",
      "status.ok": "நன்றி, {name}. உங்கள் விசாரணை சமர்ப்பிக்கப்பட்டது; விரைவில் உங்களைத் தொடர்பு கொள்வோம். விரைவான பதிலுக்கு <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">வாட்ஸ்அப்பிலும் அனுப்பலாம்</a>.",
      "status.fail": "மன்னிக்கவும், இப்போது உங்கள் விசாரணையைச் சமர்ப்பிக்க இயலவில்லை. தயவுசெய்து <a href=\"{url}\" target=\"_blank\" rel=\"noopener\">வாட்ஸ்அப்பில் அனுப்பவும்</a> அல்லது <a href=\"tel:{tel}\">{phone}</a> என்ற எண்ணை அழைக்கவும்.",

      "modal.title": "விலை விவரம் கோருக",
      "modal.sub": "சில விவரங்களைப் பகிருங்கள் — பொருள் தகவல் மற்றும் விலையுடன் நாங்கள் உங்களைத் தொடர்பு கொள்வோம்.",
      "modal.close": "மூடு",

      "wa.generic": "வணக்கம் {biz}, உங்கள் சிற்பங்கள் பற்றி விசாரிக்க விரும்புகிறேன்.",
      "wa.intro": "வணக்கம் {biz}, நான் ஒரு விசாரணை செய்ய விரும்புகிறேன்.",
      "wa.product": "பொருள்",
      "wa.qty": "எண்ணிக்கை",
      "wa.size": "விருப்பமான அளவு / மூலப்பொருள்",
      "wa.name": "பெயர்",
      "wa.phone": "தொலைபேசி",
      "wa.email": "மின்னஞ்சல்",
      "wa.msg": "செய்தி",
      "wa.from": "(இணையதளத்திலிருந்து அனுப்பப்பட்டது: {url})",
      "wa.pd": "வணக்கம் {biz}, *{name}* (எண்ணிக்கை: {q}) பற்றி அறிய விரும்புகிறேன். கிடைக்கும் அளவுகள் மற்றும் விலை விவரங்களைப் பகிரவும்.",

      "contact.eyebrow": "தொடர்புக்கு",
      "contact.title": "எங்களைத் தொடர்பு கொள்ளுங்கள்",
      "contact.business": "வணிகம்",
      "contact.owner": "உரிமையாளர்: {owner}",
      "contact.location": "இருப்பிடம்",
      "contact.phone": "தொலைபேசி",
      "contact.whatsapp": "வாட்ஸ்அப்",
      "contact.email": "மின்னஞ்சல்",
      "contact.hours": "வணிக நேரம்",
      "contact.also": "மேலும்",
      "contact.indiamart": "IndiaMART வணிகப் பக்கம் ↗",
      "contact.mapTitle": "{loc} வரைபடம்",

      "footer.about": "{loc} — பாரம்பரிய கற்சிற்பங்கள் மற்றும் கோயில் சிலைகள்; சிற்பத் தொழிலில் {years} ஆண்டுகளுக்கும் மேலான அனுபவத்துடன்.",
      "footer.explore": "பக்கங்கள்",
      "footer.collections": "தொகுப்புகள்",
      "footer.contact": "தொடர்புக்கு",
      "footer.viewAll": "அனைத்து பொருட்களையும் காண்க",
      "footer.waEnquiry": "வாட்ஸ்அப் விசாரணை",
      "footer.indiamart": "IndiaMART பக்கம் ↗",
      "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

      "crumb.label": "வழிச்சுவடு",
      "crumb.home": "முகப்பு",
      "crumb.collections": "தொகுப்புகள்",
      "coll.all": "அனைத்து சிற்பங்கள்",
      "coll.allDesc": "எங்கள் கற்சிலைகள் மற்றும் கோயில் சிற்பங்களைப் பாருங்கள். விவரங்களைக் காண அல்லது விலை விவரம் கோர எந்தப் படைப்பையும் தேர்ந்தெடுக்கவும்.",
      "coll.metaAll": "{biz}, {loc} — கற்சிலைகள் மற்றும் கோயில் சிற்பங்கள். அளவுகள் மற்றும் விலைக்கு விசாரிக்கவும்.",
      "coll.metaCat": "{desc} {biz}, {loc} — விசாரிக்கவும்.",
      "coll.allChip": "அனைத்தும்",
      "coll.chipsLabel": "தொகுப்புகள்",
      "coll.enquire": "இந்தப் பொருட்கள் பற்றி விசாரிக்க",
      "coll.empty": "இந்தத் தொகுப்பில் இன்னும் பொருட்கள் இல்லை.",
      "coll.emptyBtn": "உங்கள் தேவையைச் சொல்லுங்கள்",

      "pd.notFound": "பொருள் கிடைக்கவில்லை",
      "pd.notFoundText": "இந்தப் பொருள் நகர்த்தப்பட்டிருக்கலாம் அல்லது பெயர் மாற்றப்பட்டிருக்கலாம்.",
      "pd.browse": "அனைத்து சிற்பங்களையும் காண்க",
      "pd.priceReq": "விலை கோரிக்கையின் பேரில்",
      "pd.category": "வகை",
      "pd.material": "மூலப்பொருள்",
      "pd.finish": "மெருகு",
      "pd.height": "உயரம்",
      "pd.dimensions": "அளவுகள்",
      "pd.weight": "எடை",
      "pd.availability": "கிடைக்கும் நிலை",
      "pd.qty": "எண்ணிக்கை",
      "pd.dec": "எண்ணிக்கையைக் குறை",
      "pd.inc": "எண்ணிக்கையைக் கூட்டு",
      "pd.enlarge": "படத்தைப் பெரிதாக்கு",
      "pd.thumb": "படம் {i} / {n} காட்டு",
      "pd.wa": "வாட்ஸ்அப்பில் விசாரிக்க",
      "pd.note": "அளவுகள், மெருகு மற்றும் விலை தேவையைப் பொறுத்து மாறுபடும். எங்களைத் தொடர்பு கொள்ளுங்கள் — இந்தப் படைப்பின் விவரங்களைப் பகிர்வோம்.",
      "pd.related": "இவையும் உங்களுக்குப் பிடிக்கலாம்",
      "pd.relatedTitle": "எங்கள் தொகுப்பிலிருந்து மேலும்",
      "pd.meta": "{desc} அளவுகள் மற்றும் விலைக்கு விசாரிக்கவும் — {biz}, {loc}.",
      "skip": "உள்ளடக்கத்திற்குச் செல்ல"
    }
  };

  /* ---------- Language selection ---------- */
  const KEY = "ms-lang";
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* storage unavailable */ } }
  };
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang");
  if (lang in STR) store.set(lang);
  else lang = store.get();
  if (!(lang in STR)) lang = "en";

  document.documentElement.lang = lang;

  const t = (key, vars) => {
    let s = (STR[lang] && STR[lang][key]) ?? STR.en[key] ?? key;
    if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
    return s;
  };
  // Localised field from a data object: L(product, "name") → product.name_ta in Tamil, else product.name
  const L = (obj, field) => (obj ? (lang !== "en" && obj[`${field}_${lang}`]) || obj[field] : "");

  function setLang(next) {
    if (!(next in STR) || next === lang) return;
    store.set(next);
    try { sessionStorage.setItem("ms-scroll", String(window.scrollY)); } catch (e) { /* ignore */ }
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) url.searchParams.set("lang", next);
    if (url.href !== location.href) location.replace(url.href);
    else location.reload();
  }

  // Translate static markup: data-i18n (text), data-i18n-html, data-i18n-alt, data-i18n-aria
  function apply(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    root.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    root.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    root.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
  }

  window.I18N = { get lang() { return lang; }, languages: Object.keys(STR), t, L, setLang, apply };
})();
