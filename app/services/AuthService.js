import {app} from "../../firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

export default {
    auth(email, senha) {
        return signInWithEmailAndPassword(auth, email, senha);
    },
    logout() {
        return auth.signOut();
    },
    createUser(email, senha) {
        return createUserWithEmailAndPassword(auth, email, senha);
    },
};
