/* type Address = {
  street: string;
  number: number;
};

type User = {
  name?: string;
  age: number;
  address: Address;
};

const user: User = {
  age: 28,
  address: {
    street: "Rua Cuiaba",
    number: 780,
  },
};
// type e interface muitas vezes sao iguais -> nao se preocupar com isso por agora, 99% dos casos de usos -> tanto faz

// Extrai as propriedades de um objeto
type UserProperties = keyof User;

function pickProperty(user: User, property: UserProperties) {
  return user[property];
}

const usuario: User = {
  name: "Victor",
  age: 29,
  address: {
    street: "Rua Cuiaba",
    number: 780,
  },
};

const video = {
  title: "Usando TypeScript",
  duration: 180,
};

// Converte em um tipo do TS
type Video = keyof typeof video;

console.log(pickProperty(usuario, "age"));

// Utility Types / Generics
// funções que executamos no TS e recebem parametros

type PickPropertyReturnType = ReturnType<typeof pickProperty>;
// retorna os retornos possiveis dessa funcao

type UserWithoutAddress = Omit<User, "name" | "address">;

type UserNameAndAge = Pick<User, "name" | "age">;

type UserPartial = Partial<User>;

// ----------------------------------------------------------//

type DbConfig = {
  name: string;
  url: string;
};

// Forçar uma tipagem - geralmente nao é bom, nao da erro se apagar o que ta dentro
const conn1 = { name: "postgres", url: "postgres://user:password" } as DbConfig;

// nao permite que o TS faça inferencia, ele segue apenas a tipagem do type
const conn2: DbConfig = { name: "postgres", url: "postgres://user:password" };

// uniao de ambos, faz a tipagem e permite inferencia ->
const conn3 = {
  name: "postgres",
  url: "postgres://user:password",
} satisfies DbConfig;

 */
