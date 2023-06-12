import React from "react";

export function Aplicativos() {
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-2xl font-bold">Aplicativos</h2>

      <div className="aplicativo mt-4">

        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/9HyFgP1v10s"
            title="Video do aplicativo Student Tasks"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-xl font-bold">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.sps.student"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Student Tasks
          </a>
        </h3>
        <p className="text-sm">
          Aplicativo desenvolvido em Flutter:
        </p>
        <p className="text-sm">
          Com o Student Tasks, você gerencia todas as suas tarefas do colégio
          ou faculdade, podendo definir seus compromissos diferentes para cada
          matéria do seu curso. Também é possível administrar as notas do seu
          curso, possibilitando que você possa dedicar as matérias com maiores
          dificuldades.
        </p>
      </div>

      <div className="aplicativo mt-4">

        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/wv5i5ewX46E"
            title="Video do aplicativo Bíblia Sagrada Offline"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-xl font-bold">
          <a
            href="https://play.google.com/store/apps/details?id=br.com.sps.bible"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Bíblia Sagrada Offline
          </a>
        </h3>
        <p className="text-sm">
          Aplicativo desenvolvido em Flutter para android:
        </p>

        <p className="text-sm">
          O Aplicativo Bíblia Sagrada Offline foi desenvolvido para quem gosta
          de simplicidade e ter a Palavra de Deus no seu pouso a todo momento.
          Com um texto simples e moderno, a Bíblia Sagrada Offline, possibilita
          fácil compreensão por se basear nos Textus Receptus. Originais
          gregos que serviram de base para essa tradução.
        </p>
      </div>

      {/* Adicione mais aplicativos aqui... */}

    </div>
  );
}

export default Aplicativos;
