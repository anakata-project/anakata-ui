# Changelog

## v0.6.1

- Regenerated API types for `GET /rms/payments/options` (`PaymentOptionsResource`: kinds and methods as `{ value, label, recordable }`).
- Alias `PaymentOptions` / `PaymentOption` in `payments.ts`. Booking form-options is unchanged.

## v0.6.0

- Regenerated API types from the Sprint 5 OpenAPI spec (payments ledger, payment links, reconciliation, agencies, commissions, refunds, booking money / overdue / agency / refund fields, `GET /rms/payments` `meta.kpis`).
- New `app/types/payments.ts` aliases (`Payment` / `PaymentListItem` on the same schema, `PaymentLink`, `ReconciliationReport`, `Agency`, `CommissionRow`, `RefundRequest`, generated `PaymentsKpis`). Overlays remain where Scramble emits `string` for bools / enums (`can_mark_wire`, `sla_breached`, `kind` / `status` on resources).
- `Booking` keeps the Sprint 4 name and overlays `refund` and `payment_links`. `paid`, `pledged`, `overdue`, `agency` and `commission_*` come through from `BookingResource`.

## v0.5.3

- Regenerated API types for Task 09: `RequestSummary.hold.remaining_business_minutes`, `HoldResource.booking_id` / typed `departure` and `remaining_business_minutes`, `GET /holds` `from` / `to` and `meta.rules.business_day_minutes`.
- Aliases: `HoldListItem` (overlays only `type` and `booking_id`), `HoldListRules`, `BookingRequestSummary.hold.remaining_business_minutes`. `RequestQueueItem` overlays `hold` / `sla` because Scramble still emits `string | object`.

## v0.5.2

- Regenerated API types for Task 08: `GET /bookings/form-options` (`BookingFormOptionsResource`) and `ReservationQuoteResource.terms` (`balance_days` plus CHARTER deposit / business days / DPNG).
- Alias: `BookingFormOptions`. `BookingQuote` leftover overlay now includes `terms`.

## v0.5.1

- Regenerated API types for the Task 07 prelude: `BookingResource.request` (preferred channel, advisor, notes, hold, sla), `departure` extras (`return_date`, `itinerary_name`, `embark`, `festive`), `GET /bookings/owners` (`BookingOwnerResource`), and `GET /groups` `from` / `to`.
- Aliases: `BookingRequestSummary`, `BookingOwner`.

## v0.5.0

- Regenerated API types from the Sprint 4 OpenAPI spec (bookings, groups, contacts, requests, holds, waitlist, move preview, audit, request `meta.rules`, G5 `holds.*` fields).
- Retired hand-written inventory shapes that now have real generated properties (`CalendarGrid*`, `GenerateSeasonResult`, `DepartureMutationResponse`, `DepartureKpis`, availability / claim / lock objects, `CabinUnavailable*`, `CabinCategory`).
- Booking aliases (`Booking`, `BookingQuote`, `RequestQueueItem`, `HoldListItem`, `WaitlistEntry`, …). Overlays remain where Scramble emits `unknown[]` / `string[]` / seed literals (`allowed_transitions`, quote cabins, created-schema `bookings`, `HoldResource.departure`).
- Claim holder `detail` is the generated union: block `{ reason, reason_label }` or booking `{ status, type, segment, display_reference, owner_id, owner_name, party_label, hold_expired }` or `null`.
- `HoldsRules` G5 fields: `business_days`, `business_day_start`, `business_day_end`, `holidays`, `near_term_max_days`.

## v0.4.2

- Claim holder `detail`: `{ reason, reason_label }` on internal-block claims, otherwise `null`.
- `useApi().useFetch` accepts a computed URL (`MaybeRefOrGetter<string>`), matching Nuxt `useFetch`.

## v0.4.1

- Itinerary overlays: `fallback_gradient_key` on `Itinerary`, and `gradients` (`{ key, css }`) plus `fallback_gradient_key` on `ItineraryDefaults`.

## v0.4.0

- Regenerated API types from the Sprint 3 OpenAPI spec (yachts, itineraries, departures, calendar, internal blocks, generate season).
- Sprint 3 aliases (`Yacht`, `Cabin`, `Itinerary`, `Departure`, `CalendarGrid`, `InternalBlock`, `GenerateSeasonResult`, plus defaults / mutation / 409 envelopes) and hand-written inventory shapes in `app/types/inventory.ts` where Scramble emits untyped or over-literal JSON. Calendar dates stay `YYYY-MM-DD` strings.

## v0.3.0

- Regenerated API types from the Sprint 2 OpenAPI spec (rates, engine settings, business rules, price check, `engine_copy.manage`).
- Sprint 2 aliases (`RatesDocument`, `EngineSettingsDocument`, `BusinessRulesDocument`, `ConfigVersion<T>`, `ConfigVersionSummary`, `ConfigChange`, `ConfigValidation`, `PriceCheckRow`, `Quote`, `RuleRegistryRow`, `RuleRegistryCounts`, `Permission`) plus hand-written document shapes in `app/types/config.ts` where Scramble emits untyped objects.

## v0.2.1

- Moved the `anakata:api-error` hook and `anakata.displayTimeZone` AppConfig augmentation to `app/types/anakata-augment.d.ts` so it is committed. `nuxt.d.ts` stays gitignored (Nuxt’s generated file).

## v0.2.0

- Generated API types from the Scramble OpenAPI spec (`pnpm types:api`, committed `app/types/api.d.ts`) and Sprint 1 aliases (`Me`, `Role`, `PermissionItem`, `UserListItem`, `ChangeHistoryEntry`, `Paginated<T>`).
- `createApiClient` `onError` callback and the `anakata:api-error` Nuxt runtime hook (not fired on a 419 that succeeds on retry).
- `useDates()` display time zone (`anakata.displayTimeZone`, default UTC): instants convert with `hourCycle: 'h23'`; calendar dates never shift; naive datetimes throw. New `time` style and `zoneLabel()`.

## v0.1.0

First tagged layer for the panel and the engine.

- Prototype colour tokens on `:root` (light) and `.dark` (dark), mapped to Nuxt UI `--ui-*`. Oswald, Archivo, IBM Plex Mono, Manrope.
- Back-office Nuxt UI theme: buttons, fields, list table, badges, card, tabs, modal, slideover, plus house-rule dropdown, tooltip, toast, checkbox, switch, pagination.
- Shared `AnkLabel`, `AnkPill`, `AnkPanel`, `AnkKpi`, `AnkMoney`, `AnkThemeToggle`.
- `useMoney()`, `useDates()`, `useApi()` (Sanctum cookie CSRF on the client).
- Playground style guide on port 3010.
