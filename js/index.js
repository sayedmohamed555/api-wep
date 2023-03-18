
let SBName = document.getElementById("SBName");
let SBLetter= document.getElementById("SBLetter");
let Sdesiplay=document.getElementById("searchDesiplay");
let cartona =``;
let homeM = document.getElementById("master");
let bla7="";
let categ=document.getElementById("CategoriesRow");
let categBox="";
let areaM =document.getElementById("AreaRow");
let areaBox="" ;
let ingradient=document.getElementById("IngredientsRow");
let ingreadBox="";

// start loading 


  $(document).ready(function(){
      $("#Loading i").fadeOut(500)})
      $("#Loading").fadeOut(700,function(){
          $("body").css("overflow","auto")
      })


// end loading

// start navebar

let navLinks= $("#navlinks").innerWidth()
$("#navBar").css("left",-navLinks)
$("#navlinks li").hide();
$("#navIcon").attr("class","fa-solid  fa-2x fa-align-justify")

$("#navIcon").click(function(){
    if ($("#navBar").css("left")=='0px') {
        $("#navBar").animate({left:-navLinks},700)
        $("#navlinks li").slideUp(1000);
        document.getElementById("navIcon").classList.replace("fa-xmark","fa-align-justify")
    }else{
        $("#navBar").animate({left:0},700)
        $("#navlinks li").slideDown(1000)
        document.getElementById("navIcon").classList.replace("fa-align-justify","fa-xmark")
        
    }

})

// end navebar

// Home Search Categories Area Ingredients ContactUs












// start home 
document.addEventListener("readystatechange",async function(){
let homesection= await GetName(bla7)

if(homesection.meals.length>25) {
  homesection.meals.length>25
  for(let i=0;i< homesection.meals.length;i++){
    let picture =  homesection.meals[i].strMealThumb
    let PName = homesection.meals[i].strMeal
    cartona+=`   <div class="div col-md-3">
    <div class="imgContant position-relative ">
      <img class=" img img-fluid" src="${ picture }" alt="one.jpg">
      <div class="hover position-absolute w-100  h-100 d-flex align-items-center ">
        <h2>${PName}</h2>
       
      </div>
    </div>
  </div>`


}
} 
  for(let i=0;i<11;i++){
      let picture =  homesection.meals[i].strMealThumb
      let PName = homesection.meals[i].strMeal
      cartona+=`   <div class="div col-md-3">
      <div class="imgContant position-relative ">
        <img class=" img img-fluid" src="${ picture }" alt="one.jpg">
        <div class="hover position-absolute w-100  h-100 d-flex align-items-center ">
          <h2>${PName}</h2>
         
        </div>
      </div>
    </div>`
  
  
 }
homeM.innerHTML=cartona
})

// end home




// start search


$("#idone").click(function(){
 
  $("#home").css("display","none")
  document.getElementById("search").classList.replace("d-none","d-block")
  document.getElementById("Area").classList.replace("d-block","d-none")
  document.getElementById("Categories").classList.replace("d-block","d-none")
  document.getElementById("Ingredients").classList.replace("d-block","d-none")
  document.getElementById("ContactUs").classList.replace("d-block","d-none")
  $("#navBar").animate({left:-navLinks},700)
  document.getElementById("navIcon").classList.replace("fa-xmark","fa-align-justify")
})









SBName.addEventListener("keyup",async function(ele){
    let searchName = await GetName(ele.target.value)

  

   if(searchName.meals.length>25){
    searchName.meals.length=25
    for(let i=0;i<searchName.meals.length;i++){
        let picture = searchName.meals[i].strMealThumb
        let PName =searchName.meals[i].strMeal
        cartona+=`   <div class="div col-md-3">
        <div class="imgContant position-relative ">
          <img class=" img img-fluid" src="${ picture }" alt="one.jpg">
          <div class="hover position-absolute w-100  h-100 d-flex align-items-center ">
            <h2>${PName}</h2>
           
          </div>
        </div>
      </div>`
    
    }
   }
    Sdesiplay.innerHTML=cartona
})

async function GetName(hambozo) {
    var res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${hambozo}`)
    var finalres = await res.json()
  
    return finalres
}







SBLetter.addEventListener("keyup",async function(ele){
    let searchName = await fName(ele.target.value)

if(searchName.meals.length>25){
    searchName.meals.length=25
        
for(let i=0; i<searchName.meals.length;i++ ){
    let picture = searchName.meals[i].strMealThumb
    let PName =searchName.meals[i].strMeal
    cartona+=`   <div class="div col-md-3">
    <div class="imgContant position-relative ">
      <img class=" img img-fluid" src="${picture}" alt="one.jpg">
      <div class="hover position-absolute w-100  h-100 d-flex align-items-center ">
        <h2>${PName}</h2>
       
      </div>
    </div>
  </div>`

}
}






Sdesiplay.innerHTML=cartona
    console.log(searchName);
})





async function fName(yalla){
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${yalla}`)
let finalresult = await res.json();
return finalresult
}
// end search 

// startCatrogery
$("#idtwo").click(function(){
    
  $("#home").css("display","none")
  document.getElementById("search").classList.replace("d-block","d-none")
  document.getElementById("Categories").classList.replace("d-none","d-block")
  document.getElementById("Area").classList.replace("d-block","d-none")
  document.getElementById("Ingredients").classList.replace("d-block","d-none")
  document.getElementById("ContactUs").classList.replace("d-block","d-none")
  $("#navBar").animate({left:-navLinks},700)
  document.getElementById("navIcon").classList.replace("fa-xmark","fa-align-justify")
})














async function ctgPh() {
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  var finalres = await res.json()

  return finalres
}




document.addEventListener("readystatechange",async function(){
  let cateName = await ctgPh()



 
  for(let i=0;i<cateName.categories.length;i++){
      let picture =cateName.categories[i].strCategoryThumb
      let PName =cateName.categories[i].strCategory
      let prag =cateName.categories[i].strCategoryDescription
      categBox+=`   <div class="div col-md-3 bg-black" onclick="displayCategoryLists('${PName}')">
      <div class="imgContant position-relative overflow-hidden bg-black">
        <img class="  img-fluid" src="${ picture }" alt="one.jpg">
        <div class="hover position-absolute flex-column  h-100 d-flex text-center ">
          <h4>${PName}</h4>
         <p>${prag}</p>
        </div>
      </div>
    </div>`
  
  }
 
 categ.innerHTML=categBox
})

async function displayCategoryLists(info) {
  let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${info}`
  let fristRespons = await fetch(api)
  let finalResponse = await fristRespons.json()
  let finalResponseCategory = finalResponse.meals
  document.getElementById("Categories").classList.replace("d-block", "d-none")
  document.getElementById("Categoriesfood").classList.replace("d-none", "d-block")
  let cartona = ``
  for (let i = 0; i < finalResponseCategory.length; i++) {
      cartona += `<div onclick='displayDetailsOfCategory("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
      <div class="img-content bg- position-relative overflow-hidden rounded-4">
          <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
          <div class="p-2 content-hover w-100 h-100 position-absolute d-flex align-items-center">
              <h2>${finalResponseCategory[i].strMeal}</h2>
          </div>
      </div>
  </div>`
  }
  document.getElementById("responseOfListCategory").innerHTML = cartona
}

function displayDetailsOfCategory(info) {
  document.getElementById("Categoriesfood").classList.replace("d-block", "d-none")
  document.getElementById("Categoriesfooddetails").classList.replace("d-none", "d-block")

  fetchDisplayDetailsOfCategoryApi(info)
}
async function fetchDisplayDetailsOfCategoryApi(info) {
  let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
  let fristRespons = await fetch(api)
  let finalResponse = await fristRespons.json()
  let finalResponseCategory = finalResponse.meals

  let cartona = `<div class="col-md-4 text-white">
  <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
  <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
</div>
<div class="col-md-8 text-white">
  <h2>Instructions</h2>
  <p>${finalResponseCategory[0].strInstructions}</p>
  <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
  <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
  <p class="fs-2">Recipes :<span class="d-flex">
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>

      </span></p>
  <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
  <div>
      <button class="btn btn-success">Source</button>
      <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
  </div>
</div>`
document.getElementById("detailsResponse").innerHTML = cartona

}



// End category

// start area
$("#idthree").click(function(){
    
  $("#home").css("display","none")
  document.getElementById("search").classList.replace("d-block","d-none")
  document.getElementById("Categories").classList.replace("d-block","d-none")
  document.getElementById("Area").classList.replace("d-none","d-block")
  document.getElementById("Ingredients").classList.replace("d-block","d-none")
  document.getElementById("ContactUs").classList.replace("d-block","d-none")
  $("#navBar").animate({left:-navLinks},700)
  document.getElementById("navIcon").classList.replace("fa-xmark","fa-align-justify")
})




async function area() {
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  var finalres = await res.json()

  return finalres
}




document.addEventListener("readystatechange",async function(){
  let areaName = await area()



 
  for(let i=0;i<areaName.meals.length;i++){
    
      let PName =areaName.meals[i].strArea
     
      areaBox+=`<div class="div col-md-6 col-lg-6 col-xl-3" onclick='displayAreaLists("${PName}")'>
      <div class="div text-white text-center">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h2>${PName}</h2>
      </div>
    </div>`
  
  }
 
  areaM.innerHTML=areaBox
})


async function displayAreaLists(info) {
  let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${info}`
  let fristRespons = await fetch(api)
  let finalResponse = await fristRespons.json()
  let finalResponseCategory = finalResponse.meals
  document.getElementById("Area").classList.replace("d-block", "d-none")
  document.getElementById("foodsInArea").classList.replace("d-none", "d-block")
  let cartona = ``
  for (let i = 0; i < finalResponseCategory.length; i++) {
      cartona += `<div onclick='displayDetailsOfArea("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
      <div class="  position-relative img-content overflow-hidden rounded-4">
          <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
          <div class="p-2 content-hover w-100 h-100 position-absolute d-flex align-items-center">
              <h2>${finalResponseCategory[i].strMeal}</h2>
          </div>
      </div>
  </div>`
  }
  document.getElementById("areaResponse").innerHTML = cartona
}

function displayDetailsOfArea(info) {
  document.getElementById("foodsInArea").classList.replace("d-block","d-none")
  document.getElementById("foodDetailsarea").classList.replace("d-none", "d-block")

  DisplayDetailsOfAreaApi(info)
}

async function DisplayDetailsOfAreaApi(info) {
  let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
  let fristRespons = await fetch(api)
  let finalResponse = await fristRespons.json()
  let finalResponseCategory = finalResponse.meals
  

  let cartona = `<div class="col-md-4 text-white">
  <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
  <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
</div>
<div class="col-md-8 text-white">
  <h2>Instructions</h2>
  <p>${finalResponseCategory[0].strInstructions}</p>
  <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
  <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
  <p class="fs-2">Recipes :<span class="d-flex">
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>

      </span></p>
  <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
  <div>
      <button class="btn btn-success">Source</button>
      <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
  </div>
</div>`
document.getElementById("responseOfAreaDetails").innerHTML = cartona

}







// end area


// START INGRADIENT

$("#idfour").click(function(){
    
  $("#home").css("display","none")
  document.getElementById("search").classList.replace("d-block","d-none")
  document.getElementById("Categories").classList.replace("d-block","d-none")
  document.getElementById("Area").classList.replace("d-block","d-none")
  document.getElementById("Ingredients").classList.replace("d-none","d-block")
  document.getElementById("ContactUs").classList.replace("d-block","d-none")
  $("#navBar").animate({left:-navLinks},700)
  document.getElementById("navIcon").classList.replace("fa-xmark","fa-align-justify")
})










async function ingre() {
  var res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  var finalres = await res.json()

  return finalres
}




document.addEventListener("readystatechange",async function(){
  let ingrName = await ingre()


if(ingrName.meals.length>20){
  ingrName.meals.length=20;
  for(let i=0;i<10;i++){
    
    let h222 =ingrName.meals[i].strIngredient
   let praaa =ingrName.meals[i].strDescription.slice(0,100)
    ingreadBox+=`  <div class="div col-md-6 col-lg-6 col-xl-3" onclick='displayIngredientsLists("${h222}")'>
    <div class="div text-white text-center">
      <i class="fa-solid fa-drumstick-bite fa-4x"></i>
      <h2>${h222}</h2>
      <p>${praaa}</p>
    </div>
  </div>`

}
}
 
 
 
  ingradient.innerHTML=ingreadBox
})

async function displayIngredientsLists(info) {
  let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${info}`
  let fristRespons = await fetch(api)
  let finalResponse = await fristRespons.json()
  let finalResponseCategory = finalResponse.meals
  document.getElementById("Ingredients").classList.replace("d-block", "d-none")
  document.getElementById("foodsIngredients").classList.replace("d-none", "d-block")
  let cartona = ``
  for (let i = 0; i < finalResponseCategory.length; i++) {
      cartona += `<div onclick='displayDetailsOfIngredients("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
      <div class="dish bg- position-relative overflow-hidden rounded-4">
          <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
          <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
              <h2>${finalResponseCategory[i].strMeal}</h2>
          </div>
      </div>
  </div>`
  }
  document.getElementById("ingredientMealsResponse").innerHTML = cartona
}

function displayDetailsOfIngredients(info) {
  document.getElementById("foodsIngredients").classList.replace("d-block", "d-none")
  document.getElementById("detailsFoodsIngredients").classList.replace("d-none", "d-block")

  fetchDisplayDetailsOfIngredientsApi(info)
}

async function fetchDisplayDetailsOfIngredientsApi(info) {
  let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
  let fristRespons = await fetch(api)
  let finalResponse = await fristRespons.json()
  let finalResponseCategory = finalResponse.meals

  let cartona = `<div class="col-md-4 text-white">
  <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
  <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
</div>
<div class="col-md-8 text-white">
  <h2>Instructions</h2>
  <p>${finalResponseCategory[0].strInstructions}</p>
  <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
  <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
  <p class="fs-2">Recipes :<span class="d-flex">
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
          <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>

      </span></p>
  <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
  <div>
      <button class="btn btn-success">Source</button>
      <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
  </div>
</div>`
document.getElementById("detailsFoodsInIngredientsResponse").innerHTML = cartona

}








// contactsection

$("#idfive").click(function(){
    
  $("#home").css("display","none")
  document.getElementById("search").classList.replace("d-block","d-none")
  document.getElementById("Categories").classList.replace("d-block","d-none")
  document.getElementById("Area").classList.replace("d-block","d-none")
  document.getElementById("Ingredients").classList.replace("d-block","d-none")
  document.getElementById("ContactUs").classList.replace("d-none","d-block")
  $("#navBar").animate({left:-navLinks},700)
  document.getElementById("navIcon").classList.replace("fa-xmark","fa-align-justify")
})

document.addEventListener("keyup" , submitBtn)

let nameInput = document.getElementById("nInput"),
    nameAlert = document.getElementById("nameAlert"),
    emailInput = document.getElementById("eInput"),
    emailAlert = document.getElementById("emailAlert"),
    phoneInput = document.getElementById("phInput"),
    phoneAlert = document.getElementById("phoneAlert"),
    ageInput = document.getElementById("agInput"),
    ageAlert = document.getElementById("ageAlert"),
    passwordInput = document.getElementById("psInput"),
    passwordAlert = document.getElementById("passwordAlert"),
    repasswordInput = document.getElementById("repInput"),
    repasswordAlert = document.getElementById("repasswordAlert");

function nameValidation() {
    let nameRegex = /^[a-z\sA-Z]+$/
    if (nameRegex.test(nameInput.value) == true) {
        nameAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        nameAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function emailValidation() {
    let emailRegex = /^[a-zA-Z0-9]+[@][a-z]+[.][a-z]+$/
    if (emailRegex.test(emailInput.value) == true) {
        emailAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        emailAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function phoneValidation() {
    let phoneRegex = /^[0-9]{11}$/
    if (phoneRegex.test(phoneInput.value) == true) {
        phoneAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        phoneAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function ageValidation() {
    let ageRegex = /^([1-7][0-9]{1}|80)$/
    if (ageRegex.test(ageInput.value) == true) {
        ageAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        ageAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function passValidation() {
    let passRegex = /^[\w]{8,20}$/
    if (passRegex.test(passwordInput.value) == true) {
        passwordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        passwordAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function reepassValidation() {
    if (repasswordInput.value == passwordInput.value) {
        repasswordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        repasswordAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function submitBtn() {
    if (nameValidation() == true && emailValidation() == true && phoneValidation() == true && ageValidation() == true &&
        passValidation() == true && reepassValidation() == true) {
        document.getElementById("submitBtn").removeAttribute("disabled"); 
    } else {
        document.getElementById("submitBtn").setAttribute("disabled" , "true"); 

    }
}

