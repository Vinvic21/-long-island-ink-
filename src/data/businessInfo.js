// Single source of truth. Keep in sync with the JSON-LD block in index.html.
export const business = {
  name: 'Long Island Ink Tattoos & Piercings',
  phone: '+1-678-401-7637',
  phoneDisplay: '(678) 401-7637',
  address: { street: '3697 GA-5 #12', city: 'Douglasville', region: 'GA', zip: '30135' },
  timeZone: 'America/New_York',
  // index 0 = Sunday. 24h clock.
  hours: [
    { day: 'Sunday', open: 13, close: 20 },
    { day: 'Monday', open: 12, close: 21 },
    { day: 'Tuesday', open: 12, close: 21 },
    { day: 'Wednesday', open: 12, close: 21 },
    { day: 'Thursday', open: 12, close: 21 },
    { day: 'Friday', open: 12, close: 22 },
    { day: 'Saturday', open: 12, close: 22 },
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=3697+GA-5+%2312+Douglasville+GA+30135',
  mapsEmbed: 'https://www.google.com/maps?q=3697+GA-5+%2312+Douglasville+GA+30135&output=embed',
  social: {
    facebook: 'https://www.facebook.com/Longislandinkga/',
    instagram: 'https://www.instagram.com/longislandinkpr/',
  },
  piercingPrice: '$50', // per the shop's Google listing; confirm what it covers
  // Owner-approved photos: { src: '/photos/name.jpg', alt: 'Describe the photo', w: 800, h: 800 }
  photos: [],
}
export const fmtHour = (h) => `${h % 12 === 0 ? 12 : h % 12}${h >= 12 ? ' PM' : ' AM'}`
