export const tripTypeOptions = [
  {title: 'Private Safari', value: 'private-safari'},
  {title: 'Wildlife Safari', value: 'wildlife-safari'},
  {title: 'Mountain Trekking', value: 'mountain-trekking'},
  {title: 'Beach', value: 'beach'},
  {title: 'Safari + Beach', value: 'safari-plus-beach'},
  {title: 'Family', value: 'family'},
  {title: 'Honeymoon', value: 'honeymoon'},
  {title: 'Luxury', value: 'luxury'},
] as const

export type TripType = (typeof tripTypeOptions)[number]['value']

export const tripTypeLabel = Object.fromEntries(
  tripTypeOptions.map(({title, value}) => [value, title]),
) as Record<TripType, string>

export const atAGlanceOptions = [
  {title: 'Private 4×4 Safari', value: 'private-4x4-safari'},
  {title: 'Private Guide', value: 'private-guide'},
  {title: 'Fly-in Safari', value: 'fly-in-safari'},
  {title: 'Road Safari', value: 'road-safari'},
  {title: 'Small Group', value: 'small-group'},
  {title: 'Customizable Itinerary', value: 'customizable-itinerary'},
  {title: 'All-inclusive', value: 'all-inclusive'},
  {title: 'Serengeti National Park', value: 'serengeti'},
  {title: 'Ngorongoro Crater', value: 'ngorongoro'},
  {title: 'Tarangire National Park', value: 'tarangire'},
  {title: 'Lake Manyara National Park', value: 'lake-manyara'},
  {title: 'Arusha', value: 'arusha'},
  {title: 'Kilimanjaro', value: 'kilimanjaro'},
  {title: 'Zanzibar', value: 'zanzibar'},
  {title: 'Nyerere National Park', value: 'nyerere'},
  {title: 'Ruaha National Park', value: 'ruaha'},
  {title: 'Mkomazi National Park', value: 'mkomazi'},
  {title: 'Big Five', value: 'big-five'},
  {title: 'Great Migration', value: 'great-migration'},
  {title: 'Game Drives', value: 'game-drives'},
  {title: 'Wildlife Photography', value: 'wildlife-photography'},
  {title: 'Birdwatching', value: 'birdwatching'},
  {title: 'Walking Safari', value: 'walking-safari'},
  {title: 'Night Game Drive', value: 'night-game-drive'},
  {title: 'Balloon Safari', value: 'balloon-safari'},
  {title: 'Cultural Visit', value: 'cultural-visit'},
  {title: 'Bush Dinner', value: 'bush-dinner'},
  {title: 'Sundowner', value: 'sundowner'},
  {title: 'Beach Relaxation', value: 'beach-relaxation'},
  {title: 'Snorkelling & Diving', value: 'snorkelling-diving'},
  {title: 'Mountain Trekking', value: 'mountain-trekking'},
  {title: 'Summit Attempt', value: 'summit-attempt'},
  {title: 'Luxury Lodges', value: 'luxury-lodges'},
  {title: 'Tented Camps', value: 'tented-camps'},
  {title: 'Mobile Camps', value: 'mobile-camps'},
  {title: 'Beach Resort', value: 'beach-resort'},
  {title: 'Private Villa', value: 'private-villa'},
  {title: 'Full Board', value: 'full-board'},
  {title: 'Park Fees Included', value: 'park-fees-included'},
  {title: 'Domestic Flights Included', value: 'domestic-flights-included'},
  {title: 'Airport Transfers Included', value: 'airport-transfers-included'},
  {title: 'Bottled Water Included', value: 'bottled-water-included'},
  {title: 'Adventure', value: 'adventure'},
  {title: 'Family-Friendly', value: 'family-friendly'},
  {title: 'Honeymoon', value: 'honeymoon'},
  {title: 'Luxury', value: 'luxury'},
  {title: 'First Safari', value: 'first-safari'},
  {title: 'Solo Traveller', value: 'solo-traveller'},
  {title: 'Multi-Generational', value: 'multi-generational'},
  {title: 'Romantic Escape', value: 'romantic-escape'},
] as const

export const atAGlanceLabel = Object.fromEntries(
  atAGlanceOptions.map(({title, value}) => [value, title]),
) as Record<(typeof atAGlanceOptions)[number]['value'], string>

export const monthOptions = [
  {title: 'January', value: 'jan'}, {title: 'February', value: 'feb'},
  {title: 'March', value: 'mar'}, {title: 'April', value: 'apr'},
  {title: 'May', value: 'may'}, {title: 'June', value: 'jun'},
  {title: 'July', value: 'jul'}, {title: 'August', value: 'aug'},
  {title: 'September', value: 'sep'}, {title: 'October', value: 'oct'},
  {title: 'November', value: 'nov'}, {title: 'December', value: 'dec'},
] as const

const monthIndex = new Map<string, number>(monthOptions.map(({value}, index) => [value, index]))

export function formatMonths(months: string[]) {
  if (new Set(months).size === monthOptions.length) return 'All year'

  return [...months]
    .sort((left, right) => (monthIndex.get(left) ?? 99) - (monthIndex.get(right) ?? 99))
    .map((month) => monthOptions.find(({value}) => value === month)?.title.slice(0, 3) ?? month)
    .join(' · ')
}

export const itineraryActivityOptions = [
  {title: 'Arrival', value: 'arrival'}, {title: 'Airport transfer', value: 'airport-transfer'},
  {title: 'Morning game drive', value: 'morning-game-drive'}, {title: 'Afternoon game drive', value: 'afternoon-game-drive'},
  {title: 'Full-day game drive', value: 'full-day-game-drive'}, {title: 'Walking safari', value: 'walking-safari'},
  {title: 'Night game drive', value: 'night-game-drive'}, {title: 'Scenic drive', value: 'scenic-drive'},
  {title: 'Domestic flight', value: 'domestic-flight'}, {title: 'Cultural visit', value: 'cultural-visit'},
  {title: 'Bush lunch', value: 'bush-lunch'}, {title: 'Bush dinner', value: 'bush-dinner'},
  {title: 'Sundowner', value: 'sundowner'}, {title: 'Balloon safari', value: 'balloon-safari'},
  {title: 'Beach activity', value: 'beach-activity'}, {title: 'Snorkelling or diving', value: 'snorkelling-diving'},
  {title: 'Mountain hike', value: 'mountain-hike'}, {title: 'Summit attempt', value: 'summit-attempt'},
  {title: 'Rest or free time', value: 'free-time'}, {title: 'Departure transfer', value: 'departure-transfer'},
  {title: 'Optional extension', value: 'optional-extension'},
] as const

export const itineraryActivityLabel = Object.fromEntries(
  itineraryActivityOptions.map(({title, value}) => [value, title]),
) as Record<(typeof itineraryActivityOptions)[number]['value'], string>

export const serviceLabel: Record<string, string> = {
  'private-4x4': 'Private 4×4 safari vehicle',
  'professional-guide': 'Professional guide',
  'airport-transfers': 'Airport transfers',
  'domestic-flights': 'Domestic flights',
  'park-fees': 'Park fees',
  'concession-fees': 'Concession fees',
  'full-board-meals': 'Full-board meals',
  accommodation: 'Accommodation',
  'unlimited-game-drives': 'Unlimited game drives',
  'bottled-water': 'Bottled water',
  'bush-meals': 'Bush meals',
  'balloon-safari': 'Balloon safari',
  'alcoholic-drinks': 'Alcoholic drinks',
  laundry: 'Laundry',
  'international-flights': 'International flights',
  'visa-fees': 'Visa fees',
  'travel-insurance': 'Travel insurance',
  'tips-gratuities': 'Tips and gratuities',
}

export const overnightTypeLabel: Record<string, string> = {
  lodge: 'Lodge',
  'tented-camp': 'Tented camp',
  hotel: 'Hotel',
  'beach-resort': 'Beach resort',
  'mountain-hut': 'Mountain hut',
  'no-overnight': 'End of trip',
}

export const accommodationOptionTitle: Record<string, string> = {
  classic: 'Classic Safari Tents',
  comfort: 'Comfort Lodges',
  luxury: 'Premium Luxury Camps',
}

export const seasonLabel: Record<string, string> = {
  low: 'Low season',
  mid: 'Mid season',
  high: 'High season',
  peak: 'Peak season',
}
