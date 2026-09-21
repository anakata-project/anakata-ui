# anakata-ui

Shared Nuxt 4 layer for **anakata-panel** (RMS + CRM) and **anakata-engine**. It owns the design tokens, Nuxt UI theme, fonts, `Ank*` components, and the API / money / date composables.

## What the layer provides

- **Tokens** in `app/assets/css/main.css` — prototype names (`--forest`, `--coral`, `--ivory`, `--hair`…) mapped onto Nuxt UI (`--ui-*`). Dark is the default; light is the alternative.
- **Nuxt UI theme** in `app/app.config.ts` — back-office sizes (RMS / CRM). The engine adds its own size overrides in its app.
- **Fonts** via `@nuxt/fonts`: Oswald, Archivo, IBM Plex Mono, Manrope.
- **Components** (`AnkLabel`, `AnkPill`, `AnkPanel`, `AnkKpi`, `AnkMoney`, `AnkThemeToggle`).
- **Composables:** `useApi()`, `useMoney()`, `useDates()`.
- **Generated API types** in `app/types/api.d.ts` (aliases in `app/types/index.ts`).
- **i18n** locale `en` for layer UI strings (theme toggle).

Nothing app-specific belongs here. If only one app uses it, it lives in that app.

## How apps consume it

Local path only, for now:

```ts
export default defineNuxtConfig({
  extends: ['../anakata-ui'],
})
```

How apps fetch the layer remotely will be decided with the git host (08-dev-decisions A13). Do not publish this package to npm.

`@nuxt/ui` and `tailwindcss` versions in the apps **must match** this layer. Today that is `@nuxt/ui` `^4.11.1` and `tailwindcss` `^4.3.3`. If you bump one, bump the others in the same change.

## API types

`app/types/api.d.ts` is generated from the API OpenAPI spec and committed. Do not edit it by hand.

Regenerate after every API change the apps consume, and before starting the frontend tasks of a sprint:

```bash
pnpm types:api
```

The script reads `${API_OPENAPI_URL:-http://localhost:8000/docs/api.json}` (API must be running). Convenient aliases live in `app/types/index.ts`: Sprint 1 (`Me`, `Role`, `PermissionItem`, `Permission`, `UserListItem`, `ChangeHistoryEntry`, `Paginated<T>`), Sprint 2 (`RatesDocument`, `EngineSettingsDocument`, `BusinessRulesDocument`, `ConfigVersion<T>`, `ConfigVersionSummary`, `ConfigChange`, `ConfigValidation`, `PriceCheckRow`, `Quote`, `RuleRegistryRow`, `RuleRegistryCounts`), Sprint 3 (`Yacht`, `Cabin`, `CabinCategory`, `Itinerary`, `ItineraryListItem`, `ItineraryCompleteness`, `ItineraryStatus`, `ItineraryDefaults`, `ItineraryGradient`, `Departure`, `DepartureListItem`, `DepartureStatus`, `DepartureLocks`, `DepartureKpis`, `DepartureMutationResponse`, `Availability`, `CabinState`, `CabinAvailability`, `ClaimSummary`, `ClaimHolder` (`detail` is the block/booking/`null` union), `EngineLabel`, `CalendarGrid`, `DepartureLayout`, `InternalBlock`, `BlockReason`, `GenerateSeasonResult`, `CabinUnavailableError`), Sprint 4 (`Booking`, `BookingListItem`, `BookingStatus`, `BookingType`, `BookingSegment`, `MainChannel`, `ChannelOfOrigin`, `PriceLine`, `BookingQuote`, `BookingQuoteRequest`, `CreateReservationRequest`, `CreateReservationResponse`, `BookingFormOptions`, `AllowedTransition`, `MovePreview`, `BookingAuditRow`, `Group`, `GroupSummary`, `Contact`, `ContactSearchResult`, `BookingOwner`, `BookingRequestSummary`, `RequestQueueItem`, `HoldListItem`, `HoldListRules`, `WaitlistEntry`, `RequestQueueRules`), Sprint 5 (`Payment`, `PaymentListItem`, `PaymentKind`, `PaymentMethod`, `PaymentStatus`, `PaymentLink`, `PaymentOptions`, `PaymentOption`, `ReconciliationReport`, `ReconciliationRow`, `Agency`, `AgencyListItem`, `AgencyUser`, `AgencyStatus`, `CommissionRow`, `CommissionStatus`, `RefundRequest`, `RefundStatus`, `CancellationBandLabel`, `PaymentsKpis`), Sprint 6 (`Guest`, `GuestIssue`, `GuestIssueSeverity`, `GuestListSummary`, `PngCategory`, `MaskedNote`, `Consent`, `ConsentDocument`, `ConsentSource`, `BookingConsent`, `Country`, `ContactInRow`, `NationalityRow`, `NationalitiesSummary`, `BookingExtra`, `ExtrasListSummary`, `ExtrasCatalogue`, `ExtrasCatalogueItem`, `ExtrasVersion`, `ConsentVersions`), and Sprint 7 (`IssuedDocument`, `DocumentKind`, `DocumentPlanKind`, `DocumentPlanRow`, `DocumentStatus`, `ClientDocumentRow`, `Delivery`, `DeliveryKind`, `DeliveryStatus`). Most Sprint 3 inventory shapes are now generated; leftovers and config documents stay in `app/types/inventory.ts` / `app/types/config.ts` / `app/types/bookings.ts` / `app/types/payments.ts` / `app/types/guests.ts` / `app/types/extras.ts` / `app/types/documents.ts`.

## Style guide

The `.playground` app is the visual spec.

```bash
pnpm install
pnpm dev
```

http://localhost:3010 — port **3010** so it never collides with the engine on 3000. Dark by default; use the header toggle for light.

## Quality

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

`build` builds the playground.

## How to release

Semantic version git tags (`v0.1.0`, `v0.2.0`…). Breaking changes bump the **minor** while the version is `< 1.0`. Write a line in `CHANGELOG.md` per release.

1. Bump `"version"` in `package.json`.
2. Add the release notes to `CHANGELOG.md`.
3. Commit.
4. Tag and push:

```bash
git tag v0.1.0
git push origin HEAD
git push origin v0.1.0
```
