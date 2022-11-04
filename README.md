# ClosedBeach

ClosedBeach.io is an NFT marketplace service that creates exclusive networking experiences for the CSULB community and promotes altruism by showcasing NFT artwork.

## Overview

Top-level directory layout
```
  .
  ├── .yarn/
  ├── backend/              # Backend source code and files
  ├── frontend/             # Frontend source code and files
  ├── packages/
  │   └── shared/           # Shared source code and files
  ├── package.json          # root package.json file for the project
  ├── .yarnrc.yml
  └── yarn.lock
```

## Requirements

- Visual Studio Code
- npm v8.19.2
- yarn v3.2.4

## Development

Run the frontend app in development mode.
```
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Using yarn

### Accessing the list of commands
```
yarn help
```

### Installing all the dependencies
```
yarn
yarn install
```

### Adding a dependency
```
yarn add [package]@[version]
```

### Run a given sub-command on a single workspace
```
yarn workspace <workspaceName> <commandName> ...
```

**Example:** adding bootstrap version 5.2.2 as a backend dependency
```
yarn workspace @closedbeach.io/backend add bootstrap@5.2.2
```

### Adding a dependency to different categories of dependencies
```
yarn add [package] --dev  # dev dependencies
yarn add [package] --peer # peer dependencies
```

**Example:** adding hardhat version 2.12.2 as a development dependency
```
yarn workspace @closedbeach.io/backend add hardhat@2.12.2 --dev
```

### Upgrading a dependency
```
yarn up [package]@[version]
```

### Removing a dependency
```
yarn remove [package]
```

### Display the reason why a package is needed
```
yarn why [package] [--recursive]
```

### Locating most common issues
```
yarn dlx @yarnpkg/doctor
```
