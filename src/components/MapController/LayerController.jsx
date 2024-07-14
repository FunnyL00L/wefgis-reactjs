import React, { useState, useEffect } from 'react';
import { useMapStore } from '../../store/MapStore';

const LayerController = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    geoServer: true,
    g01: true,
  });

  const layers = useMapStore((state) => state.layers);
  const map = useMapStore((state) => state.map);
  const activeLayers = useMapStore((state) => state.activeLayers);
  const addActiveLayer = useMapStore((state) => state.addActiveLayer);
  const removeActiveLayer = useMapStore((state) => state.removeActiveLayer);

  useEffect(() => {
    if (map) {
      activeLayers.forEach(layer => {
        if (!map.hasLayer(layer.layer)) {
          layer.layer.addTo(map);
        }
      });
      console.log(activeLayers.length);
    }
  }, [map, activeLayers]);

  const toggleLayer = (layer) => {
    if (map.hasLayer(layer.layer)) {
      map.removeLayer(layer.layer);
      removeActiveLayer(layer);
    } else {
      addActiveLayer(layer);
    }
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <div className="mb-4">
        <button
          className="font-bold flex items-center justify-between w-full"
          onClick={() => toggleCategory('geoServer')}
        >
          GeoServer Nakhon Pathom
          <span>{expandedCategories.geoServer ? '▼' : '▶'}</span>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            expandedCategories.geoServer ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {expandedCategories.geoServer && (
            <div className="space-y-2 mt-2">
              {layers
                .filter(layer => layer.category === 'geoServer')
                .map((layer, index) => (
                  <CheckboxItem
                    key={index}
                    id={`geoServer-${index}`}
                    label={layer.name}
                    checked={activeLayers.some(activeLayer => activeLayer.name === layer.name)}
                    onChange={() => toggleLayer(layer)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <button
          className="font-bold flex items-center justify-between w-full"
          onClick={() => toggleCategory('g01')}
        >
          G01 Nakhon Phatom
          <span>{expandedCategories.g01 ? '▼' : '▶'}</span>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            expandedCategories.g01 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          {expandedCategories.g01 && (
            <div className="space-y-2 mt-2">
              {layers
                .filter(layer => layer.category === 'g01')
                .map((layer, index) => (
                  <CheckboxItem
                    key={index}
                    id={`g01-${index}`}
                    label={layer.name}
                    checked={activeLayers.some(activeLayer => activeLayer.name === layer.name)}
                    onChange={() => toggleLayer(layer)}
                  />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CheckboxItem = ({ id, label, checked, onChange }) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      id={id}
      className="mr-2"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default LayerController;