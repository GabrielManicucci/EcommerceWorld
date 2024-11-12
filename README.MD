# Rest-API EcommerceWorld

- TypeScript (Tipagem a fim de redução de erros com relação aos tipos primitivos do javascript)
- Fastify (Facilidade, Plugins, performático, e boa documentação com suporte ao typescript)
- Prisma como ORM (Tipagem forte e uso de migrations e execelente documentação)
- MongoDB
- Autenticação via payloadCMS (Empresa já usa e facilidade)
- Zod para validação de shemas
- tsup para compilar Typescript em Javascript
- tsx para executar Typescript em no Nodejs

## Requisitos funcioanais

- [ ] Deve ser possível criar um produto
- [ ] Deve ser possível editar um produto
- [ ] Deve ser possível excluir um produto
- [ ] Deve ser possível listar os produtos
- [ ] Deve ser possível criar um catálogo
- [ ] Deve ser possível editar um catálogo
- [ ] Deve ser possível excluir um catálogo
- [ ] Deve ser possível listar os catálogos
- [ ] Deve ser possível listar um catálogo com seus respectivos produtos

## Regras de negócio

- [ ] Um produto deve ser cadastrado em somente um catálogo
- [ ] Produtos devem ser separados por catálogos específicos

## Requisitos não funcionais

- [ ] Dados da aplicação devem ser armazenados em um banco MongoDB
- [ ] A autenticação devem ser feita via PayloadCMS
