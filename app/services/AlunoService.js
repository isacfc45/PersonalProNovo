import { db } from "../../firebase";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import AuthService from "./AuthService";

export const criarUsuario = async (idPersonal, email, senha) => {
    const userCredential = await AuthService.createUser(email, senha);
    const user = userCredential.user;
    await setDoc(doc(db, "personal", idPersonal, "alunos", user.uid), {
        uid: user.uid,
        email: user.email
    })
}

export const buscarAlunos = async (idPersonal) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    return lista;
}