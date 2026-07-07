export default function ArrayOfJoke(){
    const jokes=[
        {
            setup : "Why don’t programmers like nature?",
            punchline : "It has too many bugs."
        },
        {
            setup : "Why did the student eat his homework?",
            punchline : " Because the teacher said it was a piece of cake."
        },
        {
            setup : "Why don’t skeletons fight each other?",
            punchline : " They don’t have the guts."
        }
    ]
    // In .map() function second parameter is always reserved for index of an array
    return (
        <div>
            {jokes.map((joke, index) => (
                <div key={index}>
                    <h3>{joke.setup}</h3>
                    <p>{joke.punchline}</p>
                </div>
            ))}
        </div>
    );
}