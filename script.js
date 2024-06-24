document.addEventListener('DOMContentLoaded', function() {
    const musicList = document.getElementById('music-list');
    const lyricsDiv = document.getElementById('lyrics');
    const homeDiv = document.getElementById('home');
    const backButton = document.getElementById('back-button');
    const songTitle = document.getElementById('song-title');
    const songLyrics = document.getElementById('song-lyrics');

    // Dados das músicas
    const songs = {
        1: {
            title: "The Mess - Melody Lanzieri",
            lyrics: `
            Eu não sei o que está acontecendo aqui<br>
            Pensei que tinha acabado com isso<br>
            Com isso<br>
            Essa é a primeira vez que estou sendo sincera<br>
            Eu não sinto amor quando canto<br>
            Quando canto<br>
            Normalmente eu tenho medo de dizer as pessoas que eu poderia muito usar asas<br>
            <br>
            Para voar para longe dessa bagunça<br>
            Digo que estou bem, mas quero fugir<br>
            Correr de mim mesma<br>
            Às vezes me pouparia muito estresse<br>
            Eu quero saber como é<br>
            Me amar<br>
            <br>
            Não estou sentindo vontade<br>
            De fazer nada disso<br>
            Nada disso<br>
            Pela primeira vez em muito tempo<br>
            As cordas do meu violão estão estourando em mim<br>
            Estourando em mim<br>
            Só quero entender isso que estou sentindo<br>
            Nem a música está me fazendo feliz<br>
            Eu preciso<br>
            <br>
            De voar pra longe dessa bagunça<br>
            Digo que estou bem, mas quero fugir<br>
            Correr de mim mesma<br>
            Às vezes me pouparia muito estresse<br>
            Eu quero saber como é<br>
            Me amar<br>
            <br>
            Preciso achar alguém<br>
            Alguém para amar<br>
            Achar alguém<br>
            Alguém para amar<br>
            Achar alguém<br>
            Alguém para amar`
        },
        2: {
            title: "Hero - Skillet",
            lyrics: `Eu estou apenas um passo de distância<br>
            Estou a um suspiro de distância<br>
            Perder a minha fé hoje<br>
            Caindo de vez<br>
            <br>
            Eu sou apenas um homem<br>
            Não um super homem<br>
            Eu não sou um super homem<br>
            Alguém me salve do ódio<br>
            <br>
            É apenas mais uma guerra<br>
            Apenas outra família destruída<br>
            Perdendo minha fé hoje<br>
            A um passo do precipício<br>
            Apenas um outro dia no mundo em que vivemos<br>
            <br>
            Preciso de um herói para me salvar agora<br>
            Preciso de um herói<br>
            Salve-me agora<br>
            Preciso de um herói para salvar a minha vida<br>
            Um herói irá me salvar<br>
            Bem há tempo<br>
            <br>
            Eu tenho que lutar hoje<br>
            Para viver outro dia<br>
            Falando o que penso<br>
            Minha voz será ouvida hoje<br>
            <br>
            Eu tenho que marcar presença<br>
            Mas eu sou apenas um homem<br>
            Eu não sou super homem<br>
            A minha voz será ouvida hoje<br>
            <br>
            É apenas mais uma guerra<br>
            Apenas outra família destruída<br>
            Minha voz será ouvida hoje<br>
            É só outra matança<br>
            A contagem regressiva para nos destruir começou<br>
            <br>
            Preciso de um herói para me salvar agora<br>
            Preciso de um herói<br>
            Salve-me agora<br>
            Preciso de um herói para salvar a minha vida<br>
            Um herói irá me salvar<br>
            Bem há tempo<br>
            <br>
            Preciso de um herói para salvar a minha vida<br>
            Preciso de um herói<br>
            Bem há tempo<br>
            <br>
            Salve-me bem há tempo<br>
            Salve-me bem há tempo<br>
            <br>
            Quem vai lutar pelo certo?<br>
            Quem vai nos ajudar a sobreviver?<br>
            Estamos na luta das nossas vidas<br>
            E nós não estamos prontos para morrer<br>
            <br>
            Quem vai lutar pelos fracos?<br>
            Quem vai fazê-los crer?<br>
            Eu tenho um herói<br>
            Eu tenho um herói<br>
            <br>
            Vivendo em mim<br>
            <br>
            Vou lutar pelo o que é certo<br>
            Hoje eu estou falando o que penso<br>
            E se isso me matar esta noite<br>
            Eu estarei pronto para morrer<br>
            <br>
            Um herói não tem medo de dar sua vida<br>
            Um herói vai me salvar bem a tempo<br>
            <br>
            Preciso de um herói para me salvar agora<br>
            Preciso de um herói<br>
            Salve-me agora<br>
            Preciso de um herói para salvar a minha vida<br>
            Um herói irá me salvar<br>
            Bem há tempo<br>
            <br>
            Preciso de um herói para salvar a minha vida<br>
            Que vai lutar pelo que é certo<br>
            Que vai nos ajudar a sobreviver<br>
            <br>
            Preciso de um herói para salvar a minha vida<br>
            Que vai lutar pelos fracos<br>
            Que vai fazê-los acreditar<br>
            <br>
            Preciso de um herói<br>
            <br>
            Preciso de um herói<br>
            <br>
            Um herói vai me salvar a tempo!<br>
            Eu estou apenas um passo de distância<br>
            Estou a um suspiro de distância<br>
            Perder a minha fé hoje<br>
            Caindo de vez<br>
            <br>
            Eu sou apenas um homem<br>
            Não um super homem<br>
            Eu não sou um super homem<br>
            Alguém me salve do ódio<br>
            <br>
            É apenas mais uma guerra<br>
            Apenas outra família destruída<br>
            Perdendo minha fé hoje<br>
            A um passo do precipício<br>
            Apenas um outro dia no mundo em que vivemos<br>
            <br>
            Preciso de um herói para me salvar agora<br>
            Preciso de um herói<br>
            Salve-me agora<br>
            Preciso de um herói para salvar a minha vida<br>
            Um herói irá me salvar<br>
            Bem há tempo<br>
            <br>
            Eu tenho que lutar hoje<br>
            Para viver outro dia<br>
            Falando o que penso<br>
            Minha voz será ouvida hoje<br>
            <br>
            Eu tenho que marcar presença<br>
            Mas eu sou apenas um homem<br>
            Eu não sou super homem<br>
            A minha voz será ouvida hoje<br>
            <br>
            É apenas mais uma guerra<br>
            Apenas outra família destruída<br>
            Minha voz será ouvida hoje<br>
            É só outra matança<br>
            A contagem regressiva para nos destruir começou<br>
            <br>
            Preciso de um herói para me salvar agora<br>
            Preciso de um herói<br>
            Salve-me agora<br>
            Preciso de um herói para salvar a minha vida<br>
            Um herói irá me salvar<br>
            Bem há tempo<br>
            <br>
            Preciso de um herói para salvar a minha vida<br>
            Preciso de um herói<br>
            Bem há tempo<br>
            <br>
            Salve-me bem há tempo<br>
            Salve-me bem há tempo<br>
            <br>
            Quem vai lutar pelo certo?<br>
            Quem vai nos ajudar a sobreviver?<br>
            Estamos na luta das nossas vidas<br>
            E nós não estamos prontos para morrer<br>
            <br>
            Quem vai lutar pelos fracos?<br>
            Quem vai fazê-los crer?<br>
            Eu tenho um herói<br>
            Eu tenho um herói<br>
            <br>
            Vivendo em mim<br>
            <br>
            Vou lutar pelo o que é certo<br>
            Hoje eu estou falando o que penso<br>
            E se isso me matar esta noite<br>
            Eu estarei pronto para morrer<br>
            <br>
            Um herói não tem medo de dar sua vida<br>
            Um herói vai me salvar bem a tempo<br>
            <br>
            Preciso de um herói para me salvar agora<br>
            Preciso de um herói<br>
            Salve-me agora<br>
            Preciso de um herói para salvar a minha vida<br>
            Um herói irá me salvar<br>
            Bem há tempo<br>
            <br>
            Preciso de um herói para salvar a minha vida<br>
            Que vai lutar pelo que é certo<br>
            Que vai nos ajudar a sobreviver<br>
            <br>
            Preciso de um herói para salvar a minha vida<br>
            Que vai lutar pelos fracos<br>
            Que vai fazê-los acreditar<br>
            <br>
            Preciso de um herói<br>
            <br>
            Preciso de um herói<br>
            <br>
            Um herói vai me salvar a tempo!
            `
        },
        3: {
            title: "No Way Back! – Melody Lanzieri",
            lyrics: `Eu estava machucado, estava no fundo do poço<br>
            Eu estava enganado, não via mais propósito<br>
            Sou um sobrevivente em busca de respostas<br>
            Implorando por amor daqueles que não sabiam como dar<br>
            Ei, pílulas, minhas amigas, só vocês podem me ajudar agora<br>
            Não há volta! Não há volta!<br>
            <br>
            E quando eu chorei<br>
            Você me segurou<br>
            E me mostrou<br>
            Que não era o fim<br>
            Eu tentei encontrar<br>
            Você me fez ver<br>
            Que o amor está acima de tudo que eu conheço<br>
            <br>
            Eu desmaiei e minha vida passou diante de mim<br>
            Felizmente, eu tinha alguém para me salvar<br>
            Me trouxe de volta à vida, ressuscitou o que morreu<br>
            Me salvou de mim mesmo<br>
            Não há volta!<br>
            <br>
            E quando eu chorei<br>
            Você me segurou<br>
            E me mostrou<br>
            Que não era o fim<br>
            Eu tentei encontrar<br>
            Você me fez ver<br>
            Que o amor está acima de tudo que eu conheço<br>
            <br>
            E quando eu chorei<br>
            Você me segurou<br>
            E me mostrou<br>
            Que não era o fim<br>
            Eu tentei encontrar<br>
            Você me fez ver<br>
            Que o amor está acima de tudo que eu conheço
            `
        },
        4: {
            title: "Survive – Melody Lanzieri",
            lyrics: `Não preciso me preocupar com a minha vida<br>
            Pois Você está no controle<br>
            As coisas não aconteceram como eu planejei<br>
            Mas a minha alegria ele não vai roubar<br>
            <br>
            Eu sei que estou ansiosa<br>
            Mas escuto Você dizendo<br>
            Que devo confiar<br>
            E me acalmar<br>
            <br>
            Senhor tome meus fardos em Tuas mãos<br>
            Pois para Ti eles não são pesados<br>
            Se na Tua presença eu ficar<br>
            Terei tudo o que eu preciso<br>
            Para sobreviver<br>
            Para sobreviver<br>
            Para sobreviver<br>
            <br>
            Eu sei que estou ansiosa<br>
            Mas escuto Você dizendo<br>
            Que devo confiar<br>
            E me acalmar<br>
            Eu sei que estou ansiosa<br>
            Mas escuto Você dizendo<br>
            <br>
            Senhor tome meus fardos em Tuas mãos<br>
            Pois para Ti eles não são pesados<br>
            Se na Tua presença eu ficar<br>
            Terei tudo o que eu preciso<br>
            Para sobreviver<br>
            Para sobreviver<br>
            Para sobreviver<br>
            <br>
            Eu não vou<br>
            Perder o meu tempo<br>
            Tentando escalar<br>
            A montanha do suicídio<br>
            Aqui estou eu Deus<br>
            Te dou meu coração<br>
            Para que eu possa ser livre<br>
            Para sobreviver<br>
            <br>
            Senhor tome meus fardos em Tuas mãos<br>
            Pois para Ti eles não são pesados<br>
            Se na Tua presença eu ficar<br>
            Terei tudo o que eu preciso<br>
            Para sobreviver<br>
            Para sobreviver<br>
            Para sobreviver`
        },
        5: {
            title: "Last Hope – Paramore",
            lyrics: `Eu nem sequer conheço a mim mesma<br>
            Pensei que estaria feliz a esta altura<br>
            Quanto mais eu tento forçar, mais percebo<br>
            Que tenho de abrir mão do controle<br>
            <br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Então, deixe que isso aconteça<br>
            <br>
            É apenas uma faísca<br>
            Mas é o suficiente para que eu continue tentando<br>
            Quando está escuro lá fora<br>
            Ninguém está por perto, ela continua brilhante<br>
            <br>
            Toda noite tento o meu melhor para sonhar<br>
            Que amanhã será melhor<br>
            Mas acordo para a fria realidade<br>
            De que nada mudou<br>
            <br>
            Mas isso vai acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            <br>
            É apenas uma faísca<br>
            Mas é o suficiente para que eu continue tentando<br>
            Quando está escuro lá fora<br>
            Ninguém está por perto, ela continua brilhante<br>
            É apenas uma faísca<br>
            Mas é o suficiente para que eu continue tentando<br>
            Quando está escuro lá fora<br>
            Ninguém está por perto, ela continua brilhante<br>
            <br>
            E o sal em minhas feridas<br>
            Não arde mais como costumava<br>
            Não é que eu não sinta dor<br>
            Apenas não tenho mais medo de me ferir<br>
            E o sangue nestas veias<br>
            Não está bombeando menos do que um dia esteve<br>
            E essa é a esperança que tenho<br>
            A única coisa que eu sei é que me mantém viva, viva<br>
            <br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            Tenho que deixar isso acontecer<br>
            <br>
            É apenas uma faísca<br>
            Mas é o suficiente para que eu continue tentando<br>
            (Então, se eu abrir mão do controle, agora posso ser forte)<br>
            Quando está escuro lá fora<br>
            Ninguém está por perto, ela continua brilhante<br>
            É apenas uma faísca<br>
            Mas é o suficiente para que eu continue tentando<br>
            (Se eu manter meus olhos fechados, com uma esperança cega)<br>
            Quando está escuro lá fora<br>
            Ninguém está por perto, ela continua brilhante`
        },
        6: {
            title: "All Of Me – Ashes Remain",
            lyrics: `Eu sou uma bagunça de contradições<br>
            Eu sou um duvidoso que acredita<br>
            E eu tento esconder as falhas que eu não quero que Você veja<br>
            <br>
            Mas Você me diz que me ama, mais do que posso entender<br>
            E Você ainda me chama, para vir como eu estou!<br>
            <br>
            Você quer minha fé<br>
            Você quer minha dúvida<br>
            Coisas sobre as quais não quero falar<br>
            Tudo que está quebrado, curado e em algum lugar intermediário<br>
            Eu vou me lançar aos seus pés, e não vou segurar mais nada<br>
            Porque o que Você quer é tudo<br>
            O que Você quer é tudo de mim<br>
            <br>
            Você conhece todos os batimentos cardíacos<br>
            Você sabe cada respiração que eu respiro<br>
            Todo o pecado que me manteve cativo, antes que a misericórdia me libertasse<br>
            Você é o Deus do novo começo, você nunca me deixará<br>
            Seus braços estão abertos, então não temerei<br>
            <br>
            Você traz minha fé<br>
            Você quebra minha dúvida<br>
            Coisas sobre as quais não quero falar<br>
            Tudo que está quebrado, curado e em algum lugar intermediário<br>
            Eu vou lançar aos seus pés, e não vou segurar nada<br>
            Porque o que Você quer é tudo<br>
            O que Você quer é tudo de mim<br>
            <br>
            Tudo o que sou, coloco em suas mãos<br>
            Tudo o que eu já sabia, cada momento Deus é seu<br>
            Tudo de mim!<br>
            <br>
            Você quer minha fé<br>
            Você quer minha dúvida<br>
            Coisas sobre as quais não quero falar<br>
            Tudo isso está quebrado, curado e em algum lugar intermediário<br>
            Quebrado, curado e em algum lugar intermediário<br>
            Você quer minha fé<br>
            Você quer minha dúvida<br>
            Coisas sobre as quais não quero falar<br>
            Tudo isso está quebrado, curado e em algum lugar intermediário<br>
            Eu vou lançar aos seus pés, e eu não vou segurar nada<br>
            O que você quer é tudo, o que você quer é tudo de mim<br>
            Tudo de mim!
            `
        },
        7: {
            title: "Only a Passenger - Melody Lanzieri",
            lyrics: `Hoje em dia estou me sentindo esquecida<br>
            Tenho pensado que meus dias aqui poderiam ser encurtados<br>
            Mas aqui na Tua presença<br>
            Eu entendo que você tem planos<br>
            Não vou me deixar levar pelos homens<br>
            É difícil acreditar que Você está cuidando<br>
            Mas você me lembra que eu sou rara<br>
            E mesmo se eu desistir de Você<br>
            Eu sei que Você não vai desistir de mim<br>
            <br>
            Guia-me<br>
            Na caminhada, sim, Você me chamou para isso<br>
            As portas ruins<br>
            Você vai trancar, no deserto você vai relembrar<br>
            Que sou apenas um passageiro<br>
            <br>
            E se eu for um personagem para todas essas pessoas<br>
            Tenho certeza que isso será letal<br>
            Eu tento tanto ser como Jesus em minha caminhada e em meu discurso<br>
            <br>
            Guia-me<br>
            Na caminhada, sim, você me chamou para isso<br>
            As portas ruins<br>
            Você vai trancar, no deserto você vai relembrar<br>
            Que sou apenas um passageiro<br>
            <br>
            Diga-me que não estou sozinho<br>
            Com você eu não estou sozinho<br>
            Diga-me que não estou sozinho<br>
            Com você eu não estou sozinho<br>
            Diga-me que não estou sozinho<br>
            Com você eu não estou sozinho<br>
            Diga-me que não estou sozinho<br>
            Com você eu não estou sozinho<br>
            <br>
            Guia-me<br>
            Na caminhada, sim, você me chamou para isso<br>
            As portas ruins<br>
            Você vai trancar, no deserto você vai relembrar<br>
            Que sou apenas um passageiro
            `
        },
        8: {
            title: "Bring Me To Life - Evanescence",
            lyrics: `Como Você pode ver através de meus olhos<br>
            como portas abertas<br>
            Conduzindo Você até meu interior.<br>
            onde eu me tornei tão entorpecido;<br>
            Sem uma alma.<br>
            Meu espirito dorme em algum lugar frio,<br>
            Até que Você o encontre e o leve de volta pra casa.<br>
            <br>
            (Acorde-me.)<br>
            Acorde-me por dentro.<br>
            (Eu não consigo acordar.)<br>
            Acorde-me por dentro.<br>
            (Salve-me.)<br>
            Chame meu nome e salve-me da escuridão.<br>
            (Acorde-me.)<br>
            Obrigue meu sangue a fluir.<br>
            (Eu não consigo acordar.)<br>
            Antes que eu me desfaça.<br>
            (Salve-me.)<br>
            Salve-me do nada que eu me tornei.<br>
            <br>
            Agora que eu sei o que eu não tenho<br>
            Você não pode simplesmente me deixar.<br>
            Respire através de mim me faça real.<br>
            Traga-me para a vida.<br>
            <br>
            (Acorde-me.)<br>
            Acorde-me por dentro.<br>
            (Eu não consigo acordar.)<br>
            Acorde-me por dentro.<br>
            (Salve-me.)<br>
            Chame meu nome e salve-me da escuridão.<br>
            (Acorde-me.)<br>
            Obrigue meu sangue a fluir.<br>
            (Eu não consigo acordar.)<br>
            Antes que eu me desfaça.<br>
            (Salve-me.)<br>
            Salve-me do nada que eu me tornei<br>
            <br>
            Traga-me para a vida.<br>
            (Eu tenho vivido uma mentira/Não há nada lá dentro.)<br>
            Traga-me para a vida.<br>
            <br>
            Congelada por dentro, sem o Seu toque,<br>
            Sem o amor, Pai.<br>
            Só Você é a vida entre os mortos.<br>
            <br>
            Todo esse tempo.<br>
            Eu não posso acreditar que eu não pude ver.<br>
            Me mantive no escuro.<br>
            mas você estava lá na minha frente.<br>
            Eu tenho dormido há 1000 anos, parece.<br>
            Eu tenho que abrir meus olhos para tudo.<br>
            <br>
            Sem um pensamento.<br>
            Sem uma voz.<br>
            Sem uma alma.<br>
            (Não me deixe morrer aqui/Deve haver algo a mais.)<br>
            Traga-me para a vida.<br>
            <br>
            (Acorde-me.)<br>
            Acorde-me por dentro.<br>
            (Eu não consigo acordar.)<br>
            Acorde-me por dentro.<br>
            (Salve-me.)<br>
            Chame meu nome e salve-me da escuridão.<br>
            (Acorde-me.)<br>
            Obrigue meu sangue a fluir.<br>
            (Eu não consigo acordar.)<br>
            Antes que eu me desfaça.<br>
            (Salve-me.)<br>
            Salve-me do nada que eu me tornei.<br>
            <br>
            Traga-me para a vida<br>
            (Eu tenho vivido uma mentira/Não tem nada lá dentro.)<br>
            Traga-me para a vida.
            `
        },
        9: {
            title: "Rainbow – Melody Lanzieri",
            lyrics: `Eu te sinto perto de mim<br>
            Sussurrando canções<br>
            E as pessoas vão ver que nós pertencemos um ao outro<br>
            Não há nada que eu possa fazer<br>
            Pois estou me apaixonando por Você<br>
            E essa é a primeira vez que eu vejo<br>
            Que é para o resto da vida<br>
            <br>
            Então vem e me mostra<br>
            Que não é coisa da minha cabeça<br>
            Porque eu acredito em cada palavra que Você diz<br>
            Eles me fizeram acreditar que o amor verdadeiro era vermelho<br>
            Mas eu vejo que o Seu amor é o arco íris ao invés disso<br>
            <br>
            O arco íris ao invés disso<br>
            O arco íris ao invés disso<br>
            <br>
            Estou tomando o meu tempo para Te conhecer melhor<br>
            Isso deveria ser um crime pois eu não quero mais esperar<br>
            Estou feliz que Te encontrei<br>
            Eu quero gritar para o mundo<br>
            Que Você me ama também<br>
            Então não preciso me preocupar<br>
            <br>
            Então vem e me mostra<br>
            Que não é coisa da minha cabeça<br>
            Porque eu acredito em cada palavra que Você diz<br>
            Eles me fizeram acreditar que o amor verdadeiro era vermelho<br>
            Mas eu vejo que o Seu amor é o arco íris ao invés disso<br>
            <br>
            O arco íris ao invés disso<br>
            O arco íris ao invés disso<br>
            <br>
            Então se eu algum dia eu for embora<br>
            Me diga que Você encontrará o caminho<br>
            Com Você eu quero ficar<br>
            Ontem, hoje, amanhã, todo dia<br>
            Com você eu não preciso fazer joguinhos<br>
            <br>
            Cante comigo a canção mais nova<br>
            Eu prometo que cantarei junto<br>
            Não, a gente não pode dar errado<br>
            Pois eu sei que pertencemos<br>
            Eu Te esperei por tanto tempo<br>
            Sim, sim, Você me faz forte<br>
            <br>
            Você brilha tanto<br>
            Suas, cores, sua luz<br>
            Que horas é o próximo vôo?<br>
            Consigo chegar a noite?<br>
            Estou tentando ser polida<br>
            Mas Você sabe que não consigo ficar quieta<br>
            Então agora vou gritar para o mundo<br>
            Que o nosso amor é certo<br>
            <br>
            Então vem e me mostra<br>
            Que não é coisa da minha cabeça<br>
            Porque eu acredito em cada palavra que Você diz<br>
            Eles me fizeram acreditar que o amor verdadeiro era vermelho<br>
            Mas eu vejo que o Seu amor é o arco íris ao invés disso<br>
            <br>
            O arco íris ao invés disso<br>
            O arco íris ao invés disso
            `
        },
        10: {
            title: "Eternal Life – Melody Lanzieri + Don’t You Worry Child",
            lyrics: `Você conhece meu coração<br>
            Eu nasci separado<br>
            E Você pode afirmar<br>
            Que Você me escolheu<br>
            <br>
            E agora eu sei<br>
            Que eu não tenho para onde ir<br>
            Tantos deixaram Você<br>
            Mas eu não vou<br>
            <br>
            Porque só Você me dá<br>
            As palavras da vida eterna<br>
            Só Você me dá<br>
            As palavras da vida eterna<br>
            <br>
            Você é o Cristo<br>
            Você pagou o preço<br>
            E então você decidiu<br>
            Que você estava me libertando<br>
            <br>
            E agora eu sei<br>
            Que eu não tenho para onde ir<br>
            Tantos deixaram Você<br>
            Mas eu não vou<br>
            <br>
            Porque só Você me dá<br>
            As palavras da vida eternam<br>
            Só Você me dá<br>
            As palavras da vida eterna<br>
            <br>
            Tu és o Filho do Deus vivo<br>
            Você sempre será meu Senhor<br>
            <br>
            E agora eu sei<br>
            Que eu não tenho para onde ir<br>
            Tantos deixaram Você<br>
            Mas eu não vou<br>
            <br>
            Porque só você me dá<br>
            As palavras da vida eterna<br>
            Só você me dá<br>
            As palavras da vida eterna<br>
            <br>
            Você me disse:<br>
            Não se preocupe, não se preocupe, criança<br>
            Veja, o céu tem um plano pra você<br>
            Não se preocupe, não se preocupe agora<br>
            Sim<br>
            Não se preocupe, não se preocupe, criança<br>
            Veja, o céu tem um plano pra você<br>
            Não se preocupe, não se preocupe agora<br>
            Sim<br>
            <br>
            Havia um tempo em que<br>
            Eu costumava olhar nos olhos do meu pai<br>
            Em um lar feliz<br>
            Eu era um rei, eu tinha um trono dourado<br>
            <br>
            Aqueles dias se foram<br>
            Agora são memórias na parede<br>
            Eu ouço as canções<br>
            Dos lugares de onde eu nasci<br>
            <br>
            Lá na colina, do outro lado do lago azul<br>
            Foi lá que meu coração se partiu pela primeira vez<br>
            Eu ainda me lembro de como tudo mudou<br>
            Meu pai disse<br>
            <br>
            Não se preocupe, não se preocupe, criança<br>
            Veja, o céu tem um plano pra você<br>
            Não se preocupe, não se preocupe agora<br>
            Sim<br>
            Não se preocupe, não se preocupe, criança<br>
            Veja, o céu tem um plano pra você<br>
            Não se preocupe, não se preocupe agora<br>
            Sim`
        }
    };

    // Função para exibir a letra da música
    function showLyrics(songId) {
        const song = songs[songId];
        songTitle.innerText = song.title;
        songLyrics.innerHTML = song.lyrics; // Use innerHTML para preservar a formatação
        homeDiv.style.display = 'none';
        lyricsDiv.style.display = 'block';
    }

    // Função para voltar para a lista de músicas
    function goBack() {
        homeDiv.style.display = 'block';
        lyricsDiv.style.display = 'none';
    }

    // Adiciona o evento de clique em cada item da lista de músicas
    musicList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === 'LI') {
            const songId = e.target.getAttribute('data-song');
            showLyrics(songId);
        }
    });

    // Adiciona o evento de clique no botão de voltar
    backButton.addEventListener('click', goBack);
});
