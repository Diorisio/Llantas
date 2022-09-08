
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

export default function Grafica_total_gases({gases})
{

    const data = {
        
        labels: gases.map(u=>u.createdAt),
        datasets: [{
            label: 'CO',
            data: gases.map(u=>u.sensorCO),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'CO2',
            data: gases.map(u=>u.sensorCO2),
            fill: false,
            borderColor: 'rgb(75, 192, 100)',
            tension: 0.1
          }
        ]
        }


      var options = {
        responsive:false,
        scales: {
            y: {
                title:{
                    display:true,
                    text:'Partes por millon (ppm)'
                }
            }
          }  
      }
      
    return(
    <div>
    <h2>Historial de muestras</h2>
        <Line
         data={data}
         width="400px"
         height="400px"
         className='line-grafica'

        options={options}
        />
    </div>
    
    
    )
}