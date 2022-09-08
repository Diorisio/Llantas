
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
  
  function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // la hora  '0' debe ser '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return (strTime)
  }

export default function Gases_grafica({gases}){
  
    
    const dataco2=[]
    const dataco=[]
    const hora=[]
    if (gases.length!=0) {

        for (let i = gases.length-1; i >=(gases.length-10) ; i--) {
            dataco2.push(gases[i].sensorCO2)
            dataco.push(gases[i].sensorCO)
            hora.push(formatDate(new Date(gases[i].updatedAt)))
        }

    }
    
    
    const data = {
        
        labels: hora.reverse(),
        datasets: [{
            label: 'CO2',
            data: dataco2.reverse(),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'CO',
            data: dataco.reverse(),
            fill: false,
            borderColor: 'rgb(75, 192, 0)',
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
        <h2>Muestras tomadas por min</h2>
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