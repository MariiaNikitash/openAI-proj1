etch("https://api.openai.com/v1/completions" , {
    method: "POST"
    headers: {
        Authorization: 'Bearer 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',
        "Content-Type": "application/json"
    },
    body: JSON.stringfy({
        model: "text-davinci-003",
        prompt: "hello, how are you today?",
        max_tokens: 7
    })
})