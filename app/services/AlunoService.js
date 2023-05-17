import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import AuthService from "./AuthService";

export const criarUsuario = async (idPersonal, email, senha) => {
    const userCredential = await AuthService.createUser(email, senha);
    const user = userCredential.user;
    await setDoc(doc(db, "personal", idPersonal), {
        uid: user.uid,
        email: user.email
    })
}