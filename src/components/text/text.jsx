import './text.css'

const Text = (props) => {
    return (
        <div className='text'>
            <h3>Desafio Base React</h3>
            <p style={{color: '#f00', textTransform: 'uppercase'}} >{props.text}</p>
        </div> 
    )
}

export default Text
