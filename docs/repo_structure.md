# Structure

```markdown
gar-nst2023/
├── .husky/           --> Git hooks
│   ├── pre-commit.sh --> Run before commit
│   ├── pre-push.sh   --> Run before push
│   └── ...
├── .vscode/
│   ├── extensions.json --> VSCode extensions recommendations
│   └── settings.json   --> VSCode settings
├── scripts/
│   ├── build_image_gitlab.sh --> Script for build image in gitlab
│   ├── jest.sh               --> Script for run jest
│   └── k8s_deployment.sh     --> Script for deploy to kubernetes
├── src/
│   ├── components/ --> All Components
│   │   └── ...
│   ├── constants/ --> All Constants
│   │   └── ...
│   ├── hooks/ --> All Hooks
│   │   └── ...
│   ├── locales/  --> All localizations
│   │   ├── en/   --> English
│   │   │   └── ...
│   │   ├── th/   --> Thai
│   │   │   └── ...
│   │   └── ...
│   ├── pages/            --> All Pages
│   │   ├── Games/        --> All Games Page
│   │   │   └── ...
│   │   └── UiComponents  --> UI Components Page
│   │       └── ...
│   ├── types/                --> All Types
│   │   ├── common/           --> Common types
│   │   │   └── ...
│   │   ├── http/             --> Http types
│   │   │   └── ...
│   │   ├── pageUiComponent/  --> Types for UI Components Page
│   │   │   └── ...
│   │   ├── react/            --> Utilities types for react
│   │   │   └── ...
│   │   ├── utilities/        --> Utilities types
│   │   │   └── ...
│   │   ├── i18next.d.ts      --> i18next types
│   │   ├── image.d.ts        --> Image types
│   │   ├── twin.d.ts         --> Twin.macro types
│   │   ├── windowEnv.d.ts    --> Window env types
│   │   └── ...
│   ├── utils/          --> All Utilities
│   │   ├── axios/      --> Axios utilities
│   │   │   └── ...
│   │   ├── color/      --> Color utilities
│   │   │   └── ...
│   │   ├── env/        --> Env utilities
│   │   │   └── ...
│   │   ├── jest/       --> Jest utilities
│   │   │   └── ...
│   │   ├── number/     --> Number utilities
│   │   │   └── ...
│   │   ├── object/     --> Object utilities
│   │   │   └── ...
│   │   ├── string/     --> String utilities
│   │   │   └── ...
│   │   └── ...
│   └── ...
├── .env                  --> Environment variables
├── .env.example          --> Environment variables example
├── .eslintignore         --> Eslint ignore file
├── .eslintrc.js          --> Eslint configuration
├── .gitignore            --> Git ignore file
├── .prettierignore       --> Prettier ignore file
├── .prettierrc.js        --> Prettier configuration
├── .versionrc.json       --> Version release configuration and changelog auto generate
├── .yarnrc               --> Yarn configuration
├── CHANGELOG.md          --> Changelog
├── commitlint.config.js  --> Commitlint configuration
├── cz.config.js          --> Commitizen configuration
├── docker-compose.yml    --> Docker compose file
├── makefile              --> Makefile
├── package.json          --> Package.json
├── postcss.config.js     --> Postcss configuration
├── README.md             --> Readme
├── tailwind.config.js    --> Tailwind configuration
├── tsconfig.json         --> Typescript configuration
├── yarn.lock             --> Yarn lock file
└── ...
```
