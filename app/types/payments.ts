/**
 * Payment, agency, commission and refund aliases over generated schemas.
 * Overlays only where Scramble still cannot express the shape.
 * Each leftover mirrors a PHP class.
 */

import type { components, operations } from './api'

export type PaymentKind = components['schemas']['PaymentKind']
export type PaymentMethod = components['schemas']['PaymentMethod']
export type PaymentStatus = components['schemas']['PaymentStatus']
export type AgencyStatus = components['schemas']['AgencyStatus']
export type CommissionStatus = components['schemas']['CommissionAccrualStatus']
export type RefundStatus = components['schemas']['RefundRequestStatus']

/**
 * Mirrors App\Enums\PaymentLinkStatus. No FormRequest enum schema.
 */
export type PaymentLinkStatus = 'OPEN' | 'PAID' | 'CANCELLED' | 'EXPIRED'

/**
 * Mirrors App\Support\Payments\CancellationPenalty::label().
 * Built from configured bands ("≥N days" / "N–M days"), not a closed enum.
 */
export type CancellationBandLabel = string

export type Payment = Omit<
  components['schemas']['PaymentResource'],
  'kind' | 'method' | 'status' | 'can_mark_wire'
> & {
  kind: PaymentKind
  method: PaymentMethod
  status: PaymentStatus
  can_mark_wire: boolean
}

/**
 * Same generated schema as Payment today. The ledger and
 * booking-payments payloads may diverge; keep both names.
 */
export type PaymentListItem = Payment

export type PaymentLink = Omit<
  components['schemas']['PaymentLinkResource'],
  'kind' | 'status' | 'created_at'
> & {
  kind: PaymentKind
  status: PaymentLinkStatus
  created_at: string
}

/**
 * Mirrors App\Support\Payments\ReconciliationReport::row()
 * plus match fields on matched / to_review.
 */
export type ReconciliationRow = {
  gateway: string
  stripe_id: string
  payment_intent: string | null
  date: string
  amount: number
  description: string
  booking_id?: number
  reference?: string
  ledger_amount?: number
}

export type ReconciliationReport = Omit<
  components['schemas']['ReconciliationResource'],
  'matched' | 'in_gateway_not_rms' | 'to_review'
> & {
  matched: Array<ReconciliationRow>
  in_gateway_not_rms: Array<ReconciliationRow>
  to_review: Array<ReconciliationRow>
}

export type AgencyUserStatus = components['schemas']['AgencyUserStatus']

export type AgencyUser = AgencyGenerated['users'][number]

type AgencyGenerated = components['schemas']['AgencyResource']
type AgencyDetailedGenerated = Extract<AgencyGenerated, { portal_preview: { commission_pct: number } }>
type AgencyListGenerated = Exclude<AgencyGenerated, { portal_preview: { commission_pct: number } }>

export type AgencyListItem = Omit<
  AgencyListGenerated,
  'status' | 'sla_breached' | 'users'
> & {
  status: AgencyStatus
  sla_breached: boolean
  users: Array<AgencyUser>
}

export type Agency = Omit<
  AgencyDetailedGenerated,
  'status' | 'sla_breached' | 'users' | 'portal_preview'
> & {
  status: AgencyStatus
  sla_breached: boolean
  users: Array<AgencyUser>
  portal_preview: {
    commission_pct: number
    net_rates: Array<{
      year: number
      suite_pp: number
      owner_pp: number
      charter_week: number
    }>
  }
}

export type CommissionRow = Omit<
  components['schemas']['CommissionResource'],
  'status'
> & {
  status: CommissionStatus
}

export type CommissionPayout = NonNullable<components['schemas']['CommissionResource']['payout']>
export type CommissionPayoutInput = components['schemas']['StoreCommissionPayoutRequest']
export type PortalPreview = components['schemas']['AgencyPortalPreviewResource']
export type AgencyUserInput = components['schemas']['StoreAgencyUserRequest']
export type AgencyUserUpdate = components['schemas']['UpdateAgencyUserRequest']

export type RefundRequest = Omit<
  components['schemas']['RefundRequestResource'],
  | 'status'
  | 'band_label'
  | 'business_days_remaining'
  | 'sla_breached'
  | 'can_approve'
  | 'can_execute'
> & {
  status: RefundStatus
  band_label: CancellationBandLabel
  business_days_remaining: number
  sla_breached: boolean
  can_approve: boolean
  can_execute: boolean
}

export type PaymentsKpis = operations['payment.index']['responses'][200]['content']['application/json']['meta']['kpis']

export type AgenciesKpis = operations['agency.index']['responses'][200]['content']['application/json']['meta']['kpis']

export type RefundsRules = operations['refund.index']['responses'][200]['content']['application/json']['meta']['rules']

/**
 * Mirrors App\Support\Payments\PaymentOptions::all().
 * Generated kinds/methods use Type[]; overlay keeps Array<>.
 */
export type PaymentOption = {
  value: string
  label: string
  recordable: boolean
}

export type PaymentOptions = {
  kinds: Array<PaymentOption>
  methods: Array<PaymentOption>
}
