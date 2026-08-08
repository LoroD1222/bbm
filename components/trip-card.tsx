import { ArrowUpRight, Clock3, Crown, Heart, Mountain, PawPrint, Sparkles, TreePalm, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Journey } from "@/lib/journeys";

const categoryIcons: Record<string, typeof PawPrint> = {
  "Private safari": PawPrint,
  Safari: PawPrint,
  Wildlife: PawPrint,
  "Mountain trek": Mountain,
  Beach: TreePalm,
  "Safari + Beach": TreePalm,
  Family: UsersRound,
  Honeymoon: Heart,
  Luxury: Crown,
};

export function TripCard({ journey, priority = false }: Readonly<{ journey: Journey; priority?: boolean }>) {
  const href = journey.slug === "serengeti-adventure" ? "/tours/serengeti-adventure" : "/#contact";
  const CategoryIcon = categoryIcons[journey.category] ?? Sparkles;
  return (
    <article className="trip-card" data-reveal>
      <Link className="trip-card__image" href={href} aria-label={`View ${journey.title}`}>
        <Image src={journey.image} alt="" fill sizes="(max-width: 42.5rem) 92vw, (max-width: 63.75rem) 46vw, 30vw" priority={priority} />
        <span className="trip-card__category"><CategoryIcon aria-hidden="true" />{journey.category}</span>
        {journey.tag && <span className="trip-card__tag">{journey.tag}</span>}
      </Link>
      <div className="trip-card__body">
        <p className="trip-card__duration"><Clock3 aria-hidden="true" />{journey.duration}</p>
        <div><h3>{journey.title}</h3><p>{journey.description}</p></div>
        <footer><span><small>From</small><strong>{journey.price}</strong></span><Link href={href}>View Trip <ArrowUpRight aria-hidden="true" /></Link></footer>
      </div>
    </article>
  );
}
