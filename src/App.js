/** @param {HTMLDivElement} $target */
export default function App($target) {
  // /** @type {IntersectionObserverInit} options */
  // const options = {
  //   // root: null,
  //   // rootMargin: "0px",
  //   threshold: 1.0,
  // };

  const observer = new IntersectionObserver(onIntersect, { threshold: 1.0 });

  const targets = Array.from(document.getElementsByClassName("lazy"));

  const $button = document.querySelector("button");
  $button.addEventListener("click", event => {
    targets.forEach(target => {
      observer.observe(target);
    });
  });

  let count = 0;

  /**
   * @param {IntersectionObserverEntry[]} entries
   * @param {IntersectionObserver} observer
   * */
  function onIntersect(entries, observer) {
    console.log("onIntersect 호출");
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        console.log(" 화면에서 노출");
        console.log("   배열 index: ", index);
        console.log("   dataset index: ", entry.target.dataset.index);
        console.log("   count: ", count);
        count++;
        // entry.target.src = `https://picsum.photos/seed/${index}/200`;
        // observer.unobserve(entry.target);
      } else {
        console.log(" 화면에서 제외", entry.target.dataset.index);
      }
    });
  }
}
