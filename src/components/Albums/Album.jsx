import React, {useEffect, useState} from 'react';
import {Image} from "semantic-ui-react";
import json from "../../api/jsonPlaceholder";

const Album = ({ albumId }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchAlbumPhotos = async () => {
            const albums = await json.get(`/albums/${albumId}/photos`);
            setPhotos(albums.data.slice(0, 20))
        };
        fetchAlbumPhotos();
    }, [])

    const photosList = photos.map(({ title, url, id, thumbnailUrl }) => {
        return (
            <Image alt={title} src={thumbnailUrl} key={id}/>
        )
    })

    return (
        <Image.Group>
            {photosList}
        </Image.Group>
    );
}

export default Album;