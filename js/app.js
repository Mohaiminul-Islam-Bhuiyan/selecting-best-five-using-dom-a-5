const selectedPlayersArray =[];

function displaySelection(allPlayers){
    const tableBody = document.getElementById('display-selected-players');

    tableBody.innerHTML = '';
    for (let i = 0; i < allPlayers.length; i++){
        const name = selectedPlayersArray[i];

        const tr = document.createElement('tr');
        
        tr.innerHTML = 
        `
        <th scope="row">${i+1}</th>
        <td>${name}</td>
        `

        tableBody.appendChild(tr);
        
   
}
}


function selectPlayer(element){
    const playerName = element.parentNode.children[0].innerText;

    if (selectedPlayersArray.length > 4){
        alert('only 5 players can be added')
    }
    else{
        selectedPlayersArray.push(playerName);
    }

    element.disabled = true;

    displaySelection(selectedPlayersArray)
}