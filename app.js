const tipoInput = document.querySelector('#input-tipo');
const montoInput =  document.querySelector('#input-monto');
const guardarBtn = document.querySelector('#btn-guardar');

const gastosList = document.querySelector('#list-gastos');
const totalOutput = document.querySelector('#output-total');
let total = 0;

function clear(){
    
    tipoInput.value = '';
    montoInput.value = '';
};

guardarBtn.addEventListener('click',()=>{
    /* Este codigo se ejecutara cuando se de clic al boton */
    const tipo = tipoInput.value;
    const monto = montoInput.value;
    /* Aqui agregaremos algunas validaciones */
    if(tipo.trim().length>0 && monto.trim().length>0 && monto>0){
        //VALORES VALIDOS
        console.log('Valores validos');

        /* Agregaremos el gasto a el listado de los gastos */
        const newItem = document.createElement('ion-item');
        newItem.textContent = tipo + ': $' + monto;
        gastosList.appendChild(newItem);

        /* Totalizaremos los gastos */
        total+=+monto;
        totalOutput.textContent = total;
        clear();

    }
    else{
        //VALORES INVALIDOS
        alertController.create({
            message:'Llene los campos correctamente',
            header: 'Valores invalidos',
            buttons:['OK']
        }).then(alertElement=>{
            alertElement.present();
        });
    }
});