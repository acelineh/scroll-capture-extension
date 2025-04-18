(function () {
  const scrollTarget = (() => {
    const all = document.querySelectorAll("*");
    let maxScrollable = null;
    let maxScrollHeight = 0;
    all.forEach((el) => {
      const style = getComputedStyle(el);
      if (
        style.overflow === "auto" ||
        style.overflowY === "auto" ||
        style.overflow === "scroll" ||
        style.overflowY === "scroll"
      ) {
        if (el.scrollHeight > el.clientHeight && el.scrollHeight > maxScrollHeight) {
          maxScrollable = el;
          maxScrollHeight = el.scrollHeight;
        }
      }
    });
    return maxScrollable || document.body;
  })();

  const originalHeight = scrollTarget.style.height;
  const originalOverflow = scrollTarget.style.overflow;
  scrollTarget.style.height = scrollTarget.scrollHeight + "px";
  scrollTarget.style.overflow = "visible";

  html2canvas(scrollTarget, {
    scrollX: 0,
    scrollY: 0,
    ignoreElements: (el) => el.tagName === "IFRAME"
  }).then((canvas) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.download = "scroll-full-capture.png";
    a.click();

    scrollTarget.style.height = originalHeight;
    scrollTarget.style.overflow = originalOverflow;
  });
})();