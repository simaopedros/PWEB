export function Contato() {
  const email = "contato@mestrerpa.com.br";
  const telefone = "(00) 1234-5678";
  const endereco = "Sorocaba, São Paulo";

  const redesSociais = [
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/simaopedros/" },
    { nome: "GitHub", url: "https://github.com/simaopedros" },
    // Adicione mais redes sociais aqui...
  ];

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold">Contato</h2>
      <p className="mt-2">
        <strong>Email:</strong> {email}
      </p>
      <p className="mt-2">
        <strong>Telefone:</strong> {telefone}
      </p>
      <p className="mt-2">
        <strong>Endereço:</strong> {endereco}
      </p>
      <p className="mt-2">
        <strong>Redes Sociais:</strong>
      </p>
      <ul className="list-disc pl-4">
        {redesSociais.map((redeSocial) => (
          <li key={redeSocial.nome}>
            <a href={redeSocial.url} target="_blank" rel="noopener noreferrer">
              {redeSocial.nome}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contato;
