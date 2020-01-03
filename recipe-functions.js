// Read existing recipes from localStorage

const getSavedRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')

    if (recipesJSON !== null) {
        return JSON.parse(recipesJSON)
    } else {
        return []
    }
}

// Saving recipes to localStorage
const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

// To remove a recipe 
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex(recipe => recipe.id === id)    

    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
    }
}

// Generating DOM structure for a recipe
const generateRecipeDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const textEl = document.createElement('p')
    const ingredientsEl = document.createElement('p')

    // Setup the recipe title text
    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unnamed Recipe'
    }
    textEl.classList.add('list-item__title')
    recipeEl.appendChild(textEl)

    // Setup the link
    recipeEl.setAttribute('href', `/edit.html#${recipe.id}`)
    recipeEl.classList.add('list-item')

    // Setup the ingredients text
    if (recipe.ingredients.length > 0) {
        ingredientsEl.textContent = recipe.ingredients
    } else {
        ingredientsEl.textContent = 'Add ingredients'
    }
    ingredientsEl.classList.add('list-item__subtitle')
    recipeEl.appendChild(ingredientsEl)

    return recipeEl
}

// Render application recipes
const renderRecipes = (recipes, filters) => {
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase())) 
    document.querySelector('#recipes').innerHTML = ''

    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const recipeEl = generateRecipeDOM(recipe)
            document.querySelector('#recipes').appendChild(recipeEl)
        })
    } else {
        const message = document.createElement('h2')
        message.textContent = 'You do not have any recipes to show'
        message.classList.add('empty-message')
        document.querySelector('#recipes').appendChild(message)
    }
}
