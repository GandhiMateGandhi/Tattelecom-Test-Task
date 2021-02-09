import React from 'react';
import {Grid, Icon, List, Modal} from "semantic-ui-react";

const UserInfoModal = ({ data, title, icon }) => {
    const userInfo = <Grid columns={1} divided padded>
        <Grid.Row>
            <Grid.Column>
                <List>
                    <List.Item icon='briefcase' content={data.company.name}/>
                    <List.Item icon='marker' content={`${data.address.city}, ${data.address.street}`}/>
                    <List.Item icon='phone volume'
                               content={<a href={`tel:${data.phone}`}>{data.phone}</a>}/>
                    <List.Item icon='mail' content={<a href={`mailto:${data.email}`}>{data.email}</a>}/>
                </List>
            </Grid.Column>
        </Grid.Row>
    </Grid>

    const triggerLink = (
        <div>
            {title} &nbsp;
            {icon && <Icon link name="info circle" color='blue'/>}
        </div>
    )

    const infoModal = <Modal className="UsersInfo"
                             size="tiny"
                             trigger={triggerLink}
                             header={`${data.name} Information`}
                             content={userInfo}
                             actions={[{ key: 'close', content: 'Close', size: 'large' }]}
    />

    return (
        <div className="PostsUserName">
            {infoModal}
        </div>
    );
}

export default UserInfoModal;