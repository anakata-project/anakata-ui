import type { components } from './api'

export type Me = components['schemas']['MeResource']
export type Role = components['schemas']['RoleResource']
export type PermissionItem = components['schemas']['PermissionResource']
export type Permission = components['schemas']['Permission']
export type UserListItem = components['schemas']['UserResource']
export type ChangeHistoryEntry = components['schemas']['ChangeHistoryResource']

export type LaravelPaginator<T> = {
  data: Array<T>
  links: {
    first: string | null
    last: string | null
    prev: string | null
    next: string | null
  }
  meta: {
    current_page: number
    from: number | null
    last_page: number
    links: Array<{
      url: string | null
      label: string
      active: boolean
    }>
    path: string | null
    per_page: number
    to: number | null
    total: number
  }
}

export type Paginated<T> = LaravelPaginator<T>

export type {
  AlertsRules,
  BusinessRulesDocument,
  BusinessRulesVersion,
  CalendarSettings,
  CancellationBand,
  CharterSettings,
  CommissionRules,
  ConfigChange,
  ConfigPublisher,
  ConfigValidation,
  ConfigVersion,
  ConfigVersionDetail,
  ConfigVersionSummary,
  ConfigWarning,
  CopySettings,
  DiscountsRules,
  EngineSettingsDocument,
  EngineSettingsValidation,
  EngineSettingsVersion,
  FeesSettings,
  GuestsSettings,
  HoldsRules,
  LocaleSettings,
  ManifestsRules,
  NoRate,
  PaymentsRules,
  PngFees,
  PriceCheckRow,
  Quote,
  QuoteLine,
  RateRules,
  RateTerms,
  RateYear,
  RatesDocument,
  RatesVersion,
  RetentionRules,
  RuleGroup,
  RuleRegistryCounts,
  RuleRegistryRow,
  RuleStatus,
  RuleWhere,
  SlaRules,
} from './config'

export type {
  Availability,
  AvailabilityCounts,
  BlockClaim,
  BlockReason,
  Cabin,
  CabinAvailability,
  CabinCategory,
  CabinState,
  CabinUnavailableError,
  CabinUnavailableItem,
  CalendarCell,
  CalendarDeparture,
  CalendarGrid,
  CalendarRow,
  ClaimHolder,
  ClaimKind,
  ClaimSummary,
  Departure,
  DepartureKpis,
  DepartureLayout,
  DepartureListItem,
  DepartureLocks,
  DepartureMutationResponse,
  DepartureStatus,
  EngineLabel,
  EngineLabelCode,
  EngineLabelTone,
  GenerateSeasonResult,
  HoldType,
  InternalBlock,
  Itinerary,
  ItineraryCompleteness,
  ItineraryDefaults,
  ItineraryGradient,
  ItineraryListItem,
  ItineraryPair,
  ItineraryStatus,
  Yacht,
} from './inventory'
