// index.js

// Callbacks


const addSubmitListener = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(data),
};


fetch("http://localhost:3000/", addSubmitListener)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  });

const displayRamens = () => {
  fetch(`http://localhost:3000/`)
    .then((response) => response.json())
    .then((data) => {
      const menu = document.querySelector("#ramen-menu");
      const ramenImages = data.map((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.image;
        imgElement.classList.add("ramenImages");
        menu.appendChild(imgElement);
        return imgElement;
      });

      handleClick(ramenImages);
    });
};

const handleClick = () => {
  const ramenImages = document.querySelectorAll('#ramen-menu img');
  const pictureSlot = document.querySelector("#ramen-detail > img");
  const nameSlot = document.querySelector("#ramen-detail > h2");
  const locationSlot = document.querySelector("#ramen-detail > h3");
  const ratingSlot = document.querySelector("#rating-display");
  const commentSlot = document.querySelector("#comment-display");

  ramenImages.forEach(image => {
    image.addEventListener("click", () => {
      const clickedRamen = data.find(ramen => ramen.image === image.src);
      if (clickedRamen) {
        nameSlot.innerText = clickedRamen.name;
        locationSlot.innerText = clickedRamen.restaurant;
        pictureSlot.src = clickedRamen.image;
        commentSlot.innerText = clickedRamen.comment;
        ratingSlot.innerText = clickedRamen.rating;
      }
    });
  });
};


const main = () => {
  displayRamens;
  addSubmitListener;
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
