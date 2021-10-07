import React from 'react'; 
import Meme from './Meme';

const MemeList = props => {
    const { memes } = props;

    return (<div id="memeList">
        {
            memes.map(meme => {
                return(
                    <Meme meme={meme}/>
                )
            })
        }
    </div>)
}

export default MemeList;