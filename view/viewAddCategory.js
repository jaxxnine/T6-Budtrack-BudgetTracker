function updateViewCategory() {
    html = '';
    const app = document.getElementById("app")

    html += /*HTML*/`
        <h2 id="dashboardHeader">Add Category</h2>
        <br>

    
    
        ${viewNavBar()}
        <p></p>
        <div class="transactionBars" id="transactionBars">
    `
    

    html += /*HTML*/`
    <div class="transactionBar">
        <p>name: <input value="${model.viewState.category.name}" onchange="model.viewState.category.name = this.value" type="text" /></td>
        <p>color: <input value="${model.viewState.category.color}" onchange="model.viewState.category.color = this.value" type="color" /></td>


        <p><button onclick="addCategory()" class="add-btn">Add category</button></td>
    </div>
    `




    html += /*HTML*/`
        </div>
    `


    app.innerHTML = html;
}
