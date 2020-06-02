import ABC from './models/Budget.js';
import UI from './views/UI.js';



const state={}

window.state=state;



window.addEventListener("load", e=>{
	state.budget1=new ABC();
	state.ui=new UI();



})


document.addEventListener("keypress",e=>{
	if(e.which===13){
		controlItem();
	}
})

function controlItem(){
	let data=state.ui.getData();
		if(data.type!=="" && data.description!=="" && data.value!==""){
				if(data.type==="inc"){	
			controlAddIncome(data);
		}else if(data.type==="exp"){
			controlAddExpense(data)
          }

		state.budget1.calculateBalance();
		state.ui.showTotalBalance(state.budget1.totalBalance);
		let totalPercentage=state.budget1.calculatePercentage();
		state.ui.showTotalPercentageToDOM(totalPercentage);
		}else{
			state.ui.addMessage("error","Please insert all fields");
		}
		state.ui.clearData();
}


function controlAddIncome(data){
		let newIncome=state.budget1.addNewIncome(data.description,parseInt(data.value));
		state.ui.addIncomeToDOM(newIncome);
		state.budget1.calculateTotalIncome();
		state.ui.showTotalIncomeToDOM(state.budget1.totalIncome);

		console.log(state.budget1.totalIncome)
		state.ui.addMessage("income","Added an income");
		
}

function controlAddExpense(data){
		let newExpense=state.budget1.addNewExpense(data.description,parseInt(data.value));
		state.ui.addExpenseToDOM(newExpense);
		console.log(state.budget1.totalExpense)
		state.budget1.calculateTotalExpenses();
		state.ui.showTotalExpenseToDOM(state.budget1.totalExpense);
		state.ui.addMessage("error","Added an expense");
}


document.querySelector(".add__btn").addEventListener("click", e=>{
		controlItem();

})


document.querySelector(".add__type").addEventListener("change",e=>{
		state.ui.changeColor(e.target.value);
})



document.querySelector(".income__list").addEventListener("click", e=>{
	const id=e.target.closest(`.income`).dataset.id;
	if(e.target.matches(`.ion-ios-close-outline`)){
			state.budget1.deleteIncome(id);
			state.ui.deleteFromDom(id);
			state.budget1.calculateTotalIncome();
			state.ui.showTotalIncomeToDOM(state.budget1.totalIncome);
			state.budget1.calculateBalance();
			state.ui.showTotalBalance(state.budget1.totalBalance);
			let totalPercentage=state.budget1.calculatePercentage();
			state.ui.showTotalPercentageToDOM(totalPercentage);
	}
})

document.querySelector(".expenses__list").addEventListener("click", e=>{
	const id=e.target.closest(`.expense`).dataset.id;
	if(e.target.matches(`.ion-ios-close-outline`)){
			state.budget1.deleteExpense(id);
			state.ui.deleteFromDomExpense(id);
			state.budget1.calculateTotalExpenses();
			state.ui.showTotalExpenseToDOM(state.budget1.totalExpense);
			state.budget1.calculateBalance();
			state.ui.showTotalBalance(state.budget1.totalBalance);
			let totalPercentage=state.budget1.calculatePercentage();
			state.ui.showTotalPercentageToDOM(totalPercentage);
	}
})