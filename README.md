# CoSpace

Setup a `CoSpace` to link multiple (mono)repos together!

## Powered by

- [vscode multi-root workspace](https://code.visualstudio.com/docs/editor/multi-root-workspaces)
- [pnpm workspaces](https://pnpm.io/workspaces)
- [lage](https://microsoft.github.io/lage/)

## Getting started

1. Clone the [iTwin Viewer](https://github.com/iTwin/viewer) and [iTwin.js](https://github.com/iTwin/itwinjs-core) repos in sibling directories to this.

2. Run `pnpm setOverrides` to automatically update the `pnpm.overrides` section of the CoSpace's [package.json](package.json), to use the local package version from the workspace, disregarding semver. Useful for when you have pre-release versions of packages in your workspace.

3. Run `pnpm install` to install all the packages you've added to your CoSpace.

4. Run `pnpm build` to build all the packages you've added to your CoSpace using your monorepo task runner. I'm using [lage](https://microsoft.github.io/lage/), but [turborepo](https://turborepo.org/docs) should theoretically work.

5. Run `pnpm dev` from the extension-dev directory to compile in watch mode while developing.
