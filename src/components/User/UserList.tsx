import React from 'react';
import {UserModel} from "../../models/UserModel";

interface UserListData {
    users : UserModel[]
}

const UserList = (props : UserListData) => {

    return (
        <div>
            <div className="mx-auto">
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
                    {props.users.map((user) => (
                        <div key={user.id_user} className="text-secondary bg-white hover:text-tertiary hover:z-50 hover:duration-200 hover:cursor-pointer hover:scale-110 hover:bg-primary hover:pointer group relative border rounded-md p-4 shadow-md">
                            <div className="flex justify-between gap-x-2">
                                <div>
                                    <p className="text-lg"><strong>{user.firstname} {user.lastname.toUpperCase()}</strong></p>
                                    <p className="text-sm">{user.work_field}</p>
                                    <p className="text-sm"><strong>{user.email}</strong></p>
                                </div>
                                <div>
                                    <p className="text-lg whitespace-nowrap font-medium"><strong>{user.city}</strong></p>
                                    <p className="text-sm whitespace-nowrap font-medium">{user.city_code}</p>
                                    <a className="hover:underline" href={user.cv_link} target="_blank"><strong>Voir le CV</strong></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserList;