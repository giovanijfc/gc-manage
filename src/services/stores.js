import { auth, firestore } from "firebase";

export const createOrUpdateStore = async (store) => {
  const userId = auth().currentUser.uid;
  const storeDocRefById = firestore().collection("stores").doc(userId);

  await storeDocRefById.get().then(async (doc) => {
    if (doc.exists) {
      await storeDocRefById.update({
        store: firestore.FieldValue.arrayUnion(...store),
      });
    } else {
      await storeDocRefById.set({
        store: store,
      });
    }
  });
};
