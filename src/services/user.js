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

export const checkHaveDuplicationEmail = async (emailToVerify) => {
  const customersRef = firestore().collection("customers");
  const emailsAlreadyRegistered = await customersRef
    .where("email", "==", emailToVerify)
    .get()
    .then((querySnapshot) => {
      if (querySnapshot) {
        return querySnapshot.docs.map((doc) => doc.data());
      }
    });

  return emailsAlreadyRegistered;
};
