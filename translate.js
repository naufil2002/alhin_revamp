// Google init function (global hona chahiye)
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

    // wait till google combo loads
    const timer = setInterval(() => {
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event("change"));
        clearInterval(timer);
      }
    }, 300);

    // RTL support
    if (lang === "ar" || lang === "he") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }

  });

});