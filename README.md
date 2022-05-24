# NestJS Hexagonal Architecture Example (Port Adapter)
- [MIT License](LICENSE.md)

## What is Hexagonal Architecture? / Port adapter

- [Hexagonal architecture](https://web.archive.org/web/20060711221010/http://alistair.cockburn.us:80/index.php/Hexagonal_architecture)


![](https://miro.medium.com/max/1400/1*LF3qzk0dgk9kfnplYYKv4Q.png)
> from [Tugce Konuklar](https://medium.com/idealo-tech-blog/hexagonal-ports-adapters-architecture-e3617bcf00a0)

### Explanation and Example of Port-Adapter

- Port
  - [Inbound Port/Driving Port](src/ticket/domain/inboudPorts/README.md)
  - [Outbound Port/Driven Port](src/ticket/domain/outboundPorts/README.md)
- Adapter
  - [Primary/Driving/Inbound Adapter](src/ticket/adapters/driving/README.md)
  - [Secondary/Driven/Outbound Adapter](src/ticket/adapters/driven/README.md)

---

## Installation and Running

```bash
$ pnpm install
$ pnpm run start:dev
```

---

# Todo

- [ ] Consider implementing the unit test and e2e test


# References

As you may know, this project was inspired by,
- [Hexagonal (Ports & Adapters) Architecture](https://medium.com/idealo-tech-blog/hexagonal-ports-adapters-architecture-e3617bcf00a0)
- [Nest JS -Clean code using Hexagonal Architecture](https://towardsdev.com/nest-js-clean-code-using-hexagonal-architecture-3442a37a6e8e) ticket system source code
- About Hexagonal Architecture from [Tugce Konuklar](https://medium.com/idealo-tech-blog/hexagonal-ports-adapters-architecture-e3617bcf00a0)
