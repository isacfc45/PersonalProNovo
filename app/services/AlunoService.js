import { db } from "../../firebase";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
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

// export const selecionarAluno = async (idPersonal, idAluno) => {
    
//     const querySnapshot = await getDoc(collection(db, "personal", idPersonal, "alunos", idAluno, "AvaTeste"));

//     return querySnapshot.data();
    
    
//     // const q = query(collection(db, "personal", idPersonal, "alunos"), where("alunos", "==", idAluno));

//     // const querySnapshot = await getDocs(q);
//     // querySnapshot.forEach((doc) => {
//     //     // doc.data() is never undefined for query doc snapshots
//     //     const result = doc.data();
//     //     return result;
//     // });
// }

export const buscarAvaliacoes = async (idPersonal, idAluno) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    return lista;
}


export const criarAvaliacao = async (idPersonal, idAluno, nome) => {
    const quantidade = await buscarAvaliacoes(idPersonal, idAluno);
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${quantidade.length}`), {
        nome: nome,
        data: new Date()
    })
}