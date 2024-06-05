function showContent(item) {
  const contents = {
    Nonviolence:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
    Love: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
    MeansAndEnds:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
    LivingOurTruth:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
    IntentionalOwnership:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
    OptingOutOfABrokenSystem:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
    Fearlessness:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores earum quam, tenetur hic maxime voluptas quis, iure beatae ipsum repellat, fugiat vero alias reprehenderit doloremque illum dolorem nam aliquid aperiam mollitia eos eligendi. Non laboriosam obcaecati culpa! Nulla facilis facere fugiat fugit cupiditate voluptatem?",
  };

  document.getElementById("content-title").textContent = item;
  document.getElementById("content-text").textContent =
    contents[item.replace(/\s+/g, "")];

  // Seleccionamos todos los ítems y les quitamos los estilos de 'active'
  document.querySelectorAll(".interactive-item").forEach((el) => {
    el.classList.remove("font-bold", "underline");
    el.style.fontWeight = "";
    el.style.textDecoration = "";
  });

  // Agregamos los estilos de 'active' al ítem seleccionado
  let itemId = item.replace(/\s+/g, "");
  document
    .getElementById(`item-${itemId}`)
    .classList.add("font-bold", "underline");
  document.getElementById(`item-${itemId}`).style.fontWeight = "bold";
  document.getElementById(`item-${itemId}`).style.textDecoration = "underline";
}
document.addEventListener("DOMContentLoaded", (event) => {
  const slider = document.getElementById("slider");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
zx
  let index = 0;
  const imagesPerView = 4;
  const imageWidth = 297;
  const imageBorder = 2;
  const imageMarginRight = 15;
  const moveDistance = imageWidth + imageBorder * 2 + imageMarginRight; // suma el ancho, borde y margen

  nextButton.addEventListener("click", () => {
    const totalImages = slider.children.length;
    const maxIndex = totalImages - imagesPerView;
    index = Math.min(maxIndex, index + 1);
    slider.style.transform = `translateX(-${index * moveDistance}px)`;
  });

  prevButton.addEventListener("click", () => {
    index = Math.max(0, index - 1);
    slider.style.transform = `translateX(-${index * moveDistance}px)`;
  });
});
