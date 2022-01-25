import { firestore, auth } from "../utils/firebase/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
} from "@firebase/firestore";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export function registerWithEmailAndPassword (email, password, router) {
 createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push('/posts')
    })
    .catch((error) => {
      console.log(error);
    });
    return null
};

export function loginWithEmailAndPassword(email, password, router) {
  signInWithEmailAndPassword(auth, email, password)
     .then(() => {
       router.push('/posts')
     })
     .catch((error) => {
       console.log(error);
     });
     return null
 };



export function googleAuthChange(router) {
  return signInWithPopup(auth, provider)
    .then(() => {
      router.push("/posts");
    })
    .catch((error) => {
      console.log(error);
    });
}

export const logout = () => {
  auth.signOut();
};

export const usersRef = collection(firestore, "users");

export function getUserDoc(uid) {
  return new Promise((resolve, reject) => {
    getDoc(doc(firestore, "users", uid))
      .then((doc) => resolve(doc.data()))
      .catch((_) => reject("Could not return user data"));
  });
}

export async function getMeetDoc(uid) {
  const meetQuery = query(
    collection(firestore, "meets"),
    where("uids", "array-contains", uid)
  );
  const snapshot = await getDocs(meetQuery);
  return snapshot.docs.map((doc) => doc.data());
}

export function writeUserDoc(uid, data) {
  const docRef = doc(firestore, "users", uid);
  return new Promise((resolve, reject) => {
    updateDoc(docRef, data)
      .then(() => resolve())
      .catch((_) => reject("Could not return user data"));
  });
}

export const updateUserDoc = (docName, data) => {
  updateDoc(doc(firestore, "users", docName), data);
};
