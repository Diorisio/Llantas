
import {Line} from 'react-chartjs-2'
import {  
    Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

export default function Grafica_lineal(){
    const data = {
        labels: ['Enero', 'February', 'March', 'April', 'May', 'June', 'July','augusto'],
        datasets: [{
            label: 'Llantas recogidas',
            data: [50,90, 59, 80, 81, 56, 55, 40,80],
            
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        }


      var options = {
        responsive:false
      }
   
    return(
        <>
        <Line
         data={data}
         width="400px"
         height="400px"
         className='line-grafica'

        options={options} 
            
            
        />
        </>
    )
}