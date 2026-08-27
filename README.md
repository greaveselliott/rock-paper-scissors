# Rock Paper Scissors

An adaptive browser game built with React. Play against a rated computer from
400 to 2800, or switch to computer-versus-computer mode and watch both sides
compete.

Release: [v1.1.0](https://github.com/greaveselliott/rock-paper-scissors/releases/tag/v1.1.0)

> [!CAUTION]
> This is a historical portfolio codebase with a 2017 dependency tree and
> known security advisories. It is not suitable for deployment. Run it only in
> an isolated local environment until the frontend toolchain is modernized.

## Features

- Standard Rock Paper Scissors and a Rock Paper Scissors Lizard Spock ruleset
- Human-versus-computer and computer-versus-computer modes
- Seven difficulty levels, from Beginner (400) to Grandmaster (2800)
- A responsive difficulty control with accessible labels and descriptions
- Unit coverage for game rules, state transitions, and deterministic computer
  choices

## How the computer adapts

The opponent analyses the latest 20 player moves. It scores recurring choices,
weights recent moves more heavily, and looks at which move usually follows the
player's last choice. It then either counters the prediction, chooses randomly,
or makes a deliberate mistake.

The rating controls that mix: prediction probability rises from 8% at 400 to
92% at 2800, while the two lowest levels include an additional blunder chance.
The random source is injectable so the decision logic can be tested
deterministically.

## Run locally

```bash
npm install
npm start
```

The UI uses a historical React 15 and Webpack 3 toolchain. Current Node.js
releases may require dependency modernization before the application builds.

## Test

```bash
npm test -- --coverage
```

## License

[MIT](LICENSE)
