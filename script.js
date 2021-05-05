const someResultsContainer = document.getElementById('some-results')
const fetchPostsButton = document.getElementById('fetch-posts')


axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => {  //here we are naming our response object.
    //console.log(response)
    setPosts(response.data) //call the setPosts function, passing in the response data as an argument.
})

function setPosts(data) { //the data is passed from the axios request, and then mapped to a list on the page.
    console.log(data) 
    data.map(user => { //each item in the data array will temporarily be assigned to the variable 'user'
        someResultsContainer.insertAdjacentHTML('beforeEnd',`
        <li class="list-group-item">
                <b>Name:</b> ${user.name}
                <b>Username:</b> ${user.username}
        </li>
        `);
    })
}