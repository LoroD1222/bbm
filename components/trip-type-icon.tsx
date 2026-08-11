import {Crown, Heart, Mountain, PawPrint, Sparkles, TreePalm, UsersRound, type LucideProps} from 'lucide-react'
import type {TripType} from '@/lib/trip-options'

const icons = {
  'private-safari': PawPrint,
  'wildlife-safari': PawPrint,
  'mountain-trekking': Mountain,
  beach: TreePalm,
  'safari-plus-beach': TreePalm,
  family: UsersRound,
  honeymoon: Heart,
  luxury: Crown,
} satisfies Record<TripType, typeof PawPrint>

export function TripTypeIcon({tripType, ...props}: Readonly<LucideProps & {tripType: TripType}>) {
  const Icon = icons[tripType] ?? Sparkles
  return <Icon {...props} />
}
