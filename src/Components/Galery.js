import React from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'



class MyGallery extends React.Component {
    render() {
        const { images } = this.props;
        return <div className="style-galery">
            <ImageGallery items={images} />
        </div>
    }
}
export default MyGallery;
