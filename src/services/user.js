import { auth, firestore } from "firebase";

export const getUserLogged = async () => {
  const { uid, email } = auth().currentUser;
  const userLoggedData = await firestore()
    .collection("customers")
    .doc(uid)
    .get()
    .then((register) => register.data());

  return { ...userLoggedData, email };
};
