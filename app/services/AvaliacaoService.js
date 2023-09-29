import { db } from "../../firebase";
import { doc, setDoc, collection, getDocs, updateDoc } from "firebase/firestore";


export const buscarAvaliacoes = async (idPersonal, idAluno) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    return lista;
}


export const criarAvaliacao = async (idPersonal, idAluno, avaliacao) => {
    const quantidade = await buscarAvaliacoes(idPersonal, idAluno);
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${quantidade.length}`), {
        uid: quantidade.length,
        nome: avaliacao.nome,
        data: new Date()
    })
}

export const criarAnamnese = async (idPersonal, idAluno, idAvaliacao, anamnese) => {
    await updateDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`), {
        anamnese: {
            objetivo: anamnese.objetivo,
            restricoes: anamnese.restricoes,
            medicamentos: anamnese.medicamentos,
            dores: anamnese.dores,
            observacoes: anamnese.observacoes
        }
    })
}

export const criarAntropometria = async (idPersonal, idAluno, idAvaliacao, antropometria) => {
    await updateDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`), {
        antropometria: {
            peso: parseFloat(antropometria.peso),
            estatura: parseFloat(antropometria.estatura),
            pescoco: parseFloat(antropometria.pescoco),
            ombro: parseFloat(antropometria.ombro),
            torax: parseFloat(antropometria.torax),
            cintura: parseFloat(antropometria.cintura),
            abdomen: parseFloat(antropometria.abdomen),
            quadril: parseFloat(antropometria.quadril),
            bracoD: parseFloat(antropometria.bracoD),
            bracoE: parseFloat(antropometria.bracoE),
            antebracoD: parseFloat(antropometria.antebracoD),
            antebracoE: parseFloat(antropometria.antebracoE),
            coxaD: parseFloat(antropometria.coxaD),
            coxaE: parseFloat(antropometria.coxaE),
            panturrilhaD: parseFloat(antropometria.panturrilhaD),
            panturrilhaE: parseFloat(antropometria.panturrilhaE)
        }
    })
}

export const criarDobras = async (idPersonal, idAluno, idAvaliacao, dobras) => {
    await updateDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`), {
        dobras: {
            tricipital: parseFloat(dobras.tricipital),
            bicipital: parseFloat(dobras.bicipital),
            peitoral: parseFloat(dobras.peitoral),
            subescapular: parseFloat(dobras.subescapular),
            axilarMedia: parseFloat(dobras.axilarMedia),
            suprailiaca: parseFloat(dobras.suprailiaca),
            abdominal: parseFloat(dobras.abdominal),
            coxa: parseFloat(dobras.coxa),
            panturrilha: parseFloat(dobras.panturrilha),
            idade: parseFloat(dobras.idade),
        }
    })
}

export const buscarAvaliacao = async (idPersonal, idAluno, idAvaliacao) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    lista = lista[idAvaliacao];
    return lista;
}

export const buscarDobrasUid = async (idPersonal, idAluno, idAvaliacao) => {
    const querySnapshot = await getDocs(collection(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`, "dobras"));
    lista = [];
    querySnapshot.forEach((doc) => {
        lista.push(doc.data());
    })
    return lista;
}