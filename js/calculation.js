// calculating player expense 

document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerCost = getInputValueById('per-player-cost');
    console.log(perPlayerCost)
    const totalPlayers = selectedPlayersArray.length;

    if (Math.sign(perPlayerCost) === -1){
        alert('Enter a valid number')
        return;
    }

    else{
    const playerExpense = perPlayerCost * totalPlayers;
    const playerExpenseInitial = getTextElementValueById('player-expense');
    
    setTextElementValueById('player-expense', playerExpense);
}
})

// calculating total expense 

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    const playerExpenseValue = getTextElementValueById('player-expense')
    console.log(managerCost, coachCost)
    if (Math.sign(managerCost) === -1 || Math.sign(coachCost) === -1){
        alert('Enter a valid number')
        return;
    }
    else{
    const total = playerExpenseValue + managerCost + coachCost;


    const initialTotal = getTextElementValueById('total');

    setTextElementValueById('total', total);
}
})
