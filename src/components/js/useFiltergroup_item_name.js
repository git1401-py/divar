const useFiltergroup_item_name = (
  info,
  ODatas,
  orderData,
  name,
  minprice,
  maxprice,
  min_vadie_melk,
  max_vadie_melk,
  min_ejare_melk,
  max_ejare_melk,
  spaceFrom_melk,
  spaceTo_melk
) => {
  console.log("In filter js");
  if (name.value == "") {
    fnO(ODatas).then(() => {
      orderData.forEach((el) => {
        if (el.group_name == info.group_name) {
          ODatas.push(el);
        }
      });
    });
  } else {
    fnO(ODatas)
      .then(() => {
        orderData.forEach((el) => {
          if (
            el.group_name == info.group_name &&
            el.group_item_name == info.group_item_name
          ) {
            ODatas.push(el);
          }
        });
      })
      .then(() => {
        console.log("Price", minprice, "**", maxprice);

        if (Number(spaceFrom_melk)) {
          ODatas.forEach((el) => {
            if (Number(el.space) < Number(spaceFrom_melk)) {
              ODatas.splice(ODatas.indexOf(el), 1);
            }
          });
        }
        if (Number(spaceTo_melk)) {
          ODatas.forEach((el) => {
            if (Number(el.space) > Number(spaceTo_melk)) {
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

        if (info.group_name == "املاک") {
          if (info.group_item_name == "فروش مسکونی" || info.group_item_name == "فروش اداری و تجاری") {
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
            if (info.del_tavafoghi) {
              ODatas.forEach((el) => {
                if (el.tavafoghi == true) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
          }
          if (info.group_item_name == "اجاره مسکونی" || info.group_item_name == "اجاره اداری و تجاری") {
            if (min_vadie_melk) {
              ODatas.forEach((el) => {
                if (Number(el.vadie_melk) < min_vadie_melk) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (max_vadie_melk) {
              ODatas.forEach((el) => {
                if (Number(el.ejare_melk) > max_vadie_melk) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (min_ejare_melk) {
              ODatas.forEach((el) => {
                if (Number(el.ejare_melk) < min_ejare_melk) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (max_ejare_melk) {
              ODatas.forEach((el) => {
                if (Number(el.vadie_melk) > max_ejare_melk) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.tormajazi) {
              ODatas.forEach((el) => {
                if (el.tormajazi == false) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.anbar_melk) {
              ODatas.forEach((el) => {
                if (el.anbar_melk == false) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.just_single) {
              ODatas.forEach((el) => {
                if (el.just_single == false) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
          }
          if (info.group_item_name == "فروش اداری و تجاری") {
            
            if (info.sanad_edari) {
              ODatas.forEach((el) => {
                if (el.sanad_edari != info.sanad_edari) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
          }
          // if (info.group_item_name == "اجاره اداری و تجاری") {
          //   info.explation_ex = "";
          // }
          if (info.group_item_name == "اجاره کوتاه مدت") {
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
            if (info.room_melk) {
              ODatas.forEach((el) => {
                if (el.room_melk != info.room_melk) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.taeed_shode) {
              ODatas.forEach((el) => {
                if (el.taeed_shode == false) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
          }
          // if (info.group_item_name == "پروژه های ساخت و ساز") {
          //   info.explation_ex = "";
          // }
        }
        if (info.group_name == "وسایل نقلیه") {
          if (info.group_item_name == "خودرو") {
            if (info.minyearsofbuild_vehicle) {
              ODatas.forEach((el) => {
                if (Number(el.yearsofbuild_vehicle) < Number(info.minyearsofbuild_vehicle)) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.maxyearsofbuild_vehicle) {
              ODatas.forEach((el) => {
                if (Number(el.yearsofbuild_vehicle) > Number(info.maxyearsofbuild_vehicle)) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.minkarkard) {
              ODatas.forEach((el) => {
                if (Number(el.karkard) < Number(info.minkarkard)) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.maxkarkard) {
              ODatas.forEach((el) => {
                if (Number(el.karkard) > Number(info.maxkarkard)) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            
          }
          // if (info.group_item_name == "قطعات یدکی و لوازم جانبی خودرو") {
          //   info.explation_ex = "";
          // }
          if (info.group_item_name == "موتور سیکلت و لوازم جانبی") {
            if (info.minyearsofbuild_vehicle) {
              ODatas.forEach((el) => {
                if (Number(el.yearsofbuild_vehicle) < Number(info.minyearsofbuild_vehicle)) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.maxyearsofbuild_vehicle) {
              ODatas.forEach((el) => {
                if (Number(el.yearsofbuild_vehicle) > Number(info.maxyearsofbuild_vehicle)) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
            if (info.brande_motor) {
              ODatas.forEach((el) => {
                if (el.brande_motor != info.brande_motor) {
                  ODatas.splice(ODatas.indexOf(el), 1);
                }
              });
            }
          }
          // if (info.group_item_name == "قایق و لوازم جانبی") {
          //   info.explation_ex = "";
          // }
        }
        if (info.group_name == "لوازم الکتریکی") {
          if (info.group_item_name == "موبایل و تبلت") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "رایانه") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "کنسول، بازی ویدئویی و آنلاین") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "صوتی و تصویری") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "تلفن رومیزی") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "مربوط به خانه") {
          if (info.group_item_name == "وسایل و تزئینات خانه") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "وسایل آشپزخانه") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "ابزار") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "ساختمان و حیاط") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "خدمات") {
          if (info.group_item_name == "موتور و ماشین") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "پذیرایی/مراسم") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "خدمات رایانه ای و موبایل") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "مالی/ حسابداری/بیمه") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "حمل و نقل") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "پیشه و مهارت") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "آرایشگری و زیبایی") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "سرگرمی") {
            info.explation_ex = "";
          }

          if (info.group_item_name == "نظافت") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "باغبانی و درختکاری") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "آموزشی") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "وسایل شخصی") {
          if (info.group_item_name == "کیف،کفش و لباس") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "تزئینی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "آرایشی، بهداشتی و درمانی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "وسایل بچه و اسباب بازی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "لوازم التحریر") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "سرگرمی و فراعت") {
          if (info.group_item_name == "بلیط") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "تور و چارتر") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "کتاب و مجله") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "دوچرخه/اسکیت/اسکوتر") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "حیوانات") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "کلکسیون و سرگرمی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "آلات موسیقی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "ورزش و تناسب اندام") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "اسباب بازی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "متفرقه سرگرمی") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "اجتماعی") {
          if (info.group_item_name == "رویداد") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "داوطلبانه") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "گم شده ها") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "برای کسب و کار") {
          if (info.group_item_name == "تجهیزات و ماشین آلات") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "عمده فروشی") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "استخدام و کاریابی") {
          info.explation_ex = "";
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
export default useFiltergroup_item_name;
