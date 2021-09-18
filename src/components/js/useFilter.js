const useFilter = (info, ODatas, orderData, name) => {
  console.log("In filter js");
  if (name.value == "") {
    fnO(ODatas).then(() => {
      orderData.forEach((el) => {
        ODatas.push(el);
      });
    });
  } else {
    fnO(ODatas).then(() => {
      orderData.forEach((el) => {
        if (el.group_name == info.group_name) {
          ODatas.push(el);
        }
      });
    });
  }
}

function fnO(ODatas) {
  return new Promise((resolve) => {
    setTimeout(() => {
      ODatas.splice(0);
      resolve();
    }, 4000);
  });
}
export default  useFilter;