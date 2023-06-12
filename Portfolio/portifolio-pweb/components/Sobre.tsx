export function Sobre() {
  const nome = "Simão Pedro da Silva";
  const descricao = "Desenvolvedor e Instrutor RPA";

  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="text-2xl font-bold">Sobre</h2>
      <p className="mt-2">
        <strong>Nome:</strong> {nome}
      </p>
      <p className="mt-2">{descricao}</p>
    </div>
  );
}

export default Sobre;
