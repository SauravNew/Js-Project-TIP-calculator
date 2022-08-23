const btn = document.getElementById('calculate');

btn.addEventListener('click',function(){
    let BillValue = document.getElementById('BillValue').value ;
    let tipValue = document.getElementById('tipValue').value ;

    let TipAmount = document.getElementById('Tip_perc').innerHTML = (BillValue/100) * tipValue;
    let TotalAmount = document.getElementById('Total_Amount').innerHTML = parseInt(TipAmount) + parseInt(BillValue);
})