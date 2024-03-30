var url = 'https://jsonplaceholder.typicode.com/users/1'

var username = document.querySelector('#username')
var email = document.querySelector('#email')
var address = document.querySelector('#address')

var user = {}

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url)
}

fetchUser().then(function (response) {
    response.address.city
})

function startApp() {
    axios
    .get(url)
    .then(function (response) {
        // console.log(response)
        user = response.data
        username.innerText = user.name
        email.innerText = user.email
        address.innerText = user.address.street
    })
    .catch(function (error) {
        console.log(error)
    })
}

startApp()
