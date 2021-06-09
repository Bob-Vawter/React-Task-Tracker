const Button = ({ color, text, onClick}) => {
    const buttonStyle = {
        backgroundColor: color,
    }
    // const onClick = (e) => {
    //     console.log(`click ${text}`)
    //     // console.log(e)
    // }
    return <button
        onClick={onClick}
        style={buttonStyle}
        className='btn'>
        {text}</button>
}

Button.defaultProps = {
    color: 'black',
    text: 'Add'
}

export default Button
