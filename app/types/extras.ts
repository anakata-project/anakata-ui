/**
 * Booking-extra aliases over generated schemas.
 * Catalogue document leftovers live in config.ts (same reason as
 * rates / engine / rules: ConfigCurrentResource.document is untyped).
 */

import type { components, operations } from './api'
import type {
  ConfigVersionDetail,
  ExtrasCatalogue,
  ExtrasCatalogueItem,
  ExtrasVersion,
} from './config'

export type { ExtrasCatalogue, ExtrasCatalogueItem, ExtrasVersion }

export type BookingExtra = components['schemas']['BookingExtraResource']

export type ExtrasListSummary = Omit<
  operations['bookingExtra.index']['responses'][200]['content']['application/json'],
  'data'
>

export type ExtrasVersionDetail = ConfigVersionDetail<ExtrasCatalogue>
