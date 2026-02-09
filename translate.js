function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      autoDisplay: false
    },
    "google_translate_element"
  );
}

document.addEventListener("DOMContentLoaded", function () {

  const langSelect = document.getElementById("langSelect");
  if (!langSelect) return;

  langSelect.addEventListener("change", function () {
    const lang = this.value;

    const timer = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event("change"));
        clearInterval(timer);
      }
    }, 300);

    if (lang === "ar" || lang === "he") {
      if (window.innerWidth > 991) {
        document.documentElement.dir = "rtl";
      } else {
        document.documentElement.dir = "ltr";
      }
    } else {
      document.documentElement.dir = "ltr";
    }

  });

});