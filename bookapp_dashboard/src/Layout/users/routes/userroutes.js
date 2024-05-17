import { Route, Routes } from "react-router-dom";
import { AddEditUser } from "../users/AddEditUser";
import { LoginUser } from "../users/loginuser";
import UserListRedux from '../users/userlistredux'

export default function UserRoutesRedux() {
    return (
        <Routes>
            <Route path="/edit/:usid" element={<AddEditUser />} />
            <Route path="/users" element={<UserListRedux />} />
            <Route path="users/add" element={<AddEditUser />} />
            <Route path="/" element={<UserListRedux />} />
            <Route path="users/login" element ={<LoginUser/>}/>
        </Routes>

    )
}
