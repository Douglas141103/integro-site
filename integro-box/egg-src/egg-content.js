// Permanent cosmetics; powers and boosts are separate consumable items.
export const ACCESSORY_EXPANSION={
 astronautHelmet:{name:'Capacete espacial',slot:'head',price:6500,desc:'Cúpula branca, visor azul e antena.'},
 pirateHat:{name:'Chapéu de capitão',slot:'head',price:2800,desc:'Tricórnio com emblema dourado e pena.'},
 wizardHat:{name:'Chapéu de mago',slot:'head',price:9500,desc:'Cone estrelado com uma lua na ponta.'},
 ninjaBand:{name:'Faixa do vento',slot:'head',price:2200,desc:'Faixa vermelha com duas fitas longas.'},
 sharkHood:{name:'Capuz tubarão',slot:'head',price:14000,desc:'Barbatana e dentinhos de fantasia.'},
 mushroomCap:{name:'Chapéu cogumelo',slot:'head',price:4800,desc:'Um cogumelo vermelho com pintinhas claras.'},
 flowerCrown:{name:'Coroa do jardim',slot:'head',price:12000,desc:'Flores, folhas e pétalas coloridas.'},
 antlers:{name:'Galhadas da floresta',slot:'head',price:28000,desc:'Galhos dourados com folhas de jade.'},
 clockworkCrown:{name:'Coroa do tempo',slot:'head',price:300000,desc:'Um relógio rodeado de engrenagens reais em 3D.'},
 samuraiHelm:{name:'Elmo do dragão',slot:'head',price:85000,desc:'Placas rubras e um grande crescente dourado.'},
 monocle:{name:'Monóculo elegante',slot:'face',price:3500,desc:'Lente redonda com corrente dourada.'},
 heartGlasses:{name:'Óculos de coração',slot:'face',price:6000,desc:'Duas lentes cor-de-rosa em formato de coração.'},
 snowGoggles:{name:'Óculos de nevasca',slot:'face',price:18000,desc:'Lentes espelhadas, proteção branca e flocos.'},
 foxMask:{name:'Máscara de raposa',slot:'face',price:32000,desc:'Orelhas pontudas e focinho de porcelana.'},
 dragonMask:{name:'Máscara de dragão',slot:'face',price:68000,desc:'Chifres verdes e focinho com detalhes dourados.'},
 owlMask:{name:'Máscara da coruja',slot:'face',price:55000,desc:'Dois grandes aros e um pequeno bico.'},
 rainbowVisor:{name:'Visor arco-íris',slot:'face',price:42000,desc:'Sete faixas coloridas em uma moldura azul.'},
 divingMask:{name:'Máscara de mergulho',slot:'face',price:11000,desc:'Lentes duplas e um snorkel amarelo.'},
 timeMask:{name:'Máscara dos segundos',slot:'face',price:250000,desc:'Lente-relógio, ponteiros e engrenagem lateral.'},
 galaxyMask:{name:'Máscara galáctica',slot:'face',price:380000,desc:'Constelações e planetas em um visor violeta.'},
 snailPack:{name:'Mochila caracol',slot:'back',price:8000,desc:'Casco em espiral com duas antenas fofas.'},
 turtleShell:{name:'Casco de aventureiro',slot:'back',price:16000,desc:'Placas verdes e contorno de areia.'},
 guitar:{name:'Violão viajante',slot:'back',price:24000,desc:'Cordas, braço e caixa de madeira.'},
 surfboard:{name:'Prancha de verão',slot:'back',price:36000,desc:'Prancha turquesa com faixa laranja e quilha.'},
 balloonPack:{name:'Balões de festa',slot:'back',price:48000,desc:'Cinco balões presos à mochila. Sem voo.'},
 butterflyWings:{name:'Asas do jardim',slot:'back',price:72000,desc:'Quatro asas arredondadas com pintas douradas.'},
 mechanicalWings:{name:'Asas mecânicas',slot:'back',price:110000,desc:'Placas articuladas, engrenagens e parafusos.'},
 dragonWings:{name:'Asas de dragão',slot:'back',price:180000,desc:'Membranas verdes e hastes douradas.'},
 hourglassPack:{name:'Ampulheta eterna',slot:'back',price:350000,desc:'Duas câmaras de cristal e areia luminosa.'},
 galaxyPortal:{name:'Portal das galáxias',slot:'back',price:500000,desc:'Anéis orbitais, estrelas e uma nebulosa central.'}
};

export const ABILITIES={
 bubble:{name:'Bolha protetora',kind:'power',price:450,max:10,duration:8,color:0x81eaff,icon:'shield',desc:'Protege das capturas e dos perigos da pista durante 8 segundos.'},
 frost:{name:'Pulso congelante',kind:'power',price:750,max:10,duration:6,color:0xadcfff,icon:'snow',desc:'Reduz pela metade a velocidade do guardião por 6 segundos.'},
 doubleJump:{name:'Salto duplo',kind:'power',price:600,max:10,duration:25,color:0xe4adff,icon:'jump',desc:'Permite um segundo pulo no ar durante 25 segundos.'},
 endurance:{name:'Fôlego infinito',kind:'power',price:900,max:10,duration:20,color:0x8af1c5,icon:'wind',desc:'Mantém o fôlego cheio enquanto você dispara, por 20 segundos.'},
 rush:{name:'Boost de velocidade',kind:'boost',price:1200,max:10,duration:20,color:0xffb573,icon:'speed',desc:'Aumenta sua velocidade em 25% por 20 segundos.'},
 trainingBoost:{name:'Boost de treino',kind:'boost',price:2200,max:10,duration:60,color:0xffe18b,icon:'dumbbell',desc:'A esteira rende o dobro de treino por 60 segundos. Ative sobre a esteira.'},
 hatchBoost:{name:'Boost de incubação',kind:'boost',price:1800,max:10,duration:60,color:0xffaccb,icon:'egg',desc:'Os ovos do curral chocam duas vezes mais rápido por 60 segundos.'},
 incomeBoost:{name:'Boost do curral',kind:'boost',price:4500,max:10,duration:90,color:0xbaf28b,icon:'coin',desc:'As criaturas produzem o dobro de integros durante 90 segundos de jogo.'}
};
