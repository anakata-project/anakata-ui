/**
 * Portal /api/portal aliases. Sources are portal schemas only.
 * This file does not import CRM or panel types.
 *
 * payment_state on PortalBooking is the inline enum Scramble emitted
 * (three sentences from paymentStateWords). next stays a string because
 * the sentence interpolates the SLA hours.
 */

import type { components } from './api'

export type PortalSession = components['schemas']['PortalMeResource']
export type PortalAgency = components['schemas']['PortalAgencyMeResource']
export type PortalNetRates = components['schemas']['PortalNetRateResource']
export type PortalAvailabilityRow = components['schemas']['PortalAvailabilityResource']
export type PortalBooking = components['schemas']['PortalBookingResource']
export type PortalCommission = components['schemas']['PortalCommissionResource']
export type PortalMaterial = components['schemas']['PortalSalesMaterialResource']
export type PortalRequest = components['schemas']['PortalRequestResource']
export type PortalRequestCreated = components['schemas']['PortalRequestCreatedResource']
export type PortalRequestInput = components['schemas']['StorePortalRequestRequest']
export type AcceptPortalInviteInput = components['schemas']['AcceptInviteRequest']
export type PortalLoginInput = components['schemas']['PortalLoginRequest']
export type PortalForgotInput = components['schemas']['PortalForgotPasswordRequest']
export type PortalResetInput = components['schemas']['PortalResetPasswordRequest']
