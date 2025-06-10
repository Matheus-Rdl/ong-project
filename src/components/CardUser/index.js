import './CardUser.css'

const CardUser = (props) => {
    return (
        <div className='card-register'>
            <h1>{props.title}</h1>
            <p className='card-quantify'>Total: {props.quantify}</p>
        </div>
    )
}

export default CardUser