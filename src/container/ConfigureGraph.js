import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'

class ConfigureGraph extends Component {

    //create graph reducer
     state = {
        labels: ['Beer', 'Seltzer', 'Craft',
                 'Wine', 'Shots', 'Mixed'],
        datasets: [
          {
            backgroundColor: [ 
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [12, 19, 3, 5, 5, 3]

          }]
      }
    render() {
        return (
            <div>
                <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Cumulative Drinks',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
            </div>
        )
    }
}

export default ConfigureGraph
