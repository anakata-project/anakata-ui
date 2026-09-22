/**
 * Privacy /api/privacy aliases. Sources are privacy schemas only —
 * never an RMS booking, payment or guest type, and never a CRM schema.
 */

import type { components } from './api'

export type SubjectRequestType = components['schemas']['SubjectRequestType']

/**
 * Mirrors App\Enums\SubjectRequestStatus. The resource stores status as a string.
 */
export type SubjectRequestStatus = 'OPEN' | 'COMPLETED' | 'REJECTED'

export type SubjectRequestChannel = components['schemas']['SubjectRequestChannel']

export type SubjectRequest = Omit<
  components['schemas']['SubjectRequestResource'],
  'type' | 'status' | 'channel'
> & {
  type: SubjectRequestType
  status: SubjectRequestStatus
  channel: SubjectRequestChannel
}

export type SubjectRequestInput = components['schemas']['StoreSubjectRequestRequest']
export type CloseSubjectRequestInput = components['schemas']['CloseSubjectRequestRequest']
export type EraseSubjectRequestInput = components['schemas']['EraseSubjectRequestRequest']
