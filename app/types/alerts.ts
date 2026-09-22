/**
 * Alert inbox aliases. Every enum is the generated schema.
 */

import type { components } from './api'

export type Alert = components['schemas']['AlertResource']
export type AlertKind = components['schemas']['AlertKind']
export type AlertSeverity = components['schemas']['AlertSeverity']
export type AlertKindRow = components['schemas']['AlertKindResource']
export type AlertCounts = components['schemas']['AlertListResource']['meta']['counts']
