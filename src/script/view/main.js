import "../component/search-bar.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealListElement = document.querySelector("#meallist");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    mealListElement.innerHTML = "";
    results.forEach((meal) => {
      const { strMeal, strMealThumb, strCategory } = meal;
      const mealElement = document.createElement("div");
      mealElement.setAttribute("class", "col-md-3");

      mealElement.innerHTML = `
    <div class="container">
        <div class="card" style="width: 20rem;">
        <img class="meal-img card-img-top" src="${strMealThumb}" alt="Meal Img">
        <div class="card-body">
        <div class="meal-info">
                   <h4>${strMeal}</h4>
                  
                   
                 </div>
<a href="#0" class="btn btn-primary">Order</a>
         </div>
         
        </div>
    </div>
              
                
                `;

      mealListElement.appendChild(mealElement);
    });
  };

  const fallbackResult = (message) => {
    mealListElement.innerHTML = "";
    mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
