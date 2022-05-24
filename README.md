# NestJS Hexagonal Example (Port Adapter)
- [MIT License](LICENSE.md)

![](https://miro.medium.com/max/1362/1*F9D76gA1FJNH504TcEWG_A.png)

> The application code is split into two main components, the Application Core Domain and the Adapters.
The Core Domain contains the implementation of the business logic or functional requirements, for example in our use case, a customer can only have 3 active tickets.
The Adapters contain the implementation logic of the Non-functional requirements, like exposing a REST API to receive the customer ticket and storing it in the Postgres database.

> How does it work?
The Core Domain exposes two types of ports, Input ports and output ports.
Input ports are implemented methods that can be called from outside the Domain package, usually, these methods are called by Adapters.
Output ports are interfaces that specify behaviours that Adapters must implement.
Adapters implement the Output ports interfaces, then dependency injection is used to inject the desired Output port Adapter implementation at runtime.

from [Rida kaddir](https://towardsdev.com/nest-js-clean-code-using-hexagonal-architecture-3442a37a6e8e)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
