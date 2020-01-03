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
    const recipeEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    button.textContent = 'Remove'
    recipeEl.appendChild(button)
    button.addEventListener('click',(e) => {
        removeRecipe(recipe.id)
        saveRecipes(recipes)
        renderRecipes(recipes, filters)
    })

    if (recipe.title.length > 0) {
        textEl.textContent = recipe.title
    } else {
        textEl.textContent = 'Unnamed Recipe'
    }

    textEl.setAttribute('href', `/edit.html#${recipe.id}`)

    recipeEl.appendChild(textEl)

    return recipeEl
}

// Render application recipes
const renderRecipes = (recipes, filters) => {
    const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    document.querySelector('#recipes').innerHTML = ''

    filteredRecipes.forEach(recipe => {
        const recipeEl = generateRecipeDOM(recipe)
        document.querySelector('#recipes').appendChild(recipeEl)
    });
}
