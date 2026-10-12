# CleanPolice DEMO

Responsive React-/TypeScript-Landingpage für professionelle Gebäudereinigung in Fürstenberg und Umgebung.

## Entwicklung

```bash
npm install
npm run dev
```

## Produktion

```bash
npm run build
```

Der Build nutzt relative Asset-Pfade, erzeugt `dist/404.html` und veröffentlicht die fertigen Dateien anschließend in das Projekt-Root. Das entspricht dem Plesk-Setup der anderen Projekte: Plesk kann direkt die produktive `index.html` und den `assets/`-Ordner ausliefern.

## Branding

- `public/clean-police-favicon.svg` – Clean-Police-Favicon
- `public/clean-police-icons.svg` – SVG-Icon-Sprite
- `App.js` – kompatibler Root-Einstiegspunkt; die eigentliche App liegt in `src/App.tsx`

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
