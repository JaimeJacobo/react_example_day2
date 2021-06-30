import './Card.css';


const Card = (props)=>{

    return(
      <div>
        {
          props.propsPeople.map((person)=>{
            return(
              <div className={'cardStyle ' + (person.student ? "student" : "notStudent")}>
                <p>{person.name}</p>
              </div>
            ) 
          })
        }
      </div>  
    )
}


export default Card