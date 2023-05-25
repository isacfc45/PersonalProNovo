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


export const criarAvaliacao = async (idPersonal, idAluno, avaliacao) => {
    const quantidade = await buscarAvaliacoes(idPersonal, idAluno);
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${quantidade.length}`), {
        uid: quantidade.length,
        nome: avaliacao.nome,
        data: new Date()
    })
}

export const criarAnamnese = async (idPersonal, idAluno, idAvaliacao, anamnese) => {
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`, "anamnese", `${idAvaliacao}`), {
        objetivo: anamnese.objetivo,
        restricoes: anamnese.restricoes,
        medicamentos: anamnese.medicamentos,
        dores: anamnese.dores,
        observacoes: anamnese.observacoes
    })
}

export const criarAntropometria = async (idPersonal, idAluno, idAvaliacao, antropometria) => {
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`, "antropometria", `${idAvaliacao}`), {
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
    })
}

export const criarDobras = async (idPersonal, idAluno, idAvaliacao, dobras) => {
    await setDoc(doc(db, "personal", idPersonal, "alunos", idAluno, "avaliacoes", `${idAvaliacao}`, "dobras", `${idAvaliacao}`), {
        tricipital: parseFloat(dobras.tricipital),
        bicipital: parseFloat(dobras.bicipital),
        peitoral: parseFloat(dobras.peitoral),
        subescapular: parseFloat(dobras.subescapular),
        axilarMedia: parseFloat(dobras.axilarMedia),
        suprailiaca: parseFloat(dobras.suprailiaca),
        abdominal: parseFloat(dobras.abdominal),
        coxa: parseFloat(dobras.coxa),
        panturrilha: parseFloat(dobras.panturrilha),
    })
}