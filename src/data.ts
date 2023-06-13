import { IUserCreate, ROL } from "../src/domain/entities/user-entity";

export const userList: IUserCreate[] = [
  { firstName: "Antonio", lastName: "Perez", email: "antonio@gmail.com", password: "12345678", children: [], rol: ROL.STUDENT },
  { firstName: "Lara ", lastName: "Alcaráz", email: "lara@gmail.com", password: "87654321", children: [], rol: ROL.STUDENT },
  { firstName: "Leon ", lastName: "López", email: "leon@gmail.com", password: "00000000", children: [], rol: ROL.STUDENT },
  { firstName: "Virginia ", lastName: "Alonso", email: "virg@gmail.com", password: "11111111", children: [], rol: ROL.STUDENT },
  { firstName: "Ernesto ", lastName: "Sevilla", email: "ernesto@gmail.com", password: "22222222", children: [], rol: ROL.PARENT },
  { firstName: "Ana ", lastName: "Obregón", email: "ana@gmail.com", password: "33333333", children: [], rol: ROL.PARENT },
  { firstName: "Francisco ", lastName: "Bueno", email: "frank@gmail.com", password: "44444444", children: [], rol: ROL.TEACHER },
  { firstName: "Toni ", lastName: "Moreno", email: "toni@gmail.com", password: "55555555", children: [], rol: ROL.TEACHER },
  { firstName: "Antonio", lastName: "Alcaráz", email: "admin@gmail.com", password: "55555555", children: [], rol: ROL.ADMIN },
];
