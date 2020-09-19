export const createEmployees = async (
  emails,
  temporallyPassword,
  secondaryApp,
  userIdAdm
) => {
  const customersRef = secondaryApp.firestore().collection("customers");

  await Promise.all(
    emails.map(async (email) => {
      if (email) {
        const successResponse = await secondaryApp
          .auth()
          .createUserWithEmailAndPassword(email, temporallyPassword);

        const userUid = successResponse.user.uid;

        await customersRef.doc(userUid).set({
          id: userUid,
          email: email,
          name: email,
          firstAccess: true,
          role: "employee",
          idEnterprise: userIdAdm,
        });
      }
    })
  );
};
