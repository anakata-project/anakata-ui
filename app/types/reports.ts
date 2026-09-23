/**
 * Report aliases over generated RMS schemas.
 * No runtime list of keys, cadences or statuses.
 */

import type { components } from './api'

export type ReportDefinition = components['schemas']['ReportDefinitionResource']
export type ReportRun = components['schemas']['ReportRunResource']
export type ReportRunStatus = components['schemas']['ReportRunStatus']
export type ReportCadence = components['schemas']['ReportCadence']
export type RunReportInput = components['schemas']['StoreReportRunRequest']
export type UpdateSubscriptionInput = components['schemas']['UpdateReportSubscriptionRequest']

/**
 * Mirrors ReportSubscriptionResource.window.
 * Scramble types the parameters lookup as unknown.
 */
export type ReportSubscription = Omit<components['schemas']['ReportSubscriptionResource'], 'window'> & {
  window: string | null
}
