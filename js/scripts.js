const gridContainer = document.getElementById('grid-container')

for (let i = 0 ; i < 100 ; i++){

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.addEventListener('click',
    // newCell.append(i)

    function (){
        // console.log(this)

        if(newCell.classList.contains('clicked')){
            newCell.classList.remove('clicked')
        }else{
            newCell.classList.add('clicked')
            console.log()
        }
    }


    )

    gridContainer.append(newCell)
}

