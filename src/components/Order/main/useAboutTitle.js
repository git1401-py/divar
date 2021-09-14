const useAboutTitle = (order_data, aboutTitle) => {
  aboutTitle.title = "";
  aboutTitle.title_ex = "";
  aboutTitle.explation = "";
  aboutTitle.explation_ex = "";
  if (order_data.group_name == "املاک") {
    if (order_data.group_item_name == "فروش مسکونی") {
      if (order_data.group_subitem_name == "آپارتمان") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: آپارتمان، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "خانه و ویلا") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: ویلا باغ، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "زمین کلنگی") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: خانه کلنگی، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "متفرقه فروش مسکونی") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
    }
    if (order_data.group_item_name == "اجاره مسکونی") {
      if (order_data.group_subitem_name == "آپارتمان") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: آپارتمان، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "خانه و ویلا") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: ویلا باغ، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "متفرقه اجاره مسکونی") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
    }
    if (order_data.group_item_name == "فروش اداری و تجاری") {
      if (order_data.group_subitem_name == "دفتر کار،اتاق اداری و مطب") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: آپارتمان با موقعیت اداری، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "مغازه و غرفه") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: مغازه با موقعیت اداری، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "صنعتی، کشاورزی و تجاری") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex =
          "مثال: زمین کشاورزی با موقعیت اداری، 0 متر، ولیعصر";
      }
      if (order_data.group_subitem_name == "متفرقه  فروش اداری و تجاری") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط فروش، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید. ";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "مثال: ویلا باغ، 0 متر، ولیعصر";
      }
    }
    if (order_data.group_item_name == "اجاره اداری و تجاری") {
      if (order_data.group_subitem_name == "دفتر کار،اتاق اداری و مطب") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.title_ex = "مثال: آپارتمان با موقعیت اداری، 0 متر، ولیعصر";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط اجاره، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید.";
        aboutTitle.explation_ex = "توضیحات را بنویسید";
      }
      if (order_data.group_subitem_name == "مغازه و غرفه") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.title_ex = "مثال: مفازه، 0 متر، ولیعصر";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط اجاره، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید.";
        aboutTitle.explation_ex = "توضیحات را بنویسید";
      }
      if (order_data.group_subitem_name == "صنعتی، کشاورزی و تجاری") {
        aboutTitle.title =
          "در عنوان آگهی به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.";
        aboutTitle.title_ex = "مثال: زمین کشاورزی، 0 متر، ولیعصر";
        aboutTitle.explation =
          "در توضیحات آگهی به مواردی مانند شرایط اجاره، جزئیات و ویژگی‌های قابل توجه، دسترسی‌های محلی و موقعیت قرارگیری ملک اشاره کنید.";
        aboutTitle.explation_ex = "توضیحات را بنویسید";
      }
      if (order_data.group_subitem_name == "متفرقه اجاره اداری و تجاری") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
        aboutTitle.title_ex = "آپارتمان ملاصدرا 130 متر";
      }
    }
    if (order_data.group_item_name == "اجاره کوتاه مدت") {
      // if (order_data.group_subitem_name == "آپارتمان و سوئیت") {}
      // if (order_data.group_subitem_name == "ویلا و باغ") {}
      // if (order_data.group_subitem_name == "دفتر کار و فضای آموزشی") {}
      // if (order_data.group_subitem_name == "متفرقه اجاره کوتاه مدت") {}
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "توضیحات را بنویسید.";
      aboutTitle.title_ex = "اجاره آپارتمان روزانه";
    }
    if (order_data.group_item_name == "پروژه های ساخت و ساز") {
      // if (order_data.group_subitem_name == "مشارکت در ساخت") {}
      // if (order_data.group_subitem_name == "پیش فروش") {}
      // if (order_data.group_subitem_name == "متفرقه  پروژه های ساخت و ساز") {}
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "توضیحات را بنویسید.";
      aboutTitle.title_ex = "";
    }
  }
  if (order_data.group_name == "وسایل نقلیه") {
    if (order_data.group_item_name == "خودرو") {
      if (order_data.group_subitem_name == "سواری") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "خودرو مزدا 3 مدل 89";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
      }
      if (order_data.group_subitem_name == "کلاسیک") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "بنز کلاسیک مدل 1970";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
      }
      if (order_data.group_subitem_name == "اجاره ای") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "اجاره سانتافه";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
      }
      if (order_data.group_subitem_name == "سنگین") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "کامیون بنز 1921 تک کمپرسی";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
      }
      if (order_data.group_subitem_name == "متفرقه خودرو") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "خودرو مزدا 3 مدل 89";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "توضیحات را بنویسید.";
      }
    }
    if (order_data.group_item_name == "قطعات یدکی و لوازم جانبی خودرو") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "موتور سیکلت و لوازم جانبی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "موتور پالس مدل 90";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "قایق و لوازم جانبی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
  }
  if (order_data.group_name == "لوازم الکتریکی") {
    if (order_data.group_item_name == "موبایل و تبلت") {
      if (order_data.group_subitem_name == "موبایل") {
        aboutTitle.title =
          "توصیه می‌شود عنوان پیشنهادی زیر را تغییر ندهید و درصورت نیاز، موارد بیش‌تر را به انتهای آن اضافه کنید.";
        aboutTitle.title_ex = "سامسونگ Galaxy A11 با حافظه 128 گیگ";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "تبلت") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "لوازم جانبی موبایل و تبلت") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "سیم‌کارت") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "به شماره سیم کارت اشاره کنید";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "متفرقه موبایل و تبلت") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
    }
    if (order_data.group_item_name == "رایانه") {
      if (order_data.group_subitem_name == "رایانه همراه") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "لپ تاپ HP مدل 5320";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "رایانه رومیزی") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "قطعات و لوازم جانبی") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "کیبورد بیسیم اپل";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "لوازم و تجهیزات شبکه") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "پرینتر/اسکنر/کپی/فکس") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "پرینتر سامسونگ مدل CLP315";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "متفرقه رایانه") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
    }
    if (order_data.group_item_name == "کنسول، بازی ویدئویی و آنلاین") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "صوتی و تصویری") {
      // if (order_data.group_subitem_name == "فیلم و موسیقی") {
      // }
      // if (order_data.group_subitem_name == "دوربین عکاسی و فیلم‌برداری") {
      // }
      // if (order_data.group_subitem_name == "پخش‌کننده همراه") {
      // }
      // if (order_data.group_subitem_name == "سیستم صوتی خانگی") {
      // }
      // if (order_data.group_subitem_name == "ویدئو و پخش کننده DVD") {
      // }
      // if (order_data.group_subitem_name == "تلویزیون و پروژکتور") {
      // }
      // if (order_data.group_subitem_name == "دوربین مداربسته") {
      // }
      // if (order_data.group_subitem_name == "متفرقه صوتی و تصویری") {
      // }
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "تلفن رومیزی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
  }
  if (order_data.group_name == "مربوط به خانه") {
    if (order_data.group_item_name == "وسایل و تزئینات خانه") {
      if (order_data.group_subitem_name == "تزئینی و آقار هنری") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "لوازم روشنایی") {
        aboutTitle.title =
          "در عنوان آگهی به مواردی مانند نوع، برند، مدل یا طرح کالا اشاره کنید.";
        aboutTitle.title_ex = "عنوانی بنویسید";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه کالا را بنویسید. درج شمارۂ تماس و شبکه‌های اجتماعی در متن آگهی مجاز نیست.";
        aboutTitle.explation_ex = "توضیحات را بنویسید";
      }
      if (order_data.group_subitem_name == "میز و صندلی") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "میز نهارخوری";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "فرش و گلیم") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "تابلو فرش طرح شام آخر";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "کمد و بوفه") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "پرده و رومیزی") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "تخت و اتاق خواب") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "مبلمان و صندلی راحتی") {
        aboutTitle.title =
          "در عنوان آگهی به مواردی مانند نوع، برند، مدل یا طرح کالا اشاره کنید.";
        aboutTitle.title_ex = "عنوانی بنویسید";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه کالا را بنویسید. درج شمارۂ تماس و شبکه‌های اجتماعی در متن آگهی مجاز نیست.";
        aboutTitle.explation_ex = "توضیحات را بنویسید";
      }
      if (order_data.group_subitem_name == "میز تلویزیون و وسایل سیستم پخش") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "متفرقه وسایل و تزئینات خانه") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
    }
    if (order_data.group_item_name == "وسایل آشپزخانه") {
      // if (order_data.group_subitem_name == "ماشین ظرفشویی") {
      // }
      // if (order_data.group_subitem_name == "یخچال و فریزر") {
      // }
      // if (order_data.group_subitem_name == "وسایل آشپزی و غذاخوری") {
      // }
      // if (order_data.group_subitem_name == "مایکروویو و گاز") {
      // }
      // if (order_data.group_subitem_name == "ماشین لباسشویی و خشک کننده") {
      // }
      // if (order_data.group_subitem_name == "متفرقه وسایل آشپزخانه") {
      // }
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "ابزار") {
      // if (order_data.group_subitem_name == "نظافت و خیاطی و اتو") {
      // }
      // if (order_data.group_subitem_name == "تعمیرات") {
      // }
      // if (order_data.group_subitem_name == "متفرقه ابزار") {
      // }
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "ساختمان و حیاط") {
      // if (order_data.group_subitem_name == "سرویس بهداشتی و سونا") {
      // }
      // if (order_data.group_subitem_name == "سیستم گرمایشی سرمایشی و گاز") {
      // }
      // if (order_data.group_subitem_name == "آشپزخانه") {
      // }
      // if (order_data.group_subitem_name == "حیاط و ایوان") {
      // }
      // if (order_data.group_subitem_name == "ابزار باغبانی") {
      // }
      // if (order_data.group_subitem_name == "متفرقه ساختمان و حیاط") {
      // }
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
  }
  if (order_data.group_name == "خدمات") {
    if (order_data.group_item_name == "موتور و ماشین") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "پذیرایی/مراسم") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "خدمات رایانه ای و موبایل") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "مالی/ حسابداری/بیمه") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "حمل و نقل") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "پیشه و مهارت") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "آرایشگری و زیبایی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "سرگرمی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }

    if (order_data.group_item_name == "نظافت") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "باغبانی و درختکاری") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "آموزشی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
  }
  if (order_data.group_name == "وسایل شخصی") {
    if (order_data.group_item_name == "کیف،کفش و لباس") {
      if (order_data.group_subitem_name == "کیف/کفش/کمربند") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "کفش ملی سایز 39";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "لباس") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "لباس مجلسی سایز 38";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
      if (order_data.group_subitem_name == "متفرقه کیف،کفش و لباس") {
        aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
        aboutTitle.title_ex = "کفش ملی سایز 39";
        aboutTitle.explation =
          "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
        aboutTitle.explation_ex = "";
      }
    }
    if (order_data.group_item_name == "تزئینی") {
      // if (order_data.group_subitem_name == "ساعت") {
      // }
      // if (order_data.group_subitem_name == "جواهرات") {
      // }
      // if (order_data.group_subitem_name == "بدلیجات") {
      // }
      // if (order_data.group_subitem_name == "متفرقه تزئینی") {
      // }
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "آرایشی، بهداشتی و درمانی") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "وسایل بچه و اسباب بازی") {
      // if (order_data.group_subitem_name == "کفش و لباس بچه") {
      // }
      // if (order_data.group_subitem_name == "اسباب بازی") {
      // }
      // if (order_data.group_subitem_name == "کالسکه و لولزم جانبی") {
      // }
      // if (order_data.group_subitem_name == "تخت و صندلی بچه") {
      // }
      // if (order_data.group_subitem_name == "اسباب و اثاث بچه") {
      // }
      // if (
      //   order_data.group_subitem_name == "متفرقه وسایل بچه و اسباب بازی"
      // ) {
      // }
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
    if (order_data.group_item_name == "لوازم التحریر") {
      aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
      aboutTitle.title_ex = "";
      aboutTitle.explation =
        "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
      aboutTitle.explation_ex = "";
    }
  }
  if (order_data.group_name == "سرگرمی و فراعت") {
    // if (order_data.group_item_name == "بلیط") {
    //   if (order_data.group_subitem_name == "کنسرت") {
    //   }
    //   if (order_data.group_subitem_name == "تئااتر و سینما") {
    //   }
    //   if (order_data.group_subitem_name == "کارت هدیه و تخفیف") {
    //   }
    //   if (order_data.group_subitem_name == "اماکن و مسابقات ورزشی") {
    //   }
    //   if (order_data.group_subitem_name == "ورزشی") {
    //   }
    //   if (order_data.group_subitem_name == "اتوبوس، مترو و قطار") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه  بلیط") {
    //   }
    // }
    // if (order_data.group_item_name == "تور و چارتر") {
    //   if (order_data.group_subitem_name == "") {
    //   }
    // }
    // if (order_data.group_item_name == "کتاب و مجله") {
    //   if (order_data.group_subitem_name == "آموزشی") {
    //   }
    //   if (order_data.group_subitem_name == "ادبی") {
    //   }
    //   if (order_data.group_subitem_name == "تاریخی") {
    //   }
    //   if (order_data.group_subitem_name == "مجلات") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه  کتاب و مجله") {
    //   }
    // }
    // if (order_data.group_item_name == "دوچرخه/اسکیت/اسکوتر") {
    //   if (order_data.group_subitem_name == "") {
    //   }
    // }
    // if (order_data.group_item_name == "حیوانات") {
    //   if (order_data.group_subitem_name == "گربه") {
    //   }
    //   if (order_data.group_subitem_name == "موش و خرگوش") {
    //   }
    //   if (order_data.group_subitem_name == "خزنده") {
    //   }
    //   if (order_data.group_subitem_name == "پرنده") {
    //   }
    //   if (order_data.group_subitem_name == "ماهی") {
    //   }
    //   if (order_data.group_subitem_name == "لوازم جانبی") {
    //   }
    //   if (order_data.group_subitem_name == "حیوانات مزرعه") {
    //   }
    //   if (order_data.group_subitem_name == "سگ") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه  حیوانات") {
    //   }
    // }
    // if (order_data.group_item_name == "کلکسیون و سرگرمی") {
    //   if (order_data.group_subitem_name == "سکه، تمبر و اسکناس") {
    //   }
    //   if (order_data.group_subitem_name == "اشیای عتیقه") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه  کلکسیون و سرگرمی") {
    //   }
    // }
    // if (order_data.group_item_name == "آلات موسیقی") {
    //   if (order_data.group_subitem_name == "گیتار، بیس و امپلیفایر") {
    //   }
    //   if (order_data.group_subitem_name == "سازهای بادی") {
    //   }
    //   if (order_data.group_subitem_name == "پیانو/کیبورد/آکاردئون") {
    //   }
    //   if (order_data.group_subitem_name == "سنتی") {
    //   }
    //   if (order_data.group_subitem_name == "درام و پرکاشن") {
    //   }
    //   if (order_data.group_subitem_name == "ویولن") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه آلات موسیقی") {
    //   }
    // }
    // if (order_data.group_item_name == "ورزش و تناسب اندام") {
    //   if (order_data.group_subitem_name == "ورزش های توپی") {
    //   }
    //   if (order_data.group_subitem_name == "کوهنوردی و کمپینگ") {
    //   }
    //   if (order_data.group_subitem_name == "غواصی و ورزش های آبی") {
    //   }
    //   if (order_data.group_subitem_name == "ماهیگیری") {
    //   }
    //   if (order_data.group_subitem_name == "تجهیزات ورزشی") {
    //   }
    //   if (order_data.group_subitem_name == "ورزش های زمستانی") {
    //   }
    //   if (order_data.group_subitem_name == "اسب و تجهیزات اسب سواری") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه ورزش و تناسب اندام") {
    //   }
    // }
    // if (order_data.group_item_name == "اسباب بازی") {
    //   if (order_data.group_subitem_name == "") {
    //   }
    // }
    // if (order_data.group_item_name == "متفرقه سرگرمی") {
    //   if (order_data.group_subitem_name == "") {
    //   }
    // }
    aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
    aboutTitle.title_ex = "";
    aboutTitle.explation =
      "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
    aboutTitle.explation_ex = "";
  }
  if (order_data.group_name == "اجتماعی") {
    // if (order_data.group_item_name == "رویداد") {
    //   if (order_data.group_subitem_name == "حراج") {
    //   }
    //   if (order_data.group_subitem_name == "گردهمایی و همایش") {
    //   }
    //   if (order_data.group_subitem_name == "ورزشی") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه رویداد") {
    //   }
    // }
    // if (order_data.group_item_name == "داوطلبانه") {
    //   if (order_data.group_subitem_name == "تحقیقاتی") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه داوطلبانه") {
    //   }
    // }
    // if (order_data.group_item_name == "گم شده ها") {
    //   if (order_data.group_subitem_name == "حیوانات") {
    //   }
    //   if (order_data.group_subitem_name == "اشیا") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه گم شده ها") {
    //   }
    // }
    aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
    aboutTitle.title_ex = "";
    aboutTitle.explation =
      "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
    aboutTitle.explation_ex = "";
  }
  if (order_data.group_name == "برای کسب و کار") {
    // if (order_data.group_item_name == "تجهیزات و ماشین آلات") {
    //   if (order_data.group_subitem_name == "فروشگاه و مغازه") {
    //   }
    //   if (order_data.group_subitem_name == "آرایشگاه و سالن های زیبایی") {
    //   }
    //   if (order_data.group_subitem_name == "دفتر کار") {
    //   }
    //   if (order_data.group_subitem_name == "صنعتی") {
    //   }
    //   if (order_data.group_subitem_name == "کافی شاپ و رستوران") {
    //   }
    //   if (order_data.group_subitem_name == "پزشکی") {
    //   }
    //   if (order_data.group_subitem_name == "متفرقه تجهیزات و ماشین آلات") {
    //   }
    // }
    // if (order_data.group_item_name == "عمده فروشی") {
    //   if (order_data.group_subitem_name == "") {
    //   }
    // }
    aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
    aboutTitle.title_ex = "";
    aboutTitle.explation =
      "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
    aboutTitle.explation_ex = "";
  }
  if (order_data.group_name == "استخدام و کاریابی") {
    aboutTitle.title = "در عنوان آگهی به موارد مهم و چشمگیر اشاره کنید.";
    aboutTitle.title_ex = "";
    aboutTitle.explation =
      "جزئیات و نکات قابل توجه آگهی خود را کامل و دقیق بنویسید. درج شماره موبایل در متن آگهی مجاز نیست .";
    aboutTitle.explation_ex = "";
  }
};
export default useAboutTitle;
