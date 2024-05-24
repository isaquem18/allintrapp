
**********


> Esta branch se trata de um segunda versão, que fiz apenas para praticar alguns conceitos, porém realizada após o prazo máximos extipulado para teste, caso deseje ver a primeira verão, bastar alterar para branch "main"



**********


![Capa(1)](https://github.com/isaquem18/allintrapp/assets/67105969/a43d18fb-8606-429c-93d9-d60c52e8f7cd)

<div style="display: flex;">
    <img src="https://github.com/isaquem18/allintrapp/assets/67105969/52276c67-8067-49a6-9576-22de10f76b34" alt="aaaaaa1" style="width: 200px;  margin-right: 10px;">
    <img src="https://github.com/isaquem18/allintrapp/assets/67105969/0ed89fa9-899c-476f-8cd8-2c9a013e9ffd" alt="aaaaa3" style="width: 200px;  margin-right: 10px;">
    <img src="https://github.com/isaquem18/allintrapp/assets/67105969/8a48904a-c7ab-40e4-826a-d4ac856bc135" alt="aaaaaa4" style="width: 200px; margin-right: 10px;">
    <img src="https://github.com/isaquem18/allintrapp/assets/67105969/fbeca6ed-0d92-44ae-a406-1cd6bddd0fff" alt="aaaaaaaa5" style="width: 200px; margin-right: 10px;">
</div>
<div style="display: flex;">
  <img src="https://github.com/isaquem18/allintrapp/assets/67105969/06371cba-cfff-4f9b-b009-34bb5461589b" alt="aaaaaaaa2" style="width: "100%";  margin-right: 10px;">
</div>

## Visão Geral

Este projeto é uma demonstração de um aplicativo React Native desenvolvido usando Expo. O app inclui várias funcionalidades e animações, atendendo aos requisitos especificados para o teste de programação.

## Funcionalidades

- **Navegação por Abas com Animações**: Transições suaves e visualmente atraentes entre diferentes abas.
- **Tela de Splash com Animações**: Tela de splash envolvente com animações para melhorar a experiência do usuário.
- **Gráfico em Tempo Real com WebSocket**: Atualizações ao vivo em um gráfico usando WebSocket para comunicação de dados em tempo real.
- **Skeletons de Carregamento**: Feedback visual para estados de carregamento usando carregadores de esqueleto.
- **Gerenciamento de Estado**: Gerenciamento eficiente de estado para garantir desempenho ótimo e facilidade de manutenção.
- **Design Responsivo**: Garantia de responsividade em diferentes tamanhos de tela e orientações.
- **Interface de Usuário**: Design visualmente atraente e amigável.
- **Criatividade e Aparência**: Ênfase na criatividade e estética em todo o aplicativo.
- **Testes**: Configuração completa de testes unitários, de integração e de ponta a ponta (end-to-end).

## Exemplo rodando teste E2E
<div style="display: flex;">
  <img src="https://github.com/isaquem18/allintrapp/assets/67105969/08dc9644-3be3-4152-84f4-625aff426493" alt="aaaaaaaa7" style="width: 300px";  margin-right: 10px;">
</div>



## Requisitos

- Node.js (versão >= 12)
- Expo CLI (`npm install -g expo-cli`)
- Yarn ou npm (gerenciadores de pacotes)

## Instalação

1. Clone o repositório:
   ```bash
   gh repo clone isaquem18/allintrapp
   cd allintrapp
   ```

2. Instale as dependências:
   ```bash
   yarn 
   ```

3. Atualize os pods
   ```bash
   npx pod-install ios
   ```
4. Inicie o servidor de desenvolvimento 
   ```bash
   npx expo run:ios
   ```

## Estrutura do Projeto


## Gerenciamento de Estado

O projeto usa uma combinação de React Context e React Query para gerenciamento de estado, garantindo eficiência e escalabilidade. Permitindo que dados menos sensíveis ao tempo sejam cacheados no dispositivos enquanto o restante mantém atualização constante.

## Principais Implementações

### 1. Navegação por Abas com Animações

Implementado usando `react-navigation` e animações personalizadas para melhorar a experiência do usuário.

### 2. Tela de Splash com Animações

Utilizado lottie videos que converteu video gerado no Adobe After Effects em JSON e animações personalizadas para criar um ponto de entrada envolvente para o aplicativo.

### 3. Gráfico em Tempo Real com WebSocket

Integrado um gráfico de atualização ao vivo usando WebSocket para comunicação de dados em tempo real.

### 4. Skeletons de Carregamento

Usado `react-content-loader` para exibir telas de esqueleto enquanto os dados estão sendo carregados, melhorando a percepção de desempenho.

## Testes

Os testes unitários, de integração e de ponta a ponta (end-to-end) foram configurados usando Jest e React Testing Library e detox-JS para garantir a correção dos componentes e da lógica.

### Executando os Testes

Para executar os testes, use o seguinte comando:

```bash
    // para rodar os testes unitários
    yarn test:unit
    // para rodar os testes de integração
    yarn test:int
    // para rodar os testes e2e
    yarn test:e2e
```

## Notas Finais

- A aparência e o cumprimento do style-guide conforme imagens foram priorizadas ao longo do processo de desenvolvimento.
- O aplicativo foi projetado para ser responsivo e proporcionar uma experiência contínua em diferentes dispositivos e orientações.
- Animações e transições foram incorporadas para melhorar a experiência geral do usuário.
- Toda a configuração necessária para testes unitários, de integração e de ponta a ponta foi realizada.

Para qualquer dúvida ou esclarecimento adicional, por favor, entre em contato comigo.

