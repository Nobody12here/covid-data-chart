import  Chart  from 'chart.js/auto';
import { Bar,Line } from 'react-chartjs-2';

function VerticalChart({data}){
  

 const datasets = 
  data.map((items) => {
    return {
      label:['Cases'],
      data: [items.cases.total, items.cases.active,items.cases.recovered],
      backgroundColor: ["rgba(255, 99, 132, 0.5)","rgba(120, 99, 132, 0.5)","rgba(255, 129, 50, 0.5)"],
    };
  });

	const Data={
    labels:['Total Cases','Active','Recovered'],
    datasets:datasets
  }
  
  return(
  	 <Bar data={Data} 
     options={{legend:{display:false}}}>
     </Bar>
  	)
}

function LineChart({data}){

}

export  {VerticalChart};