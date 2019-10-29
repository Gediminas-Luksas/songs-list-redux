import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'No Scrubs', durations: '4:05' },
        { title: 'Macarena', durations: '2:05' },
        { title: 'All Star', durations: '3:05' },
        { title: 'I want it that way', durations: '3:45' }
    ];
};

const selectedSongReducer = (selectedSong=null, acion) => {
    if(acion.type === 'SONG_SELECTED') {
        return acion.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});