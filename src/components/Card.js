import React from 'react'
import { Link } from "react-router-dom";

const Card = ({user}) => {

    return (
        <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                  <div className="avatar avatar-lg">
                                <span className="avatar-text avatar-text-primary ">
                                    <span className="initial-wrap rounded-circle"><span>{user.name.charAt(0)}</span></span>
                                </span>
                            </div>
                    <div className="mt-3">
                      <h4>{user.name}</h4>
                      <p className="text-secondary mb-1"><i>@{user.username}</i></p>
                      <a href={user.website}>http://{user.website}</a>
                      <p><Link className="btn btn-primary" to={`/users/${user.id}`}> MORE DETAILS</Link></p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    )
}

export default Card
