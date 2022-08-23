// calculating player expense 

document.getElementById('btn-calculate').addEventListener('click',function(){
    const perPlayerCost = getInputValueById('per-player-cost');
    console.log(perPlayerCost)
    const totalPlayers = selectedPlayersArray.length;
    const playerExpense = perPlayerCost * totalPlayers;
    const playerExpenseInitial = getTextElementValueById('player-expense');
    
    setTextElementValueById('player-expense', playerExpense);
})

// calculating total expense 

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    console.log(managerCost, coachCost)

    
    const total = getTExtElementValueById('total')
})
