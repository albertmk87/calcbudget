


export default class UI {
	constructor(){
		this.budgetIncomeValue=document.querySelector(".budget__income--value");
		this.budgetExpensePercentage=document.querySelector(".budget__expenses--percentage");
		this.budgetExpenseValue=document.querySelector(".budget__expenses--value");
		this.budgetExpensePercentage=document.querySelector(".budget__expenses--percentage");
		this.addType=document.querySelector(".add__type");
		this.description=document.querySelector(".add__description");
		this.value=document.querySelector(".add__value");
		this.addBtn=document.querySelector(".add__btn");
		this.incomeDOM=document.querySelector(".income__list");
		this.expenseDOM=document.querySelector(".expenses__list");
		this.alerts=document.querySelector(".alerts");
		this.totalBudgetBalance=document.querySelector(".budget__value");
	}

	getData(){
	
		let type = this.addType.options[this.addType.selectedIndex].value;
		let description=this.description.value;
		let value=this.value.value;
		return {
			type,
			value,
			description
		}
	}

	clearData(){
		this.description.value="";
		this.value.value="";

	}

	clearAlert(){
		let alert=document.querySelector(".alert");
		if(alert){
			alert.remove();
		}
	}

	addMessage(type,message){
		this.clearAlert();
		if(type==="error"){
			const markUP=`
			<div class="alert danger"> ${message}</div>
			`
			this.alerts.insertAdjacentHTML("beforeend", markUP);
		}else if(type==="income"){
			const markUP=`
			<div class="alert success"> ${message}</div>
			`
			this.alerts.insertAdjacentHTML("beforeend", markUP);
		}

		setTimeout(()=>{
				this.clearAlert();
		},3000)
	}

	addIncomeToDOM(income){
		let markUP=`
						<div class="item clearfix income" data-id="${income.id}">
                            <div class="item__description">${income.description}</div>
                            <div class="right clearfix">
                                <div class="item__value">+ ${income.value}</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>

		`
		this.incomeDOM.insertAdjacentHTML("beforeend", markUP);
	}

	addExpenseToDOM(expense){
		let markUP=`
						 <div class="item clearfix expense" data-id="${expense.id}">
                            <div class="item__description">${expense.description}</div>
                            <div class="right clearfix">
                                <div class="item__value">- ${expense.value}</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>
		`
		this.expenseDOM.insertAdjacentHTML("beforeend", markUP);
	}

	deleteFromDom(id){
		let elToBeDeleted=document.querySelector(`.income[data-id="${id}"]`);
		elToBeDeleted.parentElement.removeChild(elToBeDeleted);
	}

	deleteFromDomExpense(id){
		let elToBeDeleted=document.querySelector(`.expense[data-id="${id}"]`);
		elToBeDeleted.parentElement.removeChild(elToBeDeleted);
	}

	showTotalIncomeToDOM(total){
		this.budgetIncomeValue.innerHTML=`${total}$`;
	}
	showTotalExpenseToDOM(total){
		this.budgetExpenseValue.innerHTML=`${total}$`;
	}


	showTotalBalance(total){
			this.totalBudgetBalance.innerHTML=`${total}$`;
	}

	showTotalPercentageToDOM(percentage){
		this.budgetExpensePercentage.innerHTML=`${percentage}%`;
	}

	changeColor(type){
		if(type==="inc"){
			this.addBtn.style.color="#28B9B5";

		}else if(type==="exp"){
			this.addBtn.style.color="red";

				
			
		}

			this.description.classList.toggle("red-focus");
			this.addType.classList.toggle("red-focus");
			this.value.classList.toggle("red-focus");
	}
}