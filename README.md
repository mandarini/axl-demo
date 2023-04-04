# A demo of how Nx works

## Install dependencies

```bash
yarn
```

## View the dependency graph

```bash
npx nx graph
```

and click on "Show all projects" in the sidebar.

## Build the app

```bash
npx nx build examples
```

See how the results are fetched from the Nx cloud cache.

## See how `affected` works

### 1. Change a file in a library

Make a change in `libs/utils/constants/src/lib/utils-constants.ts`,

eg. add the following line on line 15:

```typescript
export const NEW_CONST = 'new const';
```

### 2. Run `affected:graph`

```bash
npx nx affected:graph
```

and click on "Show all projects" in the sidebar.

See the affected projects marked in magenta.

### 3. Build again

```bash
npx nx build examples
```

See how the build result for the unaffected apps is fetched from the Nx cloud cache, while only the affected apps are rebuilt.
