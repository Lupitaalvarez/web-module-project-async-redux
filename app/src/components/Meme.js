import React from 'react';

const Meme = (props) => {
    const { meme } = props;

    return(<div class="meme">
    <h3>{meme.name}</h3>
    <img width="200" src={meme.url}/>
    
    </div>);
}

export default Meme;