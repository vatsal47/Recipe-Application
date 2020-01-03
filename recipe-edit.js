// Get id from URL hash
const recipeId = location.hash.substring(1)

let recipes = getSavedRecipes()
let recipe = recipes.find(recipe => recipe.id === recipeId)

if (recipe === undefined) {
    location.assign('/index.html')
}

const titleElement = document.querySelector('#recipe-title') 
titleElement.value = recipe.title
titleElement.addEventListener('input', (e) => {
    recipe.title = e.target.value
    saveRecipes(recipes)
})

const ingredientsElement = document.querySelector('#ingredients')
ingredientsElement.value = recipe.ingredients
ingredientsElement.addEventListener('input', (e) => {
    recipe.ingredients = e.target.value
    saveRecipes(recipes)
})

const processElement  = document.querySelector('#recipe-process')
processElement.value = recipe.process
processElement.addEventListener('input', (e) => {
    recipe.process = e.target.value
    saveRecipes(recipes)
})

const removeElement  = document.querySelector('#remove-recipe')
removeElement.addEventListener('click', () => {
    removeRecipe(recipe.id)
    saveRecipes(recipes)
    location.assign('./index.html')
})

// For data-syncing
window.addEventListener('storage', (e) => {
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