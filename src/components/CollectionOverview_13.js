import React from "react";

const CollectionOverview_13 = ({ title, name, remoteUrl, size }) => {
    return (
        <div>
            <div className="collection-preview">
                <h2 className="title">{title}</h2>
                <div className="preview">
                    <div className="collection-item">
                        <img className="image" src={remoteUrl} />
                        <div className="collection-footer">
                            <span className="name">{name}</span>
                            <span className="price">{size}</span>
                        </div>
                        <button className="custom-button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CollectionOverview_13;