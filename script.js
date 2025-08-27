// Banco de dados de prompts
const prompts = {
    youtube: {
        roteiro: "Escreva um roteiro de 10 minutos para YouTube sobre [TEMA]. Inclua um hook impactante nos primeiros 15 segundos, pelo menos 3 tópicos principais com exemplos práticos e uma call-to-action clara para inscrições e likes.",
        ideia: "Gere 5 ideias virais para vídeos do YouTube no nicho de [NICHO]. As ideias devem ser polêmicas, úteis ou emocionais para maximizar o engajamento."
    },
    tiktok: {
        roteiro: "Crie um roteiro para um vídeo de TikTok de 45 segundos sobre [TEMA]. Use um tom energético, inclua pelo menos 2 transições criativas e uma legenda engajadora com hashtags relevantes.",
        ideia: "Liste 3 tendências atuais do TikTok que podem ser aplicadas ao nicho de [NICHO]. Explique como adaptar cada uma."
    },
    terror: {
        roteiro: "Escreva um roteiro de 5 minutos para um vídeo de terror sobre [TEMA]. Use suspense crescente, elementos sombrios e um final chocante. Inclua descrições de sons ambientes e efeitos visuais.",
        ideia: "Gere 3 ideias de histórias de terror baseadas em lendas urbanas modernas envolvendo tecnologia ou vida urbana."
    },
    marketing: {
        email: "Escreva um email de vendas para promover [PRODUTO/SERVIÇO]. Use o método AIDA (Atenção, Interesse, Desejo, Ação) e inclua um call-to-action urgente. Destaque os benefícios, não apenas as features.",
        post: "Crie uma copy para post de Instagram que promova [PRODUTO/SERVIÇO] com foco em benefícios emocionais e uma oferta irresistível. Inclua sugestão de legenda e hashtags."
    }
};

function gerarPrompt() {
    const nicho = document.getElementById('nichos').value;
    const tipo = document.getElementById('tipoConteudo').value;
    
    if (!nicho || !tipo) {
        alert('Por favor, selecione um nicho e um tipo de conteúdo.');
        return;
    }

    const promptGerado = prompts[nicho]?.[tipo] || "Desculpe, não encontrei um prompt para esta combinação. Tente outra!";
    document.getElementById('resultadoPrompt').value = promptGerado;
}

function copiarPrompt() {
    const texto = document.getElementById('resultadoPrompt');
    texto.select();
    document.execCommand('copy');
    alert('Prompt copiado para a área de transferência! ✅');
}
