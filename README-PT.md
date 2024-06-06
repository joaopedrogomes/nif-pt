# @joaopedrogomes/nif-portugal

Validar e obter mais informações dos números de identificação fiscal portugueses

## Compreendendo o conceito de NIF

### O que é um NIF?
O acrónimo NIF significa **Número de Identificação Fiscal**. Este número também é chamada de Número de Contribuinte.

### Quem pode obter um NIF?
O **NIF é um número único** e pode ser atribuído a quem **necessite de pagar impostos em Portugal**, quer sejam pessoas individuais, quer sejam pessoas coletivas (como empresas, sociedades, etc.). Este número também pode ser atribuído a estrangeiros não residentes.

### Tipos de NIF / Pessoa fiscal: NIF e NIPC
Existem dois tipos de NIF, sendo que os dois primeiros dígitos do número definem isso:

- **Entre 10 e 49**: NIF - Persona singular
- **Entre 50 e 99**: NIPC - Pessoa Colectiva

Coloquialmente, a denominação NIF aplica-se a todos os números de identificação fiscal. Contudo, legalmente, os números de identificação fiscal coletivos são chamados de NIPC - Número de Identificação de Pessoa Coletiva.

## Installation

```bash
npm install --save-dev @joaopedrogomes/nif-portugal
```

## Utilização

Podes obter todas as informações em um objeto com a função NIF (nif). No entanto, se desejares obter apenas uma das keys do objeto, podes chamar a função desejada diretamente: _categorize_, _designate_ or _validate_.

### NIF - nif(value: string)

#### Utilização

```js
import { nif } from '@joaopedrogomes/nif-portugal';

const data = nif('123456789');
```

#### Resposta

```js
{
    category: string,
    designation: string,
    valid: boolean
}
```

| Category : string | Designation  : string| Valid : boolean |
|---|---|---|
| pessoa singular | NIF | true |
| pessoa colectiva | NIPC | false |
| administração pública | | |
| pessoa singular não residente | | |
| herança indivisa | | |
| pessoa colectiva não residente | | |
| fundos de investimento | | |
| atribuição oficiosa | | |
| regime excepcional | | |
| condominios e sociedades irregulares | | |
| não residentes | | |
| sociedades civis | | |

### Category - categorize(value: string)

#### Utilização

```js
import { categorize } from '@joaopedrogomes/nif-portugal';

const data = nif('123456789');
```

#### Resposta

```js
string
```

### Designation - designate(value: string)

#### Utilização

```js
import { designate } from '@joaopedrogomes/nif-portugal';

const data = nif('123456789');
```

#### Resposta

```js
string
```

### Valid - validate(value: string)

#### Utilização

```js
import { validate } from '@joaopedrogomes/nif-portugal';

const data = nif('123456789');
```

#### Resposta

```js
boolean
```


## Créditos

- [João Pedro Gomes](https://joaopedrogomes.dev)

## Licença

[MIT](./license)