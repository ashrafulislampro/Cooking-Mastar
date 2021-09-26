function searchInputFood(){
          let inputFood = document.getElementById("input_food").value;
          let seafood = inputFood ;
          let seaFood = inputFood ;
              if(inputFood === seafood || inputFood === seaFood){
                     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputFood}`)
                     .then(res => res.json())
                     .then(data => displaySearchFood(data.meals));
                     document.getElementById("error_text").style.display = "none";
                     document.getElementById("input_food").value= '';
              }else{
                     document.getElementById("error_text").style.display = "block";
                     document.getElementById("input_food").value= '';
              }
}


const displaySearchFood = foodList =>{
          const foodContainer = document.getElementById("food_container");
          foodList.forEach(food => {
                    const eachFoodDiv = document.createElement("div");
                    eachFoodDiv.className = "food_item";
                    const foodItem= `
                              <img onclick="eachFoodItem('${food.strMeal}')" class="img" src="${food.strMealThumb}">
                              <h5 class="text-center mt-4 fs-3 fw-bold">${food.strMeal}</h5>
                    `
                    eachFoodDiv.innerHTML = foodItem;
                    foodContainer.appendChild(eachFoodDiv);
                    
          })
          
}

const eachFoodItem = foodName =>{
       const eachFoodItem = document.getElementById("each_food_item");  
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
       .then(res => res.json())
       .then(data =>{
                    const eachFoodItemDiv = document.createElement("div");
                    eachFoodItemDiv.className = "eachFoodDetails";
                    const markUp = `
                              <img class="img_item" src="${data.meals[0].strMealThumb}">
                              <h2 class="text-center fs-1 mt-4 fw-bold text-white">${data.meals[0].strMeal}</h2>
                              <hr>
                              <div class="p-5 shadow">
                              <h3>Ingredients</h3>
                              <br>
                              <p>${data.meals[0].strIngredient1}</p>
                              <p>${data.meals[0].strIngredient2}</p>
                              <p>${data.meals[0].strIngredient3}</p>
                              <p>${data.meals[0].strIngredient4}</p>
                              <p>${data.meals[0].strIngredient5}</p>
                              <p>${data.meals[0].strIngredient6}</p>
                              <p>${data.meals[0].strIngredient7}</p>
                              <p>${data.meals[0].strIngredient8}</p>
                             </div>
                    `
                    eachFoodItemDiv.innerHTML = markUp;
                    eachFoodItem.appendChild(eachFoodItemDiv);
       });
       document.getElementById("each_food_item").innerHTML= '';
}