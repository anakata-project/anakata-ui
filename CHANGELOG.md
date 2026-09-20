# Changelog

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
