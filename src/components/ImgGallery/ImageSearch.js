import React, {useState} from 'react'

function ImageSearch({searchText}) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="block-search">
                <input type='text' 
                    placeholder="Search Image Term..."
                    onChange={e => setText(e.target.value)}
                />
                <button type='submit' className="btn-search">Search</button>

            </div>
        </form>
    )
}

export default ImageSearch
