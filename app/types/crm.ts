/**
 * CRM /api/crm aliases. Sources are CRM schemas only — never an RMS
 * resource. Overlays only where Scramble still cannot express the
 * shape. Each leftover mirrors a PHP class.
 */

import type { components, operations } from './api'

export type ContactType = components['schemas']['ContactType']
export type Lifecycle = components['schemas']['ContactLifecycle']

/**
 * Mirrors App\Enums\ContactSegment. Derived, no FormRequest schema.
 */
export type Segment = 'HIGH' | 'MID' | 'NEW'

export type Contact = Omit<
  components['schemas']['CrmContactResource'],
  'type' | 'lifecycle' | 'segment' | 'bookings' | 'consent'
> & {
  type: ContactType
  lifecycle: Lifecycle
  segment: Segment
  consent: {
    marketing: boolean
    transactional: true
  }
}

/**
 * Mirrors App\Http\Resources\Crm\ContactBookingResource.
 * Generated can_act freezes as string.
 */
export type ContactBooking = Omit<
  components['schemas']['ContactBookingResource'],
  'can_act'
> & {
  can_act: boolean
}

export type ContactProfile = Contact & {
  bookings: Array<ContactBooking>
}

export type ContactFilters = operations['crm.contact.index']['responses'][200]['content']['application/json']['meta']['filters']

/**
 * Mirrors App\Http\Resources\Crm\ContactDuplicateResource.
 * Generated reasons is string.
 */
export type ContactDuplicate = Omit<
  components['schemas']['ContactDuplicateResource'],
  'a' | 'b' | 'reasons'
> & {
  a: Contact
  b: Contact
  reasons: Array<string>
}

export type ContactMerge = components['schemas']['ContactMergeResource']

/**
 * Mirrors App\Http\Resources\Crm\ContactMergeResultResource.
 * Generated swapped freezes as string. contact is the show payload.
 */
export type ContactMergeResult = Omit<
  components['schemas']['ContactMergeResultResource'],
  'swapped' | 'contact'
> & {
  swapped: boolean
  contact: ContactProfile
}

/**
 * Mirrors App\Http\Resources\Crm\ContactUnmergeResultResource.
 * Generated skipped_rows is string.
 */
export type ContactUnmergeResult = Omit<
  components['schemas']['ContactUnmergeResultResource'],
  'skipped_rows'
> & {
  skipped_rows: Array<{
    table: string
    id: number
  }>
}

export type TimelineItem = components['schemas']['ContactTimelineItemResource']

export type ActivityEvent = Omit<
  components['schemas']['EngineActivityItemResource'],
  'name'
> & {
  name: components['schemas']['BehaviouralEventName']
}

export type ActivityKpis = operations['crm.engineActivity']['responses'][200]['content']['application/json']['meta']['kpis']

export type OwnershipRow = components['schemas']['FieldOwnershipResource']
export type ScheduledJobRun = components['schemas']['ScheduledJobResource']
export type SyncFailure = components['schemas']['SyncFailureResource']
export type EventCatalogueRow = components['schemas']['EventCatalogueResource']
export type SyncIdentityRow = components['schemas']['SyncIdentityResource']
export type RetrySyncFailure = components['schemas']['RetrySyncFailureResource']
export type SyncKpis = operations['sync.jobs']['responses'][200]['content']['application/json']['meta']['kpis']
