import React from 'react';
import Maps from './Maps';

const LocationMapCard: React.FC = () => (
    <div
        className="rounded-xl flex flex-col items-center mx-auto"
        style={{
            background: '#48C9B0', // Teal background for the card
            width: 220,
            minHeight: 265,
            paddingBottom: 16,
            paddingTop: 12,
            justifyContent: 'flex-start',
        }}
    >
        {/* Only the map preview is elevated */}
        <div
            style={{
                width: 200,
                height: 200,
                borderRadius: 12,
                boxShadow: '0 6px 24px rgba(0,0,0,0.13)', // Elevation ONLY for map area
                background: '#f7f7f7',
            }}
        >
            <Maps />
        </div>
        <h3 className="text-lg font-semibold mt-5 text-white text-center">Location</h3>
    </div>
);

export default LocationMapCard;
