import React, {useEffect, useState} from 'react';
import {Image} from "semantic-ui-react";
import json from "../../api/jsonPlaceholder";

const Album = ({ albumId }) => {
    const [photos, setPhotos] = useState([]);

    const sliceValue = 20;

    useEffect(() => {
        const fetchAlbumPhotos = async () => {
            const albums = await json.get(`/albums/${albumId}/photos`);
            setPhotos(albums.data.slice(0, sliceValue))
        };
        fetchAlbumPhotos();
    }, [albumId])

    const photosList = photos.map(({ title, id, thumbnailUrl }) => {
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