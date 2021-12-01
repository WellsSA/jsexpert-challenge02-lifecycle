# Story: Entendendo conceitos fundamentais do ciclo de vida do Javascript

A idéia é implementar códigos pensando no comportamento do Javascript com base no `JS Expect - Módulo 03`, que trata de `Conceitos fundamentais sobre o ciclo de vida do Javascript`. 

Baseando-se nos testes automatizados já criados neste repo - similares aos feitos no [Desafio Anterior](https://github.com/training-erickwendel/jsexpert-exercicio01-pokeapi) -, implemente o código em cada uma das services existentes.

## Funcionalidades

### Requisitos
1. Implemente os métodos marcados com um `//@TODO: comment`  em cada uma das respectivas services,
na ordem que preferir:

* [ ] _services/StatementsService_
* [ ] _services/WeirdMathService_
* [ ] _services/ReferencesService_
* [ ] _services/ObjectMethodsService_

> Nota: Para saber quais os comportamentos esperados de cada método, verifique os testes unitários de cada service.

2. Remova os `//@TODO: comments` de cada função implementada, e garanta que os testes referentes à essa função estejam funcionando.

> Nota: Não são necessárias alterações nos testes. Eles já estão prontos e servem de guia durante a execução do desafio

### Testes

Você saberá que o desafio está concluído quando executar o comando `npm run test` e todos os testes passarem. O resultado deve ser algo parecido com isso:

![image](https://user-images.githubusercontent.com/41883467/144168298-cd15a97d-0c04-49e0-94cd-aadfabd2554b.png)

### Extras

* [ ] Desafio opcional: Note que no arquivo `test/unit/service/ReferencesService.test`, existe um teste na linha 44 com um `it.skip()`. Esse é um desafio opcional, e caso queira implementá-lo é só remover o `.skip` e implementar a respectiva função que está sendo testada na ReferencesService

## Dicas

Sinta-se livre pra desenvolver sua solução da melhor maneira possível, e caso já queira uma dica sobre como organizar as idéias, aqui vai:

- Lembre que cada `@TODO: comment` tem uma dica sobre como resolver o problema
- Fique atento ao comportamento esperado do método nos testes
- Não esqueça de conferir as aulas do curso denovo para fixar mais ainda os conhecimentos

### Arquitetura e onde trabalhar

```
project
│   README.md
│   package.json
│
└───src
│   │  
│   └───service
│       │   ObjectMethodsService.js     // EDIT HERE !
│       │   ReferencesService.js        // EDIT HERE !
│       │   StatementsService.js        // EDIT HERE !
│       │   WeirdMathService.js         // EDIT HERE !
│   
└───test
│   │  
│   └───unit/service
│       │   ObjectMethodsService.js     // DO *NOT* EDIT HERE !
│       │   ReferencesService.js        // DO *NOT* EDIT HERE !
│       │   StatementsService.js        // DO *NOT* EDIT HERE !
│       │   WeirdMathService.js         // DO *NOT* EDIT HERE !
│         
```

### Checklist features

- ObjectMethodsService
  * [ ] Deve entender Coerção de tipos e Objects Lifecycle e implementar soluções usando `valueOf`, `toString` e `[Symbol.toPrimitive]`.

- ReferencesService
  * [ ] Deve entender tipos de referência e Mutability vs Immutability, e implementar soluções copiando ou não referências de objetos.

- StatementsService
  * [ ] Deve entender o uso de conditional statements no Javascript e seus respectivos retornos em diferentes cenários.

- WeirdMathService
  * [ ] Deve entender o fluxo de vida do Javascript e as coerções implícitas que ocorrem em expressões matemáticas.

## Submissão

1. Crie um fork deste repositório e modifique o README.md inserindo o seu nome no início do arquivo.

2. Instale as dependências usando `npm i` e garanta que os testes rodam normalmente com `npm run dev`

> Nota: Como a idéia é que você implemente os códigos a fim de fazer os testes passarem, a princípio todos os testes estarão quebrando, então não se assuste. :) 

3. Implemente cada uma das funções marcadas com um `//@TODO: comment` (e não se esqueça de remover esses comentários uma vez que concluir a implementação)

4. Garanta que todos os testes estejam rodando e, caso queira, conclua o desafio opcional mencionado acima. 

5. Envie o link no canal `#desafios-jsexpert` da nossa comunidade no discord.

## Até quando?

Se você está pegando esse desafio na estréia, corre lá e envia pra gente até *Quarta-feira, 15 de dezembro de 2021 (15/12/2021)*!
