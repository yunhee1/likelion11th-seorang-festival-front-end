import React from 'react';

function ContentList({contents}){
        return (
        <div>
            {contents.map((content) => (
                <li key={content.id}>
                    {content.text}
                </li>
            ))}
        </div>
    )
}

export default ContentList;