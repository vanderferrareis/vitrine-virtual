const produtos = [
  {
    nome: "Queijo Mozzarella de Búfala",
    imagem: "Imagens/bomdestino/BolaCereja.png",
    fabricante: "Bom Destino", // Adicionado fabricante
    ingredientes: "Leite de búfala pasteurizado, cloreto de sódio (sal), cloreto de cálcio, coagulante quimosina e fermento lático...",
    tabelaNutricional: [
      ["Valor Energético", "64 kcal = 292 kJ", "3%"],
      ["Carboidratos", "1,3 g", "0%"],
      ["Proteínas", "4,0 g", "5%"],
      ["Gorduras Totais", "5,3 g", "10%"],
      ["Gorduras Saturadas", "3,3 g", "15%"],
      ["Gorduras Trans", "0 g", "**"],
      ["Fibra Alimentar", "0 g", "0%"],
      ["Sódio", "111 mg", "5%"],
      ["Cálcio", "136 mg", "14%"],
      ["Zinco", "0,72 mg", "10%"]
    ],
    observacoes: "*Valores Diários com base em uma dieta de 2.000 kcal..."
  },
  {
    nome: "Burrata de Búfala",
    imagem: "Imagens/bomdestino/BufalaBurrata120g.png",
    fabricante: "Bom Destino", // Adicionado fabricante
    ingredientes: `
      Leite de búfala pasteurizado, creme de leite de búfala pasteurizado, cloreto de sódio (sal), cloreto de cálcio, coagulante quimosina e fermento lático.
      Produto imerso em: água, soro de leite de búfala, cloreto de sódio, regulador de acidez ácido lático e conservador sorbato de potássio.
      <br><strong>ALÉRGICOS:</strong> CONTÉM LEITE DE BÚFALA E DERIVADOS. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.
    `,
    tabelaNutricional: [
      ["Valor Energético", "85 kcal = 358 kJ", "4%"],
      ["Carboidratos", "0", "0%"],
      ["Proteínas", "4,8 g", "6%"],
      ["Gorduras Totais", "7,3 g", "13%"],
      ["Gorduras Saturadas", "4,8 g", "22%"],
      ["Gorduras Trans", "0", "**"],
      ["Fibra Alimentar", "0", "0%"],
      ["Sódio", "95 mg", "4%"],
      ["Cálcio", "95 mg", "10%"]
    ],
    observacoes: "*Valores diários com base em uma dieta de 2.000kcal ou 8.400kj. Seus valores diários podem ser maiores ou menores, dependendo de suas necessidades energéticas. ** VD não estabelecido. Mantenha resfriado de 1ºC a 8ºC. Após aberto, manter refrigerado e consumir em até 2 dias."
  },
  {
    nome: "Mussarela Búfala Barra",
    imagem: "imagens/bomdestino/BufalaBarra.png",
    fabricante: "Bom Destino", // Adicionado fabricante
    ingredientes: `
      Leite de búfala pasteurizado, cloreto de sódio (sal), cloreto de cálcio, coagulante quimosina e fermento lático.
      <br><strong>ALÉRGICOS:</strong> CONTÉM LEITE DE BÚFALA. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.
    `,
    tabelaNutricional: [
      ["Valor Energético", "100 kcal = 419 kJ", "5%"],
      ["Carboidratos", "1,8 g", "1%"],
      ["Proteínas", "6,9 g", "9%"],
      ["Gorduras Totais", "7,2 g", "13%"],
      ["Gorduras Saturadas", "4,8 g", "22%"],
      ["Gorduras Trans", "0", "**"],
      ["Fibra Alimentar", "0", "0%"],
      ["Sódio", "168 mg", "7%"]
    ],
    observacoes: "*Valores diários com base em uma dieta de 2.000kcal ou 8.400kj. Seus valores diários podem ser maiores ou menores, dependendo de suas necessidades energéticas. ** VD não estabelecido. Mantenha resfriado de 1ºC a 8ºC. Após aberto, manter refrigerado e consumir em até 5 dias."
  },
{
  nome: "Queijo Parmesão Scala 12 meses",
  imagem: "imagens/scala/Parmesao12Meses.png",
  fabricante: "Scala", // Adicionado fabricante
  ingredientes: `
    Queijo Parmesão (Leite pasteurizado semidesnatado, soro fermento, sal (cloreto de sódio), fermento lático, cloreto de cálcio, coalho e conservante INS 235).
    <br><strong>ALÉRGICOS:</strong> CONTÉM LEITE E DERIVADOS. NÃO CONTÉM GLÚTEN.
  `,
  tabelaNutricional: [
    ["Valor Energético", "125 kcal", "6"],
    ["Carboidratos", "0,8 g", "0"],
    ["Açúcares totais", "0 g", "0"],
    ["Açúcares adicionados", "0 g", "0"],
    ["Proteínas", "9,3 g", "19"],
    ["Gorduras Totais", "9,6 g", "15"],
    ["Gorduras Saturadas", "6,3 g", "32"],
    ["Gorduras Trans", "0,2 g", "10"],
    ["Fibras Alimentares", "0 g", "0"],
    ["Sódio", "224 mg", "11"]
  ],
  observacoes: "*Percentual de valores diários fornecidos pela porção. Porção: 30 g (1 fatia)."
},
{
  nome: "Queijo Parmesão Scala 6 meses",
  imagem: "imagens/scala/Scala6Meses.png",
  fabricante: "Scala", // Adicionado fabricante
  ingredientes: `
    Queijo Parmesão (Leite pasteurizado semidesnatado, soro fermento, sal (cloreto de sódio), fermento lático, cloreto de cálcio, coalho e conservante INS 235).
    <br><strong>ALÉRGICOS:</strong> CONTÉM LEITE E DERIVADOS. NÃO CONTÉM GLÚTEN.
  `,
  tabelaNutricional: [
    ["Valor Energético", "119 kcal", "6%"],
    ["Carboidratos", "0,7 g", "0%"],
    ["Açúcares totais", "0 g", "0%"],
    ["Açúcares adicionados", "0 g", "0%"],
    ["Proteínas", "9 g", "18%"],
    ["Gorduras Totais", "9 g", "14%"],
    ["Gorduras Saturadas", "5,7 g", "29%"],
    ["Gorduras Trans", "0,1 g", "10%"],
    ["Fibras Alimentares", "0 g", "0%"],
    ["Sódio", "260 mg", "13%"]
  ],
  observacoes: "*Percentual de valores diários fornecidos pela porção. Porção: 30 g (1 fatia)."
},
{
  nome: "Cream Cheese bisnaga Scala 1.2kg",
  imagem: "imagens/scala/CreamCheese.png",
  fabricante: "Scala", // Adicionado fabricante
  ingredientes: `
    Leite pasteurizado semidesnatado, creme de leite, concentrado proteico, sal (cloreto de sódio), fermento lático, estabilizantes INS 415, INS 407, INS 466 e conservante INS 200.
    <br><strong>ALÉRGICOS:</strong> CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.
  `,
  tabelaNutricional: [
    ["Valor Energético", "80 kcal", "4%"],
    ["Carboidratos", "1,3 g", "0%"],
    ["Açúcares totais", "0,8 g", "-"],
    ["Açúcares adicionados", "0 g", "0%"],
    ["Proteínas", "1,4 g", "3%"],
    ["Gorduras Totais", "7,8 g", "12%"],
    ["Gorduras Saturadas", "4,8 g", "24%"],
    ["Gorduras Trans", "0,2 g", "10%"],
    ["Fibras Alimentares", "0 g", "0%"],
    ["Sódio", "115 mg", "6%"]
  ],
  observacoes: "*Percentual de valores diários fornecidos pela porção. Porção: 30 g (1 colher de sopa)."
  },
  {
  nome: "Requeijão Cremoso Scala 200g",
  imagem: "imagens/scala/RequeijaoCopo200g.png",
  fabricante: "Scala", // Adicionado fabricante
  ingredientes: `
    Leite pasteurizado semidesnatado, creme de leite, sal (cloreto de sódio), cloreto de cálcio, fermento lático, coagulante, emulsificantes (INS 450(iii), INS 452(i), INS 451(i), INS 450(v), INS 450(i) e INS 451(ii)), reguladores de acidez (INS 500(ii) e INS 330) e conservante INS 234.
    <br><strong>CONTÉM LACTOSE. ALÉRGICOS:</strong> CONTÉM LEITE E DERIVADOS. NÃO CONTÉM GLÚTEN.
  `,
  tabelaNutricional: [
    ["Valor Energético", "80 kcal", "4%"],
    ["Carboidratos", "0,2 g", "0%"],
    ["Açúcares totais", "0,2 g", ""],
    ["Açúcares adicionados", "0 g", "0%"],
    ["Proteínas", "3 g", "6%"],
    ["Gorduras Totais", "7,5 g", "12%"],
    ["Gorduras Saturadas", "4,5 g", "23%"],
    ["Gorduras Trans", "0,2 g", "10%"],
    ["Fibras Alimentares", "0,2 g", "1%"],
    ["Sódio", "184 mg", "9%"]
  ],
  observacoes: "*Percentual de valores diários fornecidos pela porção. Porção: 30 g (1 colher de sopa)."
},
{
  nome: "Requeijão Cremoso 380g",
  imagem: "imagens/scala/RequeijaoScala.png",
  fabricante: "Scala", // Adicionado fabricante
  ingredientes: `
    Leite pasteurizado semidesnatado, creme de leite, sal (cloreto de sódio), cloreto de cálcio, fermento lático, coagulante, emulsificantes (INS 450(iii), INS 452(i), INS 451(i), INS 450(v), INS 450(i) e INS 451(ii)), reguladores de acidez (INS 500(ii) e INS 330) e conservante INS 234.
    <br><strong>CONTÉM LACTOSE. ALÉRGICOS: CONTÉM LEITE E DERIVADOS. NÃO CONTÉM GLÚTEN.</strong>
  `,
  tabelaNutricional: [
    ["Valor Energético", "80 kcal", "4%"],
    ["Carboidratos", "0,2 g", "0%"],
    ["Açúcares totais", "0,2 g", ""],
    ["Açúcares adicionados", "0 g", "0%"],
    ["Proteínas", "3 g", "6%"],
    ["Gorduras Totais", "7,5 g", "12%"],
    ["Gorduras Saturadas", "4,5 g", "23%"],
    ["Gorduras Trans", "0,2 g", "10%"],
    ["Fibras Alimentares", "0,2 g", "1%"],
    ["Sódio", "184 mg", "9%"]
  ],
  observacoes: "*Percentual de valores diários fornecidos pela porção. Porção: 30 g (1 colher de sopa)."
},
{
  nome: "Cheddar Melt Bisnaga",
  imagem: "Imagens/schreiber/CheddarMelt.png",
  fabricante: "Schreiber", // Adicionado fabricante
  descricao: `
    Descubra o sabor cremoso e irresistível do Molho de Queijo Cheddar 1,5 Kg da Schreiber, perfeito para complementar uma variedade de pratos e lanches. 
    Com sua textura suave e sabor marcante, este molho é ideal para quem busca praticidade sem abrir mão da qualidade.
  `,
  armazenamento: `
    Para manter a qualidade e o sabor do seu Molho de Queijo Cheddar, armazene-o na geladeira a uma temperatura entre 0°C e 4°C.
    Após aberto, consuma em até 7 dias. Certifique-se de manter o produto bem fechado para evitar contaminação ou alterações no sabor.
  `,
  validade: `
    O Molho de Queijo Cheddar 1,5 Kg Schreiber possui uma validade de 6 meses a partir da data de fabricação, desde que mantido refrigerado e fechado corretamente.
    Consulte a data de validade na embalagem para garantir o consumo dentro do prazo ideal.
  `,
  dicasDeUso: `
    <ul>
      <li><strong>Acompanhamento:</strong> Sirva com batatas fritas, nachos, legumes ou salgadinhos para um lanche delicioso.</li>
      <li><strong>Ingrediente:</strong> Utilize em receitas como macarrão com queijo, sanduíches gratinados ou pratos assados para um toque cremoso e saboroso.</li>
      <li><strong>Aquecimento:</strong> Para uma experiência ainda melhor, aqueça o molho em banho-maria ou no micro-ondas, mexendo ocasionalmente até atingir a temperatura desejada.</li>
    </ul>
    Experimente o Molho de Queijo Cheddar 1,5 Kg Schreiber e transforme suas refeições e lanches em momentos especiais. Praticidade e sabor em um único produto!
  `,
  tabelaNutricional: [
    ["Valor Energético", "475,5 kcal", ""],
    ["Carboidratos", "2,46 g", ""],
    ["Proteínas", "0,83 g", ""],
    ["Gorduras Totais", "51,05 g", ""],
    ["Gorduras Saturadas", "7,98 g", ""],
    ["Gorduras Trans", "0,27 g", ""],
    ["Fibras Alimentares", "0,47 g", ""],
    ["Sódio", "520,81 mg", ""]
  ],
  observacoes: "A informação nutricional descrita serve apenas como uma referência. Porção: 100 g."

  },
  {
  nome: "Queijo Cheddar Schreiber Fatiado",
  imagem: "Imagens/schreiber/SchereiberCheddarfat.png",
  fabricante: "Schreiber", // Adicionado fabricante
  descricao: "O Preparação de Alimentos Sabor Cheddar 2,27 kg é um produto prático e saboroso, ideal para diversas receitas que exigem um toque de queijo cheddar cremoso e marcante. Com textura macia e sabor intenso, é perfeito para quem busca versatilidade e qualidade na cozinha.",
  armazenamento: "Mantenha em local fresco e seco, longe de fontes de calor e umidade. Após aberto, conservar em geladeira em recipiente fechado. Pode ser congelado em porções menores para maior durabilidade.",
  validade: "Verifique a data de fabricação e validade na embalagem. Quando bem armazenado, possui vida útil de vários meses.",
  dicasDeUso: [
    "Macarrão com queijo: Prepare um molho cremoso com leite ou creme de leite.",
    "Hambúrgueres: Derreta sobre hambúrgueres para um toque cremoso.",
    "Batatas assadas: Cubra com o cheddar derretido como acompanhamento.",
    "Sopas e cremes: Enriqueça o sabor e a textura de sopas.",
    "Sanduíches e torradas: Use como recheio ou cobertura, derretendo no forno ou micro-ondas."
  ],
  tabelaNutricional: [
    ["Valor Energético", "94 kcal", ""],
    ["Carboidratos", "3,1 g", ""],
    ["Proteínas", "3,6 g", ""],
    ["Gorduras Totais", "7,5 g", ""],
    ["Gorduras Saturadas", "3,9 g", ""],
    ["Gorduras Trans", "0 g", ""],
    ["Fibras Alimentares", "0 g", ""],
    ["Sódio", "457 mg", ""]
  ],
  ingredientes: "Informação nutricional meramente referencial.",
  contemLactose: true,
  contemGluten: false
  
  },
{
 nome: "Queijo Prato Schreiber Fatiado",
  imagem: "Imagens/schreiber/QueijoPratoFat.png",
  fabricante: "Schreiber", // Adicionado fabricante
  descricao: "O Preparação de Alimentos Sabor Prato 2,27 kg é um produto prático e saboroso, ideal para diversas receitas que exigem um toque de queijo prato cremoso e marcante. Com textura macia e sabor intenso, é perfeito para quem busca versatilidade e qualidade na cozinha.",
  armazenamento: "Mantenha em local fresco e seco, longe de fontes de calor e umidade. Após aberto, conservar em geladeira em recipiente fechado. Pode ser congelado em porções menores para maior durabilidade.",
  validade: "Verifique a data de fabricação e validade na embalagem. Quando bem armazenado, possui vida útil de vários meses.",
  dicasDeUso: [
    "Macarrão com queijo: Prepare um molho cremoso com leite ou creme de leite.",
    "Hambúrgueres: Derreta sobre hambúrgueres para um toque cremoso.",
    "Batatas assadas: Cubra com o preparo de queijo prato derretido como acompanhamento.",
    "Sopas e cremes: Enriqueça o sabor e a textura de sopas.",
    "Sanduíches e torradas: Use como recheio ou cobertura, derretendo no forno ou micro-ondas."
  ],
  tabelaNutricional: [
    ["Valor Energético", "320 kcal", ""],
    ["Carboidratos", "11 g", ""],
    ["Proteínas", "13 g", ""],
    ["Gorduras Totais", "25 g", ""],
    ["Gorduras Saturadas", "13 g", ""],
    ["Gorduras Trans", "0,2 g", ""],
    ["Açúcares Totais", "4,5 g", ""],
    ["Açúcares Adicionais", "0 g", ""],
    ["Sódio", "1359 mg", ""]
  ],
  ingredientes: "Informação nutricional meramente referencial.",
  contemLactose: true,
  contemGluten: false
},
{
  nome: "Parmesão Suaçui",
  imagem: "imagens/suacui/queijo-parmesaoSuacui.png",
  fabricante: "Suaçui", // Adicionado fabricante
  descricao: "O Queijo Parmesão Suaçui é um produto saboroso e versátil, ideal para adicionar um toque especial a diversas receitas. Com textura firme e sabor marcante, é perfeito para ser consumido fatiado, ralado ou derretido.",
  armazenamento: "Mantenha em local fresco e seco, longe de fontes de calor e umidade. Após aberto, conservar em geladeira em recipiente fechado para preservar a qualidade.",
  validade: "Verifique a data de fabricação e validade na embalagem. Quando armazenado adequadamente, possui uma longa vida útil.",
  dicasDeUso: [
    "Massas: Rale sobre massas para adicionar sabor e aroma.",
    "Saladas: Acrescente lascas de parmesão em saladas para um toque sofisticado.",
    "Sanduíches: Derreta sobre sanduíches para uma experiência ainda mais saborosa.",
    "Petiscos: Sirva em cubos como aperitivo.",
    "Molhos: Utilize como base para molhos cremosos e gratinados."
  ],
  tabelaNutricional: [
    ["Valor Energético", "108 kcal", ""],
    ["Carboidratos", "0 g", ""],
    ["Proteínas", "9 g", ""],
    ["Gorduras Totais", "8 g", ""],
    ["Gorduras Saturadas", "5 g", ""],
    ["Gorduras Trans", "0 g", ""],
    ["Fibras Alimentares", "0 g", ""],
    ["Sódio", "270 mg", ""]
  ],
  ingredientes: "Informação nutricional meramente referencial.",
  contemLactose: true,
  contemGluten: false
},
{ 
  nome: "Manteiga com sal 500g",
  imagem: "imagens/suacui/Manteiga-500gsuacu.png",
  fabricante: "Suaçui", // Adicionado fabricante
  descricao: "A Manteiga com Sal Suaçui é ideal para dar sabor e cremosidade a diversas preparações, desde o café da manhã até receitas mais elaboradas. Com textura suave e sabor marcante, é indispensável na cozinha.",
  armazenamento: "Armazene em local refrigerado entre 0°C e 4°C. Após aberto, manter bem fechado e consumir em até 30 dias para garantir a qualidade.",
  validade: "Verifique a data de fabricação e validade na embalagem. Quando armazenada corretamente, possui uma vida útil de vários meses.",
  dicasDeUso: [
    "Café da manhã: Passe no pão ou na torrada para um café saboroso.",
    "Culinária: Use no preparo de massas, molhos ou para grelhar carnes.",
    "Sobremesas: Ideal para dar textura e brilho em doces e bolos.",
    "Finalização: Perfeita para finalizar legumes ou dar um toque amanteigado aos pratos."
  ],
  tabelaNutricional: [
    ["Valor Energético", "75 kcal", ""],
    ["Carboidratos", "0 g", ""],
    ["Proteínas", "0 g", ""],
    ["Gorduras Totais", "8,3 g", ""],
    ["Gorduras Saturadas", "5,7 g", ""],
    ["Gorduras Trans", "0 g", ""],
    ["Fibras Alimentares", "0 g", ""],
    ["Sódio", "100 mg", ""]
  ],
  ingredientes: "Informação nutricional meramente referencial.",
  contemLactose: true,
  contemGluten: false

},
{
  nome: "Minas Padrão Suaçui",
  imagem: "imagens/suacui/queijo-minas-padraoSuacui.png",
  fabricante: "Suaçui", // Adicionado fabricante
  descricao: "O Queijo Minas Padrão Suaçui é uma excelente escolha para quem aprecia um queijo macio e saboroso. Ideal para consumir puro, em sanduíches ou como ingrediente em diversas receitas.",
  armazenamento: "Armazene refrigerado entre 0°C e 4°C. Após aberto, mantenha bem fechado e consuma em até 10 dias para garantir frescor e qualidade.",
  validade: "Verifique a data de fabricação e validade na embalagem. Quando armazenado corretamente, possui uma vida útil de vários meses.",
  dicasDeUso: [
    "Café da manhã: Sirva em fatias no pão ou torradas.",
    "Receitas: Use em lasanhas, tortas ou pratos gratinados.",
    "Petiscos: Combine com geleias ou frutas para uma tábua de queijos deliciosa.",
    "Sanduíches: Perfeito para incrementar lanches naturais ou quentes."
  ],
  tabelaNutricional: [
    ["Valor Energético", "114 kcal", ""],
    ["Carboidratos", "0 g", ""],
    ["Proteínas", "7,4 g", ""],
    ["Gorduras Totais", "9,3 g", ""],
    ["Gorduras Saturadas", "5,9 g", ""],
    ["Gorduras Trans", "0 g", ""],
    ["Fibras Alimentares", "0 g", ""],
    ["Sódio", "165 mg", ""]
  ],
  ingredientes: "Informação nutricional meramente referencial.",
  contemLactose: true,
  contemGluten: false
}
];

const container = document.getElementById('produtos-container');

// Função para agrupar produtos por fabricante
function agruparPorFabricante(produtos) {
  return produtos.reduce((acc, produto) => {
    const fabricante = produto.fabricante || 'Outros'; // Agrupa produtos sem fabricante em 'Outros'
    if (!acc[fabricante]) {
      acc[fabricante] = [];
    }
    acc[fabricante].push(produto);
    return acc;
  }, {});
}

// Função para renderizar os produtos agrupados
function renderizarProdutosAgrupados(produtosAgrupados) {
  container.innerHTML = ''; // Limpa o container antes de adicionar os novos elementos

  for (const fabricante in produtosAgrupados) {
    // Cria um título para a seção do fabricante
    const tituloFabricante = document.createElement('h2');
    tituloFabricante.className = 'fabricante-titulo';
    tituloFabricante.textContent = `Linha de Produtos ${fabricante}`;
    container.appendChild(tituloFabricante);

    // Cria um container para os produtos deste fabricante
    const produtosFabricanteContainer = document.createElement('div');
    produtosFabricanteContainer.className = 'produtos-fabricante-container'; // Classe para estilização
    container.appendChild(produtosFabricanteContainer);

    // Renderiza cada produto do fabricante
    produtosAgrupados[fabricante].forEach(produto => {
      const div = document.createElement('div');
      div.className = 'produto-card'; // Usar um card mais simples para a lista inicial

      const tabela = produto.tabelaNutricional || produto.informacoesNutricionais || [];
      const tabelaHTML = tabela.length > 0 ? `
        <details>
          <summary>Informações Nutricionais</summary>
          <table class="tabela-nutricional">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Porção</th>
                <th>% VD</th>
              </tr>
            </thead>
            <tbody>
              ${tabela.map(linha => `<tr><td>${linha[0]}</td><td>${linha[1]}</td><td>${linha[2] || '-'}</td></tr>`).join("")}
            </tbody>
          </table>
          ${produto.observacoes ? `<p><em>${produto.observacoes}</em></p>` : ""}
        </details>
      ` : '';

      div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
        <div class="produto-info">
          <h3>${produto.nome}</h3>
          ${produto.descricao ? `<p class="produto-descricao">${produto.descricao}</p>` : ""}
          ${produto.ingredientes ? `<details><summary>Ingredientes</summary><p>${produto.ingredientes}</p></details>` : ""}
          ${produto.armazenamento ? `<details><summary>Armazenamento</summary><p>${produto.armazenamento}</p></details>` : ""}
          ${produto.validade ? `<details><summary>Validade</summary><p>${produto.validade}</p></details>` : ""}
          ${produto.dicasDeUso ? `<details><summary>Dicas de Uso</summary>${Array.isArray(produto.dicasDeUso) ? `<ul>${produto.dicasDeUso.map(dica => `<li>${dica}</li>`).join('')}</ul>` : `<p>${produto.dicasDeUso}</p>`}</details>` : ""}
          ${tabelaHTML}
        </div>
      `;
      produtosFabricanteContainer.appendChild(div);
    });
  }
}

// Agrupa e renderiza os produtos ao carregar a página
const produtosAgrupados = agruparPorFabricante(produtos);
renderizarProdutosAgrupados(produtosAgrupados);

