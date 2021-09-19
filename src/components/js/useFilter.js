const useFilter = (info, ODatas, orderData, name,minprice,maxprice) => {
  console.log("In filter js");
  if (name.value == "") {
    fnO(ODatas).then(() => {
      orderData.forEach((el) => {
        ODatas.push(el);
      });
    });
  } else {
    fnO(ODatas)
      .then(() => {
        orderData.forEach((el) => {
          if (el.group_name == info.group_name) {
            ODatas.push(el);
          }
        });
      })
      .then(() => {
        if (info.just_img) {
          for (let i = 0; i < ODatas.length; i++) {
            if (ODatas[i].img_urls == []) {
              ODatas.splice(i, 1);
            }
          }
        }
        if (info.just_imediate) {
          for (let i = 0; i < ODatas.length; i++) {
            if (ODatas[i].just_imediate == false) {
              ODatas.splice(i, 1);
            }
          }
        }

        // if (info.group_name == "املاک") {
        //   info.explation_ex = "";
        // }
        if (info.group_name == "وسایل نقلیه") {
          if (minprice) {
            ODatas.forEach((el) => {
              if (Number(el.price) < minprice) {
                ODatas.splice(ODatas.indexOf(el), 1);
              }
            });
          }
          if (maxprice) {
            ODatas.forEach((el) => {
              if (Number(el.price) > maxprice) {
                ODatas.splice(ODatas.indexOf(el), 1);
              }
            });
          }
          if (info.adviser) {
            ODatas.forEach((el) => {
              if (el.adviser != info.adviser) {
                ODatas.splice(ODatas.indexOf(el), 1);
              }
            });
          }
          if (info.del_tavafoghi) {
            ODatas.forEach((el) => {
              if (el.tavafoghi == true) {
                ODatas.splice(ODatas.indexOf(el), 1);
              }
            });
          }
          if (info.type_adv) {
            ODatas.forEach((el) => {
              if (el.type_adv != info.type_adv) {
                ODatas.splice(ODatas.indexOf(el), 1);
              }
            });
          }
          if (info.moaveze) {
            ODatas.forEach((el) => {
              if (el.moaveze != info.moaveze) {
                ODatas.splice(ODatas.indexOf(el), 1);
              }
            });
          }
        }
        if (info.group_name == "لوازم الکتریکی") {
          info.explation_ex = "";
        }
        if (info.group_name == "مربوط به خانه") {
          info.explation_ex = "";
        }
        if (info.group_name == "خدمات") {
          info.explation_ex = "";
        }
        if (info.group_name == "وسایل شخصی") {
          info.explation_ex = "";
        }
        if (info.group_name == "سرگرمی و فراعت") {
          info.explation_ex = "";
        }
        if (info.group_name == "اجتماعی") {
          info.explation_ex = "";
        }
        if (info.group_name == "برای کسب و کار") {
          info.explation_ex = "";
        }
        if (info.group_name == "استخدام و کاریابی") {
          if (info.typeHamkari) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].typeHamkari != info.typeHamkari) {
                ODatas.splice(i, 1);
              }
            }
          }

          if (info.dorkari) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].dorkari != info.dorkari) {
                ODatas.splice(i, 1);
              }
            }
          }

          if (info.typePardakht) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].typePardakht != info.typePardakht) {
                ODatas.splice(i, 1);
              }
            }
          }

          if (info.timekar) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].timekar != info.timekar) {
                ODatas.splice(i, 1);
              }
            }
          }

          if (info.bime) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].bime != info.bime) {
                ODatas.splice(i, 1);
              }
            }
          }

          if (info.sabeghe) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].sabeghe != info.sabeghe) {
                ODatas.splice(i, 1);
              }
            }
          }

          if (info.sarbazi) {
            for (let i = 0; i < ODatas.length; i++) {
              if (ODatas[i].sarbazi != info.sarbazi) {
                ODatas.splice(i, 1);
              }
            }
          }
        }
      });
  }
};

function fnO(ODatas) {
  return new Promise((resolve) => {
    setTimeout(() => {
      ODatas.splice(0);
      resolve();
    }, 4000);
  });
}
export default useFilter;
