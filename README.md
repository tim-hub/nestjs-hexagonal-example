# NestJS Hexagonal Architecture Example (Port Adapter)
- [MIT License](LICENSE.md)

## What is Hexagonal Architecture? / Port adapter

- [Hexagonal architecture](https://web.archive.org/web/20060711221010/http://alistair.cockburn.us:80/index.php/Hexagonal_architecture)


![](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/im7unip69bgaqc8ebvz1.png)

### Explanation and Example of Port-Adapter

- Port
  - [Inbound Port/Driving Port](src/ticket/domain/inboudPorts/)
  - [Outbound Port/Driven Port](src/ticket/domain/outboundPorts/)
- Adapter
  - [Primary/Driving/Inbound Adapter](src/ticket/adapters/driving/)
  - [Secondary/Driven/Outbound Adapter](src/ticket/adapters/driven/)

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
- [Nest JS -Clean code using Hexagonal Architecture](https://towardsdev.com/nest-js-clean-code-using-hexagonal-architecture-3442a37a6e8e) ticket system source code
- About Hexagonal Architecture from [Tugce Konuklar](https://medium.com/idealo-tech-blog/hexagonal-ports-adapters-architecture-e3617bcf00a0)
