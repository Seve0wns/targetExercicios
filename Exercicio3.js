const data=require('./Exercicio3_MOCK_DATA.json');
const sales=data.sales.janeiro;
const businessDaysSales=sales.filter(value=>!!value);
const mean=businessDaysSales.reduce((sum,current)=>sum+current)/businessDaysSales.length;
let lowest=null,highest=null,overMeanDays=0;
sales.forEach(value=>{
    if(value){
        if(!lowest||value<lowest) lowest=value;
        if(!highest||value>highest) highest=value;
        if(value>mean) overMeanDays++;
    }
})
console.log(`O menor faturamento foi de R$${lowest}`);
console.log(`O maior faturamento foi de R$${highest}`);
console.log(`A média foi de R$${mean.toFixed(2)} e ${overMeanDays} dias faturaram acima dela`);