import axios from 'axios'
import { context as c } from '../../context'

export default function userService(){
    login
}

// login : async ( user_id, password ) => {
//     const req = {
//         method: c.post,
//         url: `${c.url}/api/access`,
//         data: {user_id, password},
//         auth: c.auth


//     }
//     const rest = await axios(req)
// }

    async function login (user_id, password) {
        const req = {
            metohs: c.post, 
            url: `${c.url}/api/access`,
            data: {user_id, password},
            auth: c.auth
        }
        const res = await axios(req)
        alert(`Welcome ! ${res.data["fname"]}.  ${res.data["user_id"]}'s connection is successful. ! `)
        sessionStorage.setItem("sessionUser", res.data['user_id'])
        window.location.reload()
        history.push("/actor")  // 여기 치는 부분으로 이동

    /*  axios.post(`http://localhost:8080/api/access`, {"user_id":user_id, "password":password})
            .then(res => {
                alert(`Welcome ! ${res.data["fname"]}.  ${res.data["user_id"]}'s connection is successful. ! `)
  
                sessionStorage.setItem("sessionUser", res.data['user_id'])
                
                window.location.reload()
                history.push("/actor")  // 여기 치는 부분으로 이동
                
            })
            .catch(error => {
                alert("Please check your ID or password.")
                window.location.reload()
            }) 
    */
    }
