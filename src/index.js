  const displayRamens = () => {
    fetch(`http://localhost:3000/ramens`)
      .then((response) => response.json())
      .then((data) => {
        const menu = document.querySelector("#ramen-menu");
  
        data.forEach((image) => {
          const imgElement = document.createElement("img");
          imgElement.src = image.image;
          imgElement.id = image.id;
          imgElement.classList.add("ramen");
          menu.appendChild(imgElement);
          imgElement.title = image.name; 
          imgElement.restaurant = image.restaurant; 
          imgElement.rating = image.rating; 
          imgElement.comment = image.comment;
          image.imgElement = imgElement;
        });
  
        handleClick(data);
   });
  };

  const handleClick = () => {
    const ramenImages = document.querySelectorAll('#ramen-menu img');
    const pictureSlot = document.querySelector("#ramen-detail > img");
    const nameSlot = document.querySelector("#ramen-detail > h2");
    const locationSlot = document.querySelector("#ramen-detail > h3");
    const ratingSlot = document.querySelector("#rating-display");
    const commentSlot = document.querySelector("#comment-display");
  
    ramenImages.forEach((ramen) => {
      ramen.addEventListener("click", () => {
        const clickedRamen = {
          image: ramen.src,
          id: ramen.id,
          name: ramen.title,
          restaurant: ramen.restaurant,
          comment: ramen.comment, 
          rating: ramen.rating,
        };
        nameSlot.innerText = clickedRamen.name;
        locationSlot.innerText = clickedRamen.restaurant;
        pictureSlot.src = clickedRamen.image;
        commentSlot.innerText = clickedRamen.comment;
        ratingSlot.innerText = clickedRamen.rating;
      });
    });
  };

  const addSubmitListener = () => {
    const submitButton = document.querySelector("#submit-button");
    const newName = document.querySelector("#new-name");
    const newRestaurant = document.querySelector("#new-restaurant");
    const newImage = document.querySelector("#new-image");
    const newRating = document.querySelector("#new-rating");
    const newComment = document.querySelector("#new-comment");

  
    submitButton.addEventListener("click", () => {
      const newRamen = {
        name: newName.value,
        restaurant: newRestaurant.value,
        image: newImage.value,
        rating: newRating.value,
        comment: newComment.value,
      };
  
      fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRamen),
      })
        .then((response) => response.json())
        .then((data) => {
          displayRamens(data);
        });
    });
  };

const main = document.addEventListener("DOMContentLoaded", () => {
  displayRamens();
  handleClick();
  addSubmitListener();
});