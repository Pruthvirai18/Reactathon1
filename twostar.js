function Twostar(props) //props holding 2 things sent from App.js
{
    return(
        <>
        <h1>Two star student ISE 3A Detail</h1>
        <h2>{props.name}</h2>
        <p>{props.star}</p>
       
        </>
    )
}
export default Twostar