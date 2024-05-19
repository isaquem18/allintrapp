![Capa](https://github.com/isaquem18/allintrapp/assets/67105969/afe3ec19-b347-483e-9843-ca31213081ae)

![alllintra-app](https://github.com/isaquem18/allintrapp/assets/67105969/5ceaf00b-3635-40ad-a13f-5f9843680c4b)

PASSOS:

1.
```
yarn
```

2.
```
npx pod-install ios
```

3.
```
npx expo run:ios
```

Decidi criar um prototipo do app da própria allintra durante o teste prático pois julguei que seria interessante  demonstrar minhas habilidades simulando o contexto da empresa no geral. O design do site foi encontrato no próprio site da empresa, tentei representá-lo com a maior fidedignidade possível, apesar de não esta com as medidas de design em mãos e o tempo ser curto. 

O primeiro gráfico de linha foi alimentado pela binance, no link:
```https://api.binance.com/api/v3/trades?symbol=BTCUSDT&limit=100```

A listagem de Criptomoedas foi feita no link :
```https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&sparkline=false```

Por Último, o grafico de velas foi feito em:
```wss://stream.binance.com:9443/ws/btcusdt@ticker```
