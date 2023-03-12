// Write your code here
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <div className="age-container">
      <h1 className="heading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#fecba6" />
            <Cell name="44-60" fill="#b3d23f" />
            <Cell name="above 60" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
