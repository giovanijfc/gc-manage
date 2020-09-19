import { auth, firestore } from "firebase";

export const createOrUpdateStore = async (stores) => {
  const userId = auth().currentUser.uid;
  const storeDocRefById = firestore().collection("stores").doc(userId);

  await storeDocRefById.get().then(async (doc) => {
    if (doc.exists) {
      await storeDocRefById.update({
        stores: firestore.FieldValue.arrayUnion(...stores),
      });
    } else {
      await storeDocRefById.set({
        stores,
      });
    }
  });
};
