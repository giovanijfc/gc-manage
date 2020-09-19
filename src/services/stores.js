import { auth, firestore } from "firebase";

import ROLE from "constants/roles";

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

export const getAllStoresFromUser = async (user) => {
  const storesRef = firestore().collection("stores");

  switch (user.role) {
    case ROLE.ADM:
      const storesAdm = (await storesRef.doc(user.id).get()).data().stores;

      return storesAdm;
    case ROLE.EMPLOYEE:
      const storesEmployee = (
        await storesRef.doc(user.idEnterprise).get()
      ).data();

      return storesEmployee.stores.filter((store) =>
        store.employeesEmails.includes(user.email)
      );
    default:
      return [];
  }
};
