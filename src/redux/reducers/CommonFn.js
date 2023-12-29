export const addItemInRecord = (oldRecord, newRecord) => {
  if (oldRecord) {
    let data = oldRecord;
    data.tableData = [newRecord, ...data.tableData];
    
    return data;
  } else {
    return [newRecord];
  }
};

export const recordAfterUpdate = (oldData, newData) => {
  if (oldData) {
    let data = oldData;
    let newArray = [];
    data.tableData.map((Item) => {
      if (Item._id === newData._id) {
        newArray.push(newData);
      } else {
        newArray.push(Item);
      }
      return Item;
    });
    data.tableData = newArray;
    return data;
  }
};
export const recordAfterDeleted = (oldData, newData) => {
  if (oldData) {
    let data = oldData;
    let newArray = [];
    data.tableData.map((Item) => {
      if (Item._id !== newData._id) {
        newArray.push(Item);
      }
      return Item;
    });
    console.log(newArray);
    data.tableData = newArray;

    return data;
  }
};
export const updateProfile = (oldData, newData) => {
  oldData.firstName = newData.firstName;
  oldData.lastName = newData.lastName;
  oldData.profileImageUrl = newData.profileImageUrl;
  oldData.phoneNumber = newData.phoneNumber;

  return oldData;
};
