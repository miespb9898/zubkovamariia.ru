(function () {
  "use strict";

  var TELEGRAM_USER = "Mariia_Zubkova";
  var rub = new Intl.NumberFormat("ru-RU");

  // Фон первого экрана
  function initOpeningBackground() {
    var opening = document.getElementById("top");
    if (!BACKGROUND_IMAGES || !BACKGROUND_IMAGES.length) return;
    var scrim = opening.querySelector(".opening__scrim");
    BACKGROUND_IMAGES.forEach(function (src, i) {
      var div = document.createElement("div");
      div.className = "opening__bg" + (i === 0 ? " is-active" : "");
      div.style.backgroundImage = "url('" + src + "')";
      if (scrim) {
        opening.insertBefore(div, scrim);
      } else {
        opening.appendChild(div);
      }
    });
    var layers = opening.querySelectorAll(".opening__bg");
    if (layers.length < 2) return;
    var i = 0;
    setInterval(function () {
      layers[i].classList.remove("is-active");
      i = (i + 1) % layers.length;
      layers[i].classList.add("is-active");
    }, 5000);
  }

 // Фон второго слайда: ручное переключение кнопками и свайпом
  var SLIDE2_IMAGES = [
    "images/tsvety-i-travy-5.jpg",
    "images/memy-3.jpg",
    "images/roses.jpg",
    "images/zhivotnye-2.jpg"
  ];

  function initSlide2Background() {
    var slide2 = document.getElementById("slide2");
    if (!slide2 || !SLIDE2_IMAGES || !SLIDE2_IMAGES.length) return;

    var scrim = slide2.querySelector(".slide2__scrim");

    // Вставляем фоновые слои строго по порядку перед затемнением
    SLIDE2_IMAGES.forEach(function (src, i) {
      var div = document.createElement("div");
      div.className = "slide2__bg" + (i === 0 ? " is-active" : "");
      div.style.backgroundImage = "url('" + src + "')";
      if (scrim) {
        slide2.insertBefore(div, scrim);
      } else {
        slide2.appendChild(div);
      }
    });

    var layers = slide2.querySelectorAll(".slide2__bg");
    if (layers.length < 2) return;

    var current = 0;
    var hasInteracted = false;
    var textEl = slide2.querySelector(".slide2__text");

    function goTo(index) {
      // Снимаем активность со всех слоёв и активируем только нужный
      layers.forEach(function (l) { l.classList.remove("is-active"); });
      current = (index + layers.length) % layers.length;
      layers[current].classList.add("is-active");

      // При первой ручной смене картины запускаем таймер на 10 секунд
      if (!hasInteracted) {
        hasInteracted = true;
        if (textEl) {
          setTimeout(function () {
            textEl.classList.add("is-hidden");
          }, 10000); // 10 секунд
        }
      }
    }

    var prevBtn = document.getElementById("slide2-prev");
    var nextBtn = document.getElementById("slide2-next");

    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        goTo(current - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        goTo(current + 1);
      });
    }

    // Поддержка жестов свайпа пальцем на смартфонах/планшетах
    var touchStartX = 0;
    var touchEndX = 0;

    slide2.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slide2.addEventListener("touchend", function (e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goTo(current - 1); // свайп вправо -> предыдущая
        } else {
          goTo(current + 1); // свайп влево -> следующая
        }
      }
    }, { passive: true });
  }

  /* ---------------- Витрина: все работы сразу ---------------- */
  function vitrinaCardHTML(p) {
    var soldTag = p.status === "sold" ? '<span class="vitrina__sold">Продано</span>' : "";
    var priceLine = p.status === "sold" ? "продано" : rub.format(p.price) + " ₽";
    return (
      '<article class="vitrina__card" data-id="' + p.id + '">' +
        '<div class="vitrina__frame">' + soldTag + '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy"></div>' +
        '<div class="vitrina__caption">' +
          '<span class="name">«' + p.title + '»</span>' +
          '<span class="specs">' + p.size + ' &middot; ' + p.medium + '</span>' +
          '<span class="specs">' + priceLine + '</span>' +
        '</div>' +
      '</article>'
    );
  }

  function renderVitrina() {
    var categories = ["Все"].concat(CATEGORY_ORDER);
    var tabs = document.getElementById("vitrina-tabs");
    tabs.innerHTML = categories.map(function (c, i) {
      return '<button type="button" data-cat="' + c + '" class="' + (i === 0 ? "is-active" : "") + '">' + c + '</button>';
    }).join("");
    tabs.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        tabs.querySelectorAll("button").forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        renderVitrinaGrid(btn.dataset.cat);
      });
    });
    renderVitrinaGrid("Все");
  }

  function renderVitrinaGrid(category) {
    var grid = document.getElementById("vitrina-grid");
    var list = category === "Все" ? PAINTINGS : PAINTINGS.filter(function (p) { return p.category === category; });
    grid.innerHTML = list.map(function (p) {
      return vitrinaCardHTML(p);
    }).join("");
    grid.querySelectorAll(".vitrina__card").forEach(function (card) {
      card.addEventListener("click", function () { openLightbox(card.dataset.id); });
    });
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      }, { threshold: 0.15 });
      grid.querySelectorAll(".vitrina__card").forEach(function (c) { io.observe(c); });
    } else {
      grid.querySelectorAll(".vitrina__card").forEach(function (c) { c.classList.add("is-visible"); });
    }
  }

  /* ---------------- Переключение вида (тихая галерея / витрина) ---------------- */
  function showView(name) {
    document.getElementById("view-home").classList.toggle("is-active", name === "home");
    document.getElementById("view-vitrina").classList.toggle("is-active", name === "vitrina");
    document.getElementById("nav-vitrina").classList.toggle("is-active", name === "vitrina");
    var cta = document.getElementById("float-cta");
    if (cta && name === "vitrina") cta.classList.remove("is-visible");
    window.scrollTo(0, 0);
  }
  function handleHash() {
    showView(location.hash.replace("#", "") === "vitrina" ? "vitrina" : "home");
  }
  window.addEventListener("hashchange", handleHash);

  /* ---------------- Лайтбокс ---------------- */
  var overlay = document.getElementById("overlay");
  function openLightbox(id) {
    var p = PAINTINGS.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var priceLine = p.status === "sold" ? "продано" : rub.format(p.price) + " ₽";
    document.getElementById("overlay-stage").innerHTML = '<img src="' + p.image + '" alt="' + p.title + '">';
    document.getElementById("overlay-caption").innerHTML =
      '<span class="overlay__cat">' + p.category + '</span>' +
      '<span class="overlay__name">«' + p.title + '»</span>' +
      '<span class="overlay__specs">' + p.size + ' &middot; ' + p.medium + '</span>' +
      '<span class="overlay__price">' + priceLine + '</span>';
    overlay.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    overlay.classList.remove("is-active");
    document.body.style.overflow = "";
  }
  document.getElementById("overlay-close").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) closeLightbox();
  });

  function initNavColor() {
    var nav = document.querySelector(".nav");
    var top = document.getElementById("top");
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        nav.classList.toggle("nav--on-photo", entry.intersectionRatio > 0.6);
      });
    }, { threshold: [0, 0.6, 1] });
    io.observe(top);
  }

  function initFloatCta() {
    var cta = document.getElementById("float-cta");
    var top = document.getElementById("top");
    if (!cta || !top) return;
    if (!("IntersectionObserver" in window)) { cta.classList.add("is-visible"); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var onVitrina = document.getElementById("view-vitrina").classList.contains("is-active");
        cta.classList.toggle("is-visible", entry.intersectionRatio < 0.6 && !onVitrina);
      });
    }, { threshold: [0, 0.6, 1] });
    io.observe(top);
    cta.addEventListener("click", function () { cta.classList.remove("is-visible"); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initOpeningBackground();
    initSlide2Background();
    initNavColor();
    initFloatCta();
    renderVitrina();
    handleHash();
  });
})();