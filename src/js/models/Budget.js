var ID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

export default class ABC {
	constructor() {
		this.incomes=[];
		this.expenses=[];
		this.totalIncome=0;
		this.totalExpense=0;
		this.totalBalance=0;
	}

	addNewIncome(description,value){
		let newIncome={
			id:ID(),
			description,
			value
		}

		this.incomes.push(newIncome);
		return newIncome;
	}

	deleteIncome(id){
		const findIndex=this.incomes.findIndex(el=>el.id===id);
		this.incomes.splice(findIndex,1);
	}

	deleteExpense(id){
			const findIndex=this.expenses.findIndex(el=>el.id===id);
		this.expenses.splice(findIndex,1);
	}

		addNewExpense(description,value){
		let newExpense={
			id:ID(),
			description,
			value
		}

		this.expenses.push(newExpense);
		return newExpense;
	}

	calculateTotalIncome(){
		let total=0;
		this.incomes.forEach(income=>{
			total+=income.value;
		})
		this.totalIncome=total;
		
	}

	calculateTotalExpenses(){
		let total=0;
		this.expenses.forEach(expense=>{
			total+=expense.value;
		})
		this.totalExpense=total;
		
	}

	calculateBalance(){
	
		this.totalBalance=this.totalIncome-this.totalExpense;
	}

	calculatePercentage(){
		
		let total=Math.round((this.totalExpense/this.totalIncome)*100);

		if(this.totalExpense<=this.totalIncome){
			return total;
		}else{
			return `over limit`;
		}

		if(total===0){
			return 0;
		}
		
	}

	getBudgetIncome(){
		return this.budgetIncome;
	}

}