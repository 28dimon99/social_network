import React from "react"
import s from "./Users.module.css"
import * as axios from "axios"

const Users = (props) =>{

  if (props.usersPage.length === 0){

    axios.get("https://newsapi.org/v2/sources?apiKey=API_KEY/users").then(response=> {
      debugger
      props.setUsers(
        /*  [
            {
              id: 1,
              followed: false,
              fullName: 'Dmitrij',
              status: 'I am boss',
              photoUrl: 'https://www.film.ru/sites/default/files/people/0_1017.jpg',
              location: {city: 'Dnepr', country: 'Ukraine'},
            },
            {
              id: 2,
              followed: true,
              fullName: 'Darina',
              status: 'I am boss too',
              photoUrl: 'https://i.pinimg.com/originals/1a/9d/6f/1a9d6fbc9c1fbc304afdaefdde1c73e3.jpg',
              location: {city: 'Dnepr', country: 'Ukraine'},
            },
            {
              id: 3,
              followed: false,
              fullName: 'Liza',
              status: 'I am boss too',
              photoUrl: 'https://s00.yaplakal.com/pics/pics_original/9/5/1/12740159.jpg',
              location: {city: 'Kiev', country: 'Ukraine'},
            },
            {
              id: 4,
              followed: true,
              fullName: 'Sasha',
              status: 'I am boss too',
              photoUrl: 'https://varlamov.me/2015/telki/05.jpg',
              location: {city: 'Kharkov', country: 'Ukraine'},
            },
            {
              id: 5,
              followed: false,
              fullName: 'Anna',
              status: 'I am boss too',
              photoUrl: 'http://topsweet.ru/wp-content/uploads/2016/03/Priyanka-CHopra-1.jpg',
              location: {city: 'Odessa', country: 'Ukraine'},
            }
          ]*/
      )
    })
  }


  return <div>
    {
      props.usersPage.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photoUrl} className={s.userPhoto}/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow</button>
                  : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
              </div>
            </span>
        <span>
              <span>
                <div>{"u.fullName"}</div>
                <div>{"u.status"}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
      </div>
      )
    }
 </div>

};
export default Users;