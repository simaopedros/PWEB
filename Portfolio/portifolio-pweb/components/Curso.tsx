import Image from 'next/image';

export function Cursos() {
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-2xl font-bold">Curso Completo de Automação de Processos</h2>
      <div className="mt-4">
        <Image 
          src="/mestre.png" // atualize o caminho da imagem aqui
          alt="Imagem do curso"
          width={500}
          height={300}
        />
      </div>
      <p className="mt-4 mb-4">
        Este curso visa ensinar como dominar o UiPath, uma plataforma líder em automação de processos 
        robóticos (RPA) que permite a automação de tarefas repetitivas e manuais. O curso é composto 
        por diversos módulos que cobrem tópicos como automação web, manipulação de planilhas, automação 
        de e-mail, operadores lógicos e matemáticos, entre outros.
      </p>
      <a 
        href="https://mestrerpa.com.br/domine-o-uipath-e-descubra-como-alavancar-sua-carreira" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Saiba mais
      </a>
    </div>
  );
}

export default Cursos;
