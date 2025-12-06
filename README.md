# TypeScript Toolkit

Common workspace functions for TypeScript & React projects.

## Prerequisites

- **Node.js** 18+ (recommended: latest LTS)
- **pnpm** 10.10.0 (managed via `packageManager` field)

## Getting Started

Install dependencies:

```bash
pnpm install
```

Build all packages:

```bash
pnpm build
```

Run tests:

```bash
pnpm test
```

## Repository Structure

This is a pnpm workspace monorepo containing reusable TypeScript utilities:

```
packages/
└── utils/          # Core utility functions organized by domain
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Run all packages in dev mode (parallel) |
| `pnpm test` | Run tests across all packages |
| `pnpm lint` | Lint all packages |

## Development

This project uses:

- **TypeScript** for type safety
- **tsup** for package bundling
- **Vitest** for testing
- **Biome** for formatting and linting
- **ESLint** for additional linting rules
- **Lefthook** for git hooks

## License

MIT © Eric Kumlin
