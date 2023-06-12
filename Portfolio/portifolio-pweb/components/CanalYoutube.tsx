import React from 'react';

export function CanalYoutube() {
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-2xl font-bold">Canal do Youtube</h2>
      <p className="mt-2 mb-4">Adicione aqui uma descrição do seu canal do Youtube e inclua um link para acessá-lo.</p>
      <a href="https://www.youtube.com/channel/UCAXy0vBLmHmvyndo_mJM0gw" target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Visitar Canal
      </a>
    </div>
  );
}

export default CanalYoutube;
