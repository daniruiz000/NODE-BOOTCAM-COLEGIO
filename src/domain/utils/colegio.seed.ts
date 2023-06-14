import { colegioRelations } from "./colegioRelations";
import { mongoConnect, mongoDisconnect } from "../repositories/mongo-repository"; // Importamos el archivo de conexión a la BBDD
import { resetClassrooms } from "./resetClassrooms";
import { resetUsers } from "./resetUsers";

const seedFunction = async (): Promise<void> => {
  try {
    await mongoConnect()
    await resetUsers();
    await resetClassrooms();
    await colegioRelations()
  } catch (error) {
    console.error(error);
  } finally {
    await mongoDisconnect();
  }
};

void seedFunction();
