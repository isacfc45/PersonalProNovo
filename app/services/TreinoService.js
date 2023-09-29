import { db } from "../../firebase";
import { doc, setDoc, collection, getDocs, updateDoc, addDoc } from "firebase/firestore";


export const buscarTreinos = async (idPersonal, idAluno) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "treinos"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    return lista;
}


export const criarTreino = async (idPersonal, idAluno, treino) => {
    const quantidade = await buscarTreinos(idPersonal, idAluno);
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "treinos", `${quantidade.length}`), {
        uid: quantidade.length,
        nome: treino.nome,
        data: new Date()
    })
    await addDoc(collection(db, "personal", idPersonal, "alunos", idAluno, "treinos", `${quantidade.length}`, "treinoEspecifico"), {
        tipo: treino.tipo,
        observacoes: treino.observacoes
    })
}

export const criarTreinoEspecifico = async (idPersonal, idAluno, idTreino) => {
    await addDoc(collection(db, "personal", idPersonal, "alunos", idAluno, "treinos", `${idTreino}`, "treinoEspecifico", idTreinoEspecifico), {
        tipo: treino.tipo,
        observacoes: treino.observacoes
    })
}

// export const adicionarTreinoEspecifico = async(idPersonal, idAluno, idTreino, idTreinoEspecifico, treino) => {
//     await addDoc(collection(db, "personal", idPersonal, "alunos", idAluno, "treinos", `${idTreino}`, "treinoEspecifico", idTreinoEspecifico, treino.nome), {

//     })
// }

export const buscarTreino = async (idPersonal, idAluno, idTreino) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "treinos"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    lista = lista[idTreino];
    return lista;
}

export const buscarTreinoEspecifico = async (idPersonal, idAluno, idTreino, treinoEspecifico) => {

    // const citiesRef = collection(db, "personal", idPersonal, "alunos", idAluno, "treinos");

    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "treinos", idTreino, treinoEspecifico));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    lista = lista[idTreino];
    return lista;
}