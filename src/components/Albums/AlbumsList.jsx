import React from 'react';
import {Button, Header, Icon, Popup, Segment} from "semantic-ui-react";
import Album from "./Album";

const AlbumsList = ({ albums }) => {

    const colorsVariations =
        ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown'].reverse()

    const renderAlbumsList =  albums.map(album => {
        return (
            <Segment padded color={colorsVariations[album.userId - 1]} key={album.id}>
                <Header color='blue' size='big' as='h3' content={album.title}/>

                <Popup
                    className="PopupImages"
                    trigger={
                        <Button icon labelPosition='left' size='medium'>
                            <Icon name='images'/>
                            Show images
                        </Button>
                    }
                    position='bottom left'
                    on='click'
                    flowing
                >
                    <Album albumId={album.id}/>
                </Popup>

            </Segment>
        )
    })

    return (
        <div>{renderAlbumsList}</div>
    );
}

export default AlbumsList;