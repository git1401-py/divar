const useFiltergroup_item_name = (info, ODatas, orderData, name) => {
  console.log("In filter js");
  if (name.value == "") {
    fnO(ODatas).then(() => {
      orderData.forEach((el) => {
        if (
          el.group_name == info.group_name &&
          el.group_item_name == info.group_item_name
        ) {
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
            el.group_item_name == info.group_item_name &&
            el.group_subitem_name == info.group_subitem_name
          ) {
            ODatas.push(el);
          }
        });
      })
      .then(() => {


        
        if (info.group_name == "املاک") {
          if (info.group_item_name == "فروش مسکونی") {
            if (info.group_subitem_name == "آپارتمان" || info.group_subitem_name == "خانه و ویلا") {
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              
              if (Number(info.minroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) < Number(info.minroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (Number(info.maxroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) > Number(info.maxroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.lift_melk) {
                ODatas.forEach((el) => {
                  if (el.lift_melk == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.parking_melk) {
                ODatas.forEach((el) => {
                  if (el.parking_melk == false) {
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
             }
            if (info.group_subitem_name == "خانه و ویلا") {
              if (info.balkon_melk) {
                ODatas.forEach((el) => {
                  if (el.balkon_melk == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
             }
            // if (info.group_subitem_name == "زمین کلنگی") { }
            // if (info.group_subitem_name == "متفرقه فروش مسکونی") { }
          }
          if (info.group_item_name == "اجاره مسکونی") {
            if (info.group_subitem_name == "آپارتمان") {
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              
              if (Number(info.minroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) < Number(info.minroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (Number(info.maxroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) > Number(info.maxroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.lift_melk) {
                ODatas.forEach((el) => {
                  if (el.lift_melk == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.parking_melk) {
                ODatas.forEach((el) => {
                  if (el.parking_melk == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
             }
            if (info.group_subitem_name == "خانه و ویلا") { 
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              
              if (Number(info.minroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) < Number(info.minroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (Number(info.maxroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) > Number(info.maxroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
            }
            // if (info.group_subitem_name == "متفرقه اجاره مسکونی") { }
          }
          if (info.group_item_name == "فروش اداری و تجاری") {
            if (info.group_subitem_name == "دفتر کار،اتاق اداری و مطب") { 
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              
              if (Number(info.minroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) < Number(info.minroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (Number(info.maxroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) > Number(info.maxroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.lift_melk) {
                ODatas.forEach((el) => {
                  if (el.lift_melk == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.parking_melk) {
                ODatas.forEach((el) => {
                  if (el.parking_melk == false) {
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
            }
            if (info.group_subitem_name == "مغازه و غرفه") {
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
             }
            if (info.group_subitem_name == "صنعتی، کشاورزی و تجاری") { 
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
            }
            // if (info.group_subitem_name == "متفرقه  فروش اداری و تجاری") { }
          }
          if (info.group_item_name == "اجاره اداری و تجاری") {
            if (info.group_subitem_name == "دفتر کار،اتاق اداری و مطب") { 
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              
              if (Number(info.minroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) < Number(info.minroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (Number(info.maxroof_melk)) {
                ODatas.forEach((el) => {
                  if (Number(el.roof_melk) > Number(info.maxroof_melk)) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.lift_melk) {
                ODatas.forEach((el) => {
                  if (el.lift_melk == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.parking_melk) {
                ODatas.forEach((el) => {
                  if (el.parking_melk == false) {
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
            }
            if (info.group_subitem_name == "مغازه و غرفه") {
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
             }
            if (info.group_subitem_name == "صنعتی، کشاورزی و تجاری") {
              if (info.room_melk) {
                ODatas.forEach((el) => {
                  if (el.room_melk != info.room_melk) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.yearsofbuild) {
                ODatas.forEach((el) => {
                  if (el.yearsofbuild != info.yearsofbuild) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
             }
            // if (info.group_subitem_name == "متفرقه اجاره اداری و تجاری") { }
          }
          if (info.group_item_name == "اجاره کوتاه مدت") {
            // if (info.group_subitem_name == "آپارتمان و سوئیت") {}
            // if (info.group_subitem_name == "ویلا و باغ") {}
            // if (info.group_subitem_name == "دفتر کار و فضای آموزشی") {}
            // if (info.group_subitem_name == "متفرقه اجاره کوتاه مدت") {}
            
          }
          if (info.group_item_name == "پروژه های ساخت و ساز") {
            // if (info.group_subitem_name == "مشارکت در ساخت") {}
            // if (info.group_subitem_name == "پیش فروش") {}
            // if (info.group_subitem_name == "متفرقه  پروژه های ساخت و ساز") {}
            
          }
        }
        if (info.group_name == "وسایل نقلیه") {
          if (info.group_item_name == "خودرو") {
            if (info.group_subitem_name == "سواری") { 
              if (info.brande_savari) {
                ODatas.forEach((el) => {
                  if (el.brande_savari != info.brande_savari) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
              if (info.with_zemanat) {
                ODatas.forEach((el) => {
                  if (el.with_zemanat == false) {
                    ODatas.splice(ODatas.indexOf(el), 1);
                  }
                });
              }
            }
            // if (info.group_subitem_name == "کلاسیک") {}
            // if (info.group_subitem_name == "اجاره ای") {}
            // if (info.group_subitem_name == "سنگین") {}
            // if (info.group_subitem_name == "متفرقه خودرو") {}
          }
          // if (info.group_item_name == "قطعات یدکی و لوازم جانبی خودرو") {
          //   info.explation_ex = "";
          // }
          // if (info.group_item_name == "موتور سیکلت و لوازم جانبی") {
          //   info.explation_ex = "";
          // }
          // if (info.group_item_name == "قایق و لوازم جانبی") {
          //   info.explation_ex = "";
          // }
        }
        if (info.group_name == "لوازم الکتریکی") {
          if (info.group_item_name == "موبایل و تبلت") {
            // if (info.group_subitem_name == "موبایل") {}
            // if (info.group_subitem_name == "تبلت") {}
            // if (info.group_subitem_name == "لوازم جانبی موبایل و تبلت") {}
            // if (info.group_subitem_name == "سیم‌کارت") {}
            // if (info.group_subitem_name == "متفرقه موبایل و تبلت") {}
          }
          if (info.group_item_name == "رایانه") {
            // if (info.group_subitem_name == "رایانه همراه") {}
            // if (info.group_subitem_name == "رایانه رومیزی") {}
            // if (info.group_subitem_name == "قطعات و لوازم جانبی") {}
            // if (info.group_subitem_name == "لوازم و تجهیزات شبکه") {}
            // if (info.group_subitem_name == "پرینتر/اسکنر/کپی/فکس") {}
            // if (info.group_subitem_name == "متفرقه رایانه") {}
          }
          if (info.group_item_name == "کنسول، بازی ویدئویی و آنلاین") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "صوتی و تصویری") {
            // if (info.group_subitem_name == "فیلم و موسیقی") {
            // }
            // if (info.group_subitem_name == "دوربین عکاسی و فیلم‌برداری") {
            // }
            // if (info.group_subitem_name == "پخش‌کننده همراه") {
            // }
            // if (info.group_subitem_name == "سیستم صوتی خانگی") {
            // }
            // if (info.group_subitem_name == "ویدئو و پخش کننده DVD") {
            // }
            // if (info.group_subitem_name == "تلویزیون و پروژکتور") {
            // }
            // if (info.group_subitem_name == "دوربین مداربسته") {
            // }
            // if (info.group_subitem_name == "متفرقه صوتی و تصویری") {
            // }
          }
          if (info.group_item_name == "تلفن رومیزی") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "مربوط به خانه") {
          if (info.group_item_name == "وسایل و تزئینات خانه") {
            // if (info.group_subitem_name == "تزئینی و آقار هنری") {}
            // if (info.group_subitem_name == "لوازم روشنایی") {}
            // if (info.group_subitem_name == "میز و صندلی") {}
            // if (info.group_subitem_name == "فرش و گلیم") {}
            // if (info.group_subitem_name == "کمد و بوفه") {}
            // if (info.group_subitem_name == "پرده و رومیزی") {}
            // if (info.group_subitem_name == "تخت و اتاق خواب") {}
            // if (info.group_subitem_name == "مبلمان و صندلی راحتی") {}
            // if (info.group_subitem_name == "میز تلویزیون و وسایل سیستم پخش") {}
            // if (info.group_subitem_name == "متفرقه وسایل و تزئینات خانه") {}
          }
          if (info.group_item_name == "وسایل آشپزخانه") {
            // if (info.group_subitem_name == "ماشین ظرفشویی") {
            // }
            // if (info.group_subitem_name == "یخچال و فریزر") {
            // }
            // if (info.group_subitem_name == "وسایل آشپزی و غذاخوری") {
            // }
            // if (info.group_subitem_name == "مایکروویو و گاز") {
            // }
            // if (info.group_subitem_name == "ماشین لباسشویی و خشک کننده") {
            // }
            // if (info.group_subitem_name == "متفرقه وسایل آشپزخانه") {
            // }
          }
          if (info.group_item_name == "ابزار") {
            // if (info.group_subitem_name == "نظافت و خیاطی و اتو") {
            // }
            // if (info.group_subitem_name == "تعمیرات") {
            // }
            // if (info.group_subitem_name == "متفرقه ابزار") {
            // }
          }
          if (info.group_item_name == "ساختمان و حیاط") {
            // if (info.group_subitem_name == "سرویس بهداشتی و سونا") {
            // }
            // if (info.group_subitem_name == "سیستم گرمایشی سرمایشی و گاز") {
            // }
            // if (info.group_subitem_name == "آشپزخانه") {
            // }
            // if (info.group_subitem_name == "حیاط و ایوان") {
            // }
            // if (info.group_subitem_name == "ابزار باغبانی") {
            // }
            // if (info.group_subitem_name == "متفرقه ساختمان و حیاط") {
            // }
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
            // if (info.group_subitem_name == "کیف/کفش/کمربند") {}
            // if (info.group_subitem_name == "لباس") {}
            // if (info.group_subitem_name == "متفرقه کیف،کفش و لباس") {}
          }
          if (info.group_item_name == "تزئینی") {
            // if (info.group_subitem_name == "ساعت") {
            // }
            // if (info.group_subitem_name == "جواهرات") {
            // }
            // if (info.group_subitem_name == "بدلیجات") {
            // }
            // if (info.group_subitem_name == "متفرقه تزئینی") {
            // }
          }
          if (info.group_item_name == "آرایشی، بهداشتی و درمانی") {
            info.explation_ex = "";
          }
          if (info.group_item_name == "وسایل بچه و اسباب بازی") {
            // if (info.group_subitem_name == "کفش و لباس بچه") {
            // }
            // if (info.group_subitem_name == "اسباب بازی") {
            // }
            // if (info.group_subitem_name == "کالسکه و لولزم جانبی") {
            // }
            // if (info.group_subitem_name == "تخت و صندلی بچه") {
            // }
            // if (info.group_subitem_name == "اسباب و اثاث بچه") {
            // }
            // if (
            //   info.group_subitem_name == "متفرقه وسایل بچه و اسباب بازی"
            // ) {
            // }
          }
          if (info.group_item_name == "لوازم التحریر") {
            info.explation_ex = "";
          }
        }
        if (info.group_name == "سرگرمی و فراعت") {
          // if (info.group_item_name == "بلیط") {
          //   if (info.group_subitem_name == "کنسرت") {
          //   }
          //   if (info.group_subitem_name == "تئااتر و سینما") {
          //   }
          //   if (info.group_subitem_name == "کارت هدیه و تخفیف") {
          //   }
          //   if (info.group_subitem_name == "اماکن و مسابقات ورزشی") {
          //   }
          //   if (info.group_subitem_name == "ورزشی") {
          //   }
          //   if (info.group_subitem_name == "اتوبوس، مترو و قطار") {
          //   }
          //   if (info.group_subitem_name == "متفرقه  بلیط") {
          //   }
          // }
          // if (info.group_item_name == "تور و چارتر") {
          //   if (info.group_subitem_name == "") {
          //   }
          // }
          // if (info.group_item_name == "کتاب و مجله") {
          //   if (info.group_subitem_name == "آموزشی") {
          //   }
          //   if (info.group_subitem_name == "ادبی") {
          //   }
          //   if (info.group_subitem_name == "تاریخی") {
          //   }
          //   if (info.group_subitem_name == "مجلات") {
          //   }
          //   if (info.group_subitem_name == "متفرقه  کتاب و مجله") {
          //   }
          // }
          // if (info.group_item_name == "دوچرخه/اسکیت/اسکوتر") {
          //   if (info.group_subitem_name == "") {
          //   }
          // }
          // if (info.group_item_name == "حیوانات") {
          //   if (info.group_subitem_name == "گربه") {
          //   }
          //   if (info.group_subitem_name == "موش و خرگوش") {
          //   }
          //   if (info.group_subitem_name == "خزنده") {
          //   }
          //   if (info.group_subitem_name == "پرنده") {
          //   }
          //   if (info.group_subitem_name == "ماهی") {
          //   }
          //   if (info.group_subitem_name == "لوازم جانبی") {
          //   }
          //   if (info.group_subitem_name == "حیوانات مزرعه") {
          //   }
          //   if (info.group_subitem_name == "سگ") {
          //   }
          //   if (info.group_subitem_name == "متفرقه  حیوانات") {
          //   }
          // }
          // if (info.group_item_name == "کلکسیون و سرگرمی") {
          //   if (info.group_subitem_name == "سکه، تمبر و اسکناس") {
          //   }
          //   if (info.group_subitem_name == "اشیای عتیقه") {
          //   }
          //   if (info.group_subitem_name == "متفرقه  کلکسیون و سرگرمی") {
          //   }
          // }
          // if (info.group_item_name == "آلات موسیقی") {
          //   if (info.group_subitem_name == "گیتار، بیس و امپلیفایر") {
          //   }
          //   if (info.group_subitem_name == "سازهای بادی") {
          //   }
          //   if (info.group_subitem_name == "پیانو/کیبورد/آکاردئون") {
          //   }
          //   if (info.group_subitem_name == "سنتی") {
          //   }
          //   if (info.group_subitem_name == "درام و پرکاشن") {
          //   }
          //   if (info.group_subitem_name == "ویولن") {
          //   }
          //   if (info.group_subitem_name == "متفرقه آلات موسیقی") {
          //   }
          // }
          // if (info.group_item_name == "ورزش و تناسب اندام") {
          //   if (info.group_subitem_name == "ورزش های توپی") {
          //   }
          //   if (info.group_subitem_name == "کوهنوردی و کمپینگ") {
          //   }
          //   if (info.group_subitem_name == "غواصی و ورزش های آبی") {
          //   }
          //   if (info.group_subitem_name == "ماهیگیری") {
          //   }
          //   if (info.group_subitem_name == "تجهیزات ورزشی") {
          //   }
          //   if (info.group_subitem_name == "ورزش های زمستانی") {
          //   }
          //   if (info.group_subitem_name == "اسب و تجهیزات اسب سواری") {
          //   }
          //   if (info.group_subitem_name == "متفرقه ورزش و تناسب اندام") {
          //   }
          // }
          // if (info.group_item_name == "اسباب بازی") {
          //   if (info.group_subitem_name == "") {
          //   }
          // }
          // if (info.group_item_name == "متفرقه سرگرمی") {
          //   if (info.group_subitem_name == "") {
          //   }
          // }
        }
        if (info.group_name == "اجتماعی") {
          // if (info.group_item_name == "رویداد") {
          //   if (info.group_subitem_name == "حراج") {
          //   }
          //   if (info.group_subitem_name == "گردهمایی و همایش") {
          //   }
          //   if (info.group_subitem_name == "ورزشی") {
          //   }
          //   if (info.group_subitem_name == "متفرقه رویداد") {
          //   }
          // }
          // if (info.group_item_name == "داوطلبانه") {
          //   if (info.group_subitem_name == "تحقیقاتی") {
          //   }
          //   if (info.group_subitem_name == "متفرقه داوطلبانه") {
          //   }
          // }
          // if (info.group_item_name == "گم شده ها") {
          //   if (info.group_subitem_name == "حیوانات") {
          //   }
          //   if (info.group_subitem_name == "اشیا") {
          //   }
          //   if (info.group_subitem_name == "متفرقه گم شده ها") {
          //   }
          // }
        }
        if (info.group_name == "برای کسب و کار") {
          // if (info.group_item_name == "تجهیزات و ماشین آلات") {
          //   if (info.group_subitem_name == "فروشگاه و مغازه") {
          //   }
          //   if (info.group_subitem_name == "آرایشگاه و سالن های زیبایی") {
          //   }
          //   if (info.group_subitem_name == "دفتر کار") {
          //   }
          //   if (info.group_subitem_name == "صنعتی") {
          //   }
          //   if (info.group_subitem_name == "کافی شاپ و رستوران") {
          //   }
          //   if (info.group_subitem_name == "پزشکی") {
          //   }
          //   if (info.group_subitem_name == "متفرقه تجهیزات و ماشین آلات") {
          //   }
          // }
          // if (info.group_item_name == "عمده فروشی") {
          //   if (info.group_subitem_name == "") {
          //   }
          // }
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
