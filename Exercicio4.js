let faturamento={
    'SP':67836.43,
    'RJ':36678.66,
    'MG':29229.88,
    'ES':27165.48,
    'Outros':19849.53,
}
const total=Object.values(faturamento).reduce((sum,current)=>{
    return sum+current;
},0);
let representation=0;
for(const [state,profit] of Object.entries(faturamento)){
    representation=profit/total*100;
    console.log(`${state}: ${representation.toFixed(2)}%`);
}