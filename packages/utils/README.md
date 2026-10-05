# @ekumlin/typescript-toolkit

Core utility functions for TypeScript & React projects, organized by domain.

## Installation

```bash
npm install @ekumlin/typescript-toolkit
# or
pnpm add @ekumlin/typescript-toolkit
# or
yarn add @ekumlin/typescript-toolkit
```

## Usage

This package uses subpath exports for tree-shaking. Import only what you need:

```typescript
import { clamp, positiveModulo } from '@ekumlin/typescript-toolkit/number';
import { isNonNullish } from '@ekumlin/typescript-toolkit/types';
import { invariant } from '@ekumlin/typescript-toolkit/values';
```

## Available Modules

### `collections`
Array, map, and object utilities for common operations, including `toArray`, `moveItem` (with the `MovePosition` constant), `omitKeys`, and `getMaxBy`.

### `dom`
DOM manipulation and CSS helpers for browser environments, including the `HtmlColorName` constant.

### `environment`
Runtime environment detection utilities.

### `error`
Error handling and conversion utilities.

### `http`
HTTP-related utilities including status codes, headers, query parameters, authorization tokens, `searchParamsToObject`, and `toFormData`. `HttpMethod`, `HttpRequestHeader`, and `HttpResponseHeader` are constants (see `createConstant`) with matching `is*`/`as*` helpers.

### `io`
Input/output constants including key codes (`KeyCode`) and MIME type names (`MimeTypeName`).

### `number`
Math and number utilities like `clamp`, `positiveModulo`, `scaleToFit`, and number conversions.

### `promise`
Promise manipulation helpers.

### `routing`
URL and routing utilities for navigation.

### `string`
String manipulation functions including `upperFirst`, `toReadableFileSize`, `includesIgnoreCase`, and URL validation.

### `testing`
Test helpers for building fixtures: `dangerouslyMockPartial`, `dangerouslyMockDeepPartial`, and `dangerouslyCoerceType`. All are unchecked casts, so use them only in tests.

### `time`
Date and time utilities including leap year detection, days in month calculation, date validation (`isValidDate`), and time format validation.

### `types`
Type guards for runtime type checking, and utility types like `DeepPartial`.

### `values`
Value assertion utilities including `invariant` and `unreachable` for runtime guarantees, and `createConstant` for defining a fixed set of values with a type guard (`isConstant`) and parser (`asConstant`).

## Dependencies

- **zod** - Schema validation (used in type guards)

## Development

Build the package:

```bash
pnpm build
```

Run tests:

```bash
pnpm test
```

Watch mode for development:

```bash
pnpm dev
```

Type check:

```bash
pnpm lint
```

## License

MIT © Eric Kumlin
