import * as React from 'react';
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

  import dashboardservices from '../../services/dashboard-services';

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

    return (date.getDate()) + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
  }

export default function Grafica_lineal(){
  const [actllantas, setllantas] = React.useState([]);

  React.useEffect(()=>{

    const llantas=async()=>{
      try {
          const llantas=await dashboardservices.llantas();
          setllantas(llantas.data)

      } catch (error) {
        
      }
    }
    llantas()

  },[])

    const recogidas=[]
    const registradas=[]
    const fecha_recogidas=[]
    const fecha_registradas=[]

     if (actllantas.allrecogida!==undefined) {

        for (let i = 0; i <actllantas.allrecogida.length ; i++) {
          recogidas.push(actllantas.allrecogida[i].cantidad)
          fecha_recogidas.push(formatDate(new Date(actllantas.allrecogida[i].createdAt))) 
        }

        for (let i = 0; i <actllantas.allregistradas.length ; i++) {
          registradas.push(actllantas.allregistradas[i].cantidad)
          fecha_registradas.push(formatDate(new Date(actllantas.allregistradas[i].createdAt))) 
        }
      } 
    

    const data = {
        labels: fecha_recogidas,
        datasets: [{
            label: 'Llantas recogidas',
            data: recogidas,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
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