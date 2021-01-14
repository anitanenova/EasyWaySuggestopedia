const parceSnapshotToArr = (snapshot) => {
  let result: any[] = [];

  if (snapshot.empty) {
    return result;
  }
  snapshot.forEach((doc) => {
    let data = doc.data();
    let readyObject = { id: doc.id, ...data };
    result.push(readyObject);
  });

  return result;
};

export default parceSnapshotToArr;
