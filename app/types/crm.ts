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

export type ConsentPurpose = components['schemas']['ConsentPurpose']

/**
 * Mirrors App\Enums\DealStage. The pipeline schema stores the stage as a string.
 */
export type DealStage =
  | 'NEW_LEAD'
  | 'QUALIFYING'
  | 'QUOTED'
  | 'NEGOTIATION'
  | 'DEPOSIT_PENDING'
  | 'BOOKING_CONFIRMED'
  | 'WON_COMPLETED'
  | 'LOST'

export type DealType = components['schemas']['DealType']

/**
 * Mirrors App\Enums\TaskKind. The task list stores the kind as a string.
 */
export type TaskKind =
  | 'REQUEST_RESPONSE'
  | 'CHARTER_QUOTE'
  | 'OVERDUE_DECISION'
  | 'COMMISSION_CAP'
  | 'WIRE_WINDOW'
  | 'REFUND_DECISION'
  | 'DEAL_QUOTE'
  | 'MANUAL'
  | 'SUBJECT_REQUEST'

type ConsentCurrent = components['schemas']['ContactConsentsResource']['current'][number]
type ConsentHistory = components['schemas']['ContactConsentsResource']['history'][number]

export type ContactConsentState = Omit<ConsentCurrent, 'purpose'> & {
  purpose: ConsentPurpose
}

export type ContactConsentEntry = Omit<ConsentHistory, 'purpose'> & {
  purpose: ConsentPurpose
}

export type ConsentRegisterRow = Omit<
  components['schemas']['ConsentRegisterRowResource'],
  'purpose'
> & {
  purpose: ConsentPurpose
}

export type DataMapRow = components['schemas']['ConsentDataMapRowResource']

export type RecordConsentInput = components['schemas']['RecordContactConsentRequest']

type PipelineDealGenerated = components['schemas']['PipelineResource']['columns'][number]['deals'][number]
type PipelineColumnGenerated = components['schemas']['PipelineResource']['columns'][number]

export type PipelineDeal = Omit<PipelineDealGenerated, 'type'> & {
  type: DealType
}

export type PipelineColumn = Omit<PipelineColumnGenerated, 'stage' | 'deals'> & {
  stage: DealStage
  deals: Array<PipelineDeal>
}

export type PipelineKpis = components['schemas']['PipelineResource']['meta']['kpis']

export type StageMapRow = Omit<
  components['schemas']['StageMapResource']['data'][number],
  'stage'
> & {
  stage: DealStage
}

export type DealDetail = Omit<components['schemas']['DealResource'], 'type' | 'stage'> & {
  type: DealType
  stage: DealStage
}

export type DealInput = components['schemas']['StoreDealRequest']
export type MoveDealInput = components['schemas']['MoveDealStageRequest']
export type AssignDealInput = components['schemas']['AssignDealRequest']
export type BindDealInput = components['schemas']['BindDealRequest']

export type CrmTask = Omit<
  components['schemas']['TaskListResource']['data'][number],
  'kind'
> & {
  kind: TaskKind
}

export type TaskKpis = components['schemas']['TaskListResource']['meta']['kpis']

export type TaskInput = components['schemas']['StoreManualTaskRequest']
export type TaskUpdate = components['schemas']['UpdateManualTaskRequest']
export type CompleteTaskInput = components['schemas']['CompleteTaskRequest']

export type ContactActivity = components['schemas']['ContactActivityResource']
export type ActivityInput = components['schemas']['StoreContactActivityRequest']

export type Campaign = components['schemas']['CampaignIndexResource']['data'][number]

export type CampaignMeasures = Pick<
  Campaign,
  | 'redeemed'
  | 'revenue'
  | 'attributed_first'
  | 'attributed_last'
  | 'trade'
  | 'roas'
  | 'sends'
  | 'clicks'
>

export type CampaignOffer = components['schemas']['CampaignOffersResource']['data'][number]
export type CampaignBooking = components['schemas']['CampaignBookingPageResource']['data'][number]
export type CampaignInput = components['schemas']['StoreCampaignRequest']
export type CampaignUpdate = components['schemas']['UpdateCampaignRequest']

export type AttributionModelRow = components['schemas']['AttributionModelResource']['data'][number]

export type DeliveryRow = components['schemas']['DeliveryIndexResource']['data'][number]
export type DeliveryKpis = components['schemas']['DeliveryIndexResource']['meta']['kpis']

