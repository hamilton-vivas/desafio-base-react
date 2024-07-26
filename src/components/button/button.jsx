import './button.css'

 const Button = (props) => {
     return <button className='btn' onClick={() => alert(`A label deste botão é: ${props.label}`)}>{props.label}</button>
 }

export default Button
