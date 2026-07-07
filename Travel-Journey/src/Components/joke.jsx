function Joke({setup, punchline,upvotes,isPun}){
    return(
        <>
            {setup && <h2>Setup: {setup}</h2>}
            <h2 style = {{'font-weight': 'normal'}}>Punchline: {punchline}</h2>
            <p>Upvotes: {upvotes}</p>
            <p>isPun: {isPun ? "True" : "False"}</p>
            <hr />
        </>
    )
}
export default Joke
// setup && tells if setup is present then only it will show the setup otherwise it will not show the setup