/**
 * Offer, charter-enquiry and complete-link aliases over generated
 * RMS schemas. Overlays only where Scramble still cannot express
 * the shape. Each leftover mirrors a PHP class.
 */

import type { components } from './api'

export type OfferType = components['schemas']['OfferType']
export type OfferChannel = components['schemas']['OfferChannel']

/**
 * Mirrors App\Enums\OfferStatus plus OfferStatus::DerivedExpired.
 * No named OfferStatus schema — EXPIRED is derived, never stored.
 */
export type OfferStatus = 'DRAFT' | 'PENDING' | 'LIVE' | 'PAUSED' | 'EXPIRED'

export type Offer = Omit<
  components['schemas']['OfferResource'],
  'type' | 'channel' | 'status' | 'stored_status'
> & {
  type: OfferType
  channel: OfferChannel
  status: OfferStatus
  stored_status: Exclude<OfferStatus, 'EXPIRED'>
}

export type CharterEnquiryStatus = components['schemas']['CharterEnquiryStatus']
export type CharterProposalState = components['schemas']['CharterProposalState']

/**
 * Mirrors CharterEnquiryResource.proposal.valid_until.
 * Scramble types the snapshot string as unknown.
 */
export type CharterProposal = Omit<
  NonNullable<components['schemas']['CharterEnquiryResource']['proposal']>,
  'valid_until'
> & {
  valid_until: string | null
}

export type CharterEnquiry = Omit<
  components['schemas']['CharterEnquiryResource'],
  'status' | 'proposal'
> & {
  status: CharterEnquiryStatus
  proposal: CharterProposal | null
}

export type CompleteLink = components['schemas']['CompleteLinkResource']
