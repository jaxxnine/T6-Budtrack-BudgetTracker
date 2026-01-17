function addCategory() {
    let newCategory = [
        model.viewState.category.name,
        model.viewState.category.color
    ]
  
    model.viewState.category.name = ""
    model.viewState.category.color = "#ffffff"

    model.users[model.app.userID].categories.push(newCategory)

    goTo('addTransaction')
}
