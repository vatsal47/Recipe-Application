const recipeId = location.hash.substring(1)
let recipes = getSavedRecipes()

let recipe = recipes.find(function (recipe) {
    return recipe.id === recipeId
})

if (recipe === undefined) {
    location.assign('/index.html')
}

const titleElement = document.querySelector('#recipe-title') 
titleElement.value = recipe.title
titleElement.addEventListener('input', function (e) {
    recipe.title = e.target.value
    saveRecipes(recipes)
})

const ingredientsElement = document.querySelector('#ingredients')
ingredientsElement.value = recipe.ingredients
ingredientsElement.addEventListener('input', function (e) {
    recipe.ingredients = e.target.value
    saveRecipes(recipes)
})

const processElement  = document.querySelector('#recipe-process')
processElement.value = recipe.process
processElement.addEventListener('input', function (e) {
    recipe.process = e.target.value
    saveRecipes(recipes)
})

const removeElement  = document.querySelector('#remove-recipe')
removeElement.addEventListener('click', function (e) {
    removeRecipe(recipe.id)
    saveRecipes(recipes)
    location.assign('./index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'recipes') {
        notes = JSON.parse(e.newValue)
    }

    recipe = recipes.find(function (recipe) {
        return recipe.id === recipeId
    })
    
    if (recipe === undefined) {
        location.assign('/index.html')
    }

    titleElement.value = recipe.title
    ingredientsElement.value = recipe.ingredients
    processElement.value = recipe.process
})