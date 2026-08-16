import type {TripType} from './trip-options';

export type Journey = {
  slug: string;
  category: TripType;
  tag?: string;
  duration: string;
  title: string;
  description: string;
  price: string;
  image?: string;
};

const assetRoot = "/assets/figma/pages";

export const journeys: readonly Journey[] = [
  {
    slug: "serengeti-adventure",
    category: "private-safari",
    tag: "Best Seller",
    duration: "5 Days / 4 Nights",
    title: "4 Nights Serengeti Adventure",
    description: "Witness majestic predators and dynamic plains wildlife up close.",
    price: "$1,650 USD",
    image: `${assetRoot}/trip-01.png`,
  },
  {
    slug: "northern-circuit-safari",
    category: "wildlife-safari",
    duration: "6 Days / 5 Nights",
    title: "6 Days Northern Circuit Safari",
    description: "A premium expedition covering iconic parks of the Northern circuit.",
    price: "$2,150 USD",
    image: `${assetRoot}/trip-02.png`,
  },
  {
    slug: "ngorongoro-crater-escape",
    category: "wildlife-safari",
    duration: "4 Days / 3 Nights",
    title: "Ngorongoro Crater Escape",
    description: "Descend into the caldera of Africa's lost garden of Eden.",
    price: "$1,480 USD",
    image: `${assetRoot}/trip-03.png`,
  },
  {
    slug: "tarangire-manyara-safari",
    category: "wildlife-safari",
    duration: "3 Days / 2 Nights",
    title: "Tarangire & Lake Manyara Safari",
    description: "Famed for tree-climbing lions and towering ancient baobab structures.",
    price: "$980 USD",
    image: `${assetRoot}/trip-04.png`,
  },
  {
    slug: "kilimanjaro-summit-trek",
    category: "mountain-trekking",
    duration: "5 Days / 4 Nights",
    title: "5-Day Kilimanjaro Summit Trek",
    description: "Uncover peak beauty via the scenic, high-pacing Marangu trail.",
    price: "$1,250 USD",
    image: `${assetRoot}/trip-05.png`,
  },
  {
    slug: "zanzibar-beach-escape",
    category: "beach",
    duration: "5 Days / 4 Nights",
    title: "Zanzibar Beach Escape",
    description: "Immerse in historic spice tours and pristine coral sand beaches.",
    price: "$890 USD",
    image: `${assetRoot}/trip-06.png`,
  },
  {
    slug: "serengeti-zanzibar-escape",
    category: "safari-plus-beach",
    tag: "Beach + Safari",
    duration: "10 Days / 9 Nights",
    title: "Serengeti & Zanzibar Escape",
    description: "Perfect synthesis of wildlife tracking and ultimate barefoot relaxation.",
    price: "$3,200 USD",
    image: `${assetRoot}/trip-07.png`,
  },
  {
    slug: "great-migration-safari",
    category: "wildlife-safari",
    tag: "Best Seller",
    duration: "7 Days / 6 Nights",
    title: "Great Migration Safari",
    description: "Carefully timed to track the iconic dramatic Mara River crossing.",
    price: "$2,800 USD",
    image: `${assetRoot}/trip-08.png`,
  },
  {
    slug: "tanzania-family-safari",
    category: "family",
    tag: "Family Favourite",
    duration: "7 Days / 6 Nights",
    title: "Tanzania Family Safari",
    description: "Tailored kid-friendly pacing, safe lodges, and magical memory making.",
    price: "$2,400 USD",
    image: `${assetRoot}/trip-09.png`,
  },
  {
    slug: "romantic-tanzania-honeymoon",
    category: "honeymoon",
    duration: "8 Days / 7 Nights",
    title: "Romantic Tanzania Honeymoon",
    description: "Complete with luxury glamping, private bush dinners, and infinity pools.",
    price: "$3,500 USD",
    image: `${assetRoot}/trip-10.png`,
  },
  {
    slug: "southern-tanzania-wilderness",
    category: "wildlife-safari",
    duration: "6 Days / 5 Nights",
    title: "Southern Tanzania Wilderness Safari",
    description: "Navigate the wild Selous and Ruaha rivers for raw off-grid magic.",
    price: "$2,600 USD",
    image: `${assetRoot}/trip-11.png`,
  },
  {
    slug: "luxury-tanzania-signature",
    category: "luxury",
    tag: "Luxury",
    duration: "10 Days / 9 Nights",
    title: "Luxury Tanzania Signature Journey",
    description: "All inclusive private chartered flights and world-class luxury villas.",
    price: "$5,200 USD",
    image: `${assetRoot}/trip-12.png`,
  },
] as const;

export const detailAssets = {
  heroSavannah: `${assetRoot}/detail-hero-savannah.png`,
  heroJeep: `${assetRoot}/detail-hero-jeep.png`,
  heroSunset: `${assetRoot}/detail-hero-sunset.png`,
  dayOne: `${assetRoot}/detail-day-01.png`,
  dayTwo: `${assetRoot}/detail-day-02.png`,
  pricing: `${assetRoot}/detail-pricing.png`,
  lodgeClassic: `${assetRoot}/detail-lodge-classic.png`,
  lodgeComfort: `${assetRoot}/detail-lodge-comfort.png`,
  lodgePremium: `${assetRoot}/detail-lodge-premium.png`,
  galleryOne: `${assetRoot}/detail-gallery-01.png`,
  galleryTwo: `${assetRoot}/detail-gallery-02.png`,
  galleryThree: `${assetRoot}/detail-gallery-03.png`,
  avatarOne: `${assetRoot}/detail-avatar-01.png`,
  avatarTwo: `${assetRoot}/detail-avatar-02.png`,
  avatarThree: `${assetRoot}/detail-avatar-03.png`,
  relatedOne: `${assetRoot}/detail-related-01.png`,
  relatedTwo: `${assetRoot}/detail-related-02.png`,
  relatedThree: `${assetRoot}/detail-related-03.png`,
  enquiry: `${assetRoot}/enquiry-section.jpg`,
} as const;
