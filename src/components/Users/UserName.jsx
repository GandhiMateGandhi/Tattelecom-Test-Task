import React from 'react';
import {Header, Image} from "semantic-ui-react";
import UserInfoModal from "./UserInfoModal";
import userImage from "../../img/user-image.png";

const UserName = ({ users, userId }) => {
    const user = users.find(user => user.id === userId)
    return (
        <Header size='small' as='a' color='blue' floated='right'>
            <UserInfoModal title={user.name} data={user} icon={false}/>
            <Image avatar verticalAlign='middle' src={userImage}/>
        </Header>
    );
}

export default UserName;