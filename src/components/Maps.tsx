import React from 'react';

const Maps: React.FC = () => (
    <iframe
        id="gmap_canvas"
        title="Google Map"
        src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Neat%20and%20clean%20laundry/drycleaners%20Shiv%20Savitri%20Market,%20CDA%20Colony,%20North%20Shastri%20Nagar,%20Patna,%20Bihar%20801103%20Patna&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        width="100%"
        height="100%"
        style={{
            border: 0,
            borderRadius: 12,
            width: '100%',
            height: '100%'
        }}
        loading="lazy"
        allowFullScreen
    ></iframe>
);

export default Maps;
