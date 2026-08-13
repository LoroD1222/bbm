import {permanentRedirect} from 'next/navigation'

/** The former sample trip now redirects to the PDF-based catalogue. */
export default function SerengetiAdventurePage() {
  permanentRedirect('/tours')
}
