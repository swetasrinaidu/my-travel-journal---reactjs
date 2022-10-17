import data from '../data'
import Card from './Card'

export default function CardList(){
    const newData = data.map(el=>{
        return(<Card key={el.id} 
                     {...el}/>)
    })
    return(
        <div className="cardlist">
           {newData}
        </div>
    )
}