import { auth, firestore } from "firebase";

export const createEmployees = async (emails, temporallyPassword) => {
  await Promise.all(
    emails.map(async (email) => {
      if (email) {
        const successResponse = await auth().createUserWithEmailAndPassword(
          email,
          temporallyPassword
        );

        const userUid = successResponse.user.uid;

        await firestore().collection("customers").doc(userUid).set({
          id: userUid,
          name: email,
          firstAccess: true,
          role: "employee",
        });
      }
    })
  );
};
