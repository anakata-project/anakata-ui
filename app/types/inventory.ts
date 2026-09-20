/**
 * Hand-written shapes for inventory payloads. Scramble leaves some nested
 * JSON untyped or emits `string` where the PHP enum is a closed set. Each
 * type mirrors a PHP class and must change with it.
 */

import type { components } from './api'

/** Mirrors App\Enums\CabinCategory. Update when the PHP enum changes. */
export type CabinCategory = 'SUITE' | 'OWNER'

/** Mirrors App\Enums\CabinState. Update when the PHP enum changes. */
export type CabinState = 'FREE' | 'HELD' | 'SOLD' | 'BLOCKED'

/** Mirrors App\Enums\ItineraryStatus. Update when the PHP enum changes. */
export type ItineraryStatus = components['schemas']['ItineraryStatus']

/** Mirrors App\Enums\DepartureStatus. Update when the PHP enum changes. */
export type DepartureStatus = components['schemas']['DepartureStatus']

/** Mirrors App\Enums\BlockReason. Update when the PHP enum changes. */
export type BlockReason = components['schemas']['BlockReason']

/** Mirrors App\Enums\ClaimKind. Update when the PHP enum changes. */
export type ClaimKind = 'BLOCK' | 'HOLD' | 'BOOKING'

/** Mirrors App\Enums\HoldType. Update when the PHP enum changes. */
export type HoldType = 'WEB' | 'REQUEST' | 'AGENCY' | 'CHARTER_QUOTE'

/** Mirrors App\Enums\EngineLabelCode. Update when the PHP enum changes. */
export type EngineLabelCode = 'NOT_SHOWN' | 'CHARTERED' | 'CLOSED' | 'CHARTER' | 'LIMITED' | 'FULL' | 'ONLY_N_LEFT' | 'AVAILABLE'

/** Mirrors App\Enums\EngineLabelTone. Update when the PHP enum changes. */
export type EngineLabelTone = 'wait' | 'comp' | 'pend' | 'canc' | 'hold' | 'conf'

/** Mirrors App\Http\Resources\Rms\CabinResource. Update when the PHP resource changes. */
export type Cabin = {
  id: number
  code: string
  label: string
  category: CabinCategory
  sort: number
}

/** Mirrors App\Http\Resources\Rms\YachtResource. Update when the PHP resource changes. */
export type Yacht = Omit<components['schemas']['YachtResource'], 'cabins'> & {
  cabins: Array<Cabin>
}

/** Mirrors itinerary facts / day_plan / faqs pairs (list<array{0: string, 1: string}>). */
export type ItineraryPair = [string, string]

/** Mirrors App\Support\Itineraries\Completeness. Update when the PHP class changes. */
export type ItineraryCompleteness = {
  pct: number
  missing: Array<string>
  blocking: Array<string>
}

/** Mirrors App\Http\Resources\Rms\ItineraryResource. Update when the PHP resource changes. */
export type Itinerary = Omit<
  components['schemas']['ItineraryResource'],
  | 'status'
  | 'hero_image_url'
  | 'highlights'
  | 'chips'
  | 'facts'
  | 'day_plan'
  | 'included'
  | 'excluded'
  | 'faqs'
  | 'completeness'
> & {
  status: ItineraryStatus
  hero_image_url: string | null
  highlights: Array<string>
  chips: Array<string>
  facts: Array<ItineraryPair>
  day_plan: Array<ItineraryPair>
  included: Array<string>
  excluded: Array<string>
  faqs: Array<ItineraryPair>
  completeness: ItineraryCompleteness
}

/** List and show use the same ItineraryResource. */
export type ItineraryListItem = Itinerary

/**
 * Mirrors App\Support\Itineraries\Defaults::payload().
 * Scramble's ItineraryDefaultsResource freezes seed literals and types
 * day_plan as string[]. Update when the PHP payload changes.
 */
export type ItineraryDefaults = {
  status: ItineraryStatus
  sort_order: number
  festive: boolean
  days: number
  nights: number
  embark: string
  disembark: string
  tagline: string
  hero_alt: string
  fallback_gradient: string
  card_description: string
  overview: string
  long_description: string
  highlights: Array<string>
  chips: Array<string>
  facts: Array<ItineraryPair>
  day_plan: Array<ItineraryPair>
  included: Array<string>
  excluded: Array<string>
  faqs: Array<ItineraryPair>
  slug: string | null
  meta_title: string
  meta_description: string
}

/** Mirrors App\Support\Inventory\EngineLabel. Update when the PHP class changes. */
export type EngineLabel = {
  code: EngineLabelCode
  text: string
  tone: EngineLabelTone
}

/** Mirrors App\Services\Inventory\Availability holder payload. */
export type ClaimHolder = {
  type: string
  id: number
  reference: string | null
  label: string | null
}

/** Mirrors App\Services\Inventory\Availability::claimSummary(). Update when the PHP method changes. */
export type ClaimSummary = {
  kind: ClaimKind
  hold_type: HoldType | null
  expires_at: string | null
  holder: ClaimHolder
}

/** Mirrors one cabin row on a departure snapshot. */
export type CabinAvailability = {
  cabin: {
    code: string
    label: string
    category: CabinCategory
  }
  state: CabinState
  claim: ClaimSummary | null
}

/** Mirrors App\Support\Inventory\DepartureSnapshot::$counts. */
export type AvailabilityCounts = {
  sold: number
  held: number
  blocked: number
  free: number
  suites_free: number
  owner_free: boolean
}

/** Mirrors the availability object on DepartureResource. */
export type Availability = {
  counts: AvailabilityCounts
  engine_label: EngineLabel
  cabins?: Array<CabinAvailability>
}

/** Mirrors App\Support\Inventory\DepartureLocks::for(). Update when the PHP class changes. */
export type DepartureLocks = {
  date_and_yacht: boolean
  delete: boolean
  reason: string | null
}

/** Mirrors App\Services\Inventory\Availability::kpis(). Update when the PHP method changes. */
export type DepartureKpis = {
  on_sale_on_engine: number
  cabins_bookable: number
  showing_only_n_left: number
  full: number
}

/**
 * Detail / layout departure (locks and cabin rows present).
 * Mirrors App\Http\Resources\Rms\DepartureResource.
 */
export type Departure = Omit<
  components['schemas']['DepartureResource'],
  'status' | 'availability' | 'locks'
> & {
  status: DepartureStatus
  availability: Availability & { cabins: Array<CabinAvailability> }
  locks: DepartureLocks
}

/** List row: locks and availability.cabins omitted unless with_cabins=1. */
export type DepartureListItem = Omit<
  components['schemas']['DepartureResource'],
  'status' | 'availability' | 'locks'
> & {
  status: DepartureStatus
  availability: Availability
  locks?: DepartureLocks
}

/** Layout is the same DepartureResource with cabins and locks. */
export type DepartureLayout = Departure

/** POST/PATCH /rms/departures body: departure fields plus warnings. */
export type DepartureMutationResponse = Departure & {
  warnings: Array<string>
}

/**
 * Mirrors App\Actions\Departures\GenerateSeason return.
 * Calendar dates (`skipped[].date`) are YYYY-MM-DD strings.
 */
export type GenerateSeasonResult = {
  created: Array<string>
  skipped: Array<{
    yacht: string
    date: string
  }>
}

/** One departure column on GET /rms/calendar. Dates are YYYY-MM-DD. */
export type CalendarDeparture = {
  id: number
  reference: string
  date: string
  yacht: {
    id: number
    code: string
    name: string
  }
  itinerary: {
    id: number
    code: string
    name: string
  }
  festive: boolean
  status: DepartureStatus
}

/** One cabin × departure cell on GET /rms/calendar. */
export type CalendarCell = {
  state: CabinState
  claim: ClaimSummary | null
}

/** One cabin row on GET /rms/calendar. `cells` is keyed by departure id. */
export type CalendarRow = {
  yacht: {
    id: number
    code: string
    name: string
  }
  cabin: Cabin
  cells: Record<string, CalendarCell>
}

/**
 * Mirrors App\Http\Controllers\Rms\CalendarController JSON.
 * Scramble emits departures / cells as string. Update when the PHP payload changes.
 */
export type CalendarGrid = {
  departures: Array<CalendarDeparture>
  rows: Array<CalendarRow>
}

/** One claim row on InternalBlockResource. Dates are YYYY-MM-DD. */
export type BlockClaim = {
  id: number
  kind: ClaimKind
  released_at: string | null
  cabin: {
    id: number
    code: string
    label: string
  }
  departure: {
    id: number
    reference: string
    date: string
    yacht: {
      id: number
      code: string
      name: string
    }
  }
}

/** Mirrors App\Http\Resources\Rms\InternalBlockResource. Update when the PHP resource changes. */
export type InternalBlock = Omit<
  components['schemas']['InternalBlockResource'],
  'reason' | 'claims'
> & {
  reason: BlockReason
  claims: Array<BlockClaim>
}

/**
 * Mirrors App\Exceptions\CabinUnavailableException::render().
 * Update when the PHP exception payload changes.
 */
export type CabinUnavailableItem = {
  cabin: {
    id: number
    code: string
    label: string
  }
  held_by: {
    kind: ClaimKind
    holder_type: string
    reference: string | null
  }
}

export type CabinUnavailableError = {
  message: string
  unavailable: Array<CabinUnavailableItem>
}
