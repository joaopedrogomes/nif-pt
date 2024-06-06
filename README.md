# @joaopedrogomes/nif-pt

Validate and get more information from portuguese tax ID numbers

## Understanding the NIF concept

The Portuguese tax system is really complex, so let's check some concepts first:

### What is a NIF?

NIF stands for _Número de Identificação Fiscal_, which translates to Tax ID Number.

### Who can get a NIF?

The **NIF is a unique ID** and can be attributed to individuals or to collective persons like companies, societies, etc., that **need to pay taxes in Portugal**. The number can be attributed to non-resident foreigners as well.

### Types of NIF: NIF and NIPC

There are two types of NIF, and the first two digits of the number define it:

- **Between 10 and 49**: NIF - individuals
- **Betweeen 50 and 99**: NIPC - collective

So, while colloquially the term NIF applies to all tax IDs, legally, the collective tax IDs are referred to as NIPC. The acronym NIPC stands for _Número de Identificação de Pessoa Colectiva_, which translates to Collective Person ID Number.


## Installation

```bash
npm install --save-dev @joaopedrogomes/nif-pt
```

## Usage

You can get all the information in an object with the NIF function (_nif_). However, if you only want to get one of the keys of the object, you can also call the desired function directly: _categorize_, _designate_, or _validate_.

### NIF - nif(value: string)

#### Usage

```js
import { nif } from '@joaopedrogomes/nif-pt';

const data = nif('123456789');
```

#### Return

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

### Category only - categorize(value: string)

#### Usage

```js
import { categorize } from '@joaopedrogomes/nif-pt';

const data = nif('123456789');
```

#### Return

```js
string
```

### Designation only - designate(value: string)

#### Usage

```js
import { designate } from '@joaopedrogomes/nif-pt';

const data = nif('123456789');
```

#### Return

```js
string
```

### Valid only - validate(value: string)

#### Usage

```js
import { validate } from '@joaopedrogomes/nif-pt';

const data = nif('123456789');
```

#### Return

```js
boolean
```


## Credits

- [João Pedro Gomes](https://joaopedrogomes.dev)

## License

[MIT](./license)