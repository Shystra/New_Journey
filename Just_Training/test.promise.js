async function getUserGithub(user) {
    try{
        const result = await fetch(`https://api.github.com/users/${user}`);
            // console.log('deu certo =>', result)
                const resultJason = await result.json()
            console.log(resultJason)
        // console.log(resultJason.login)




    }catch (error){
        console.log(" Did'nt load ", error)
    }
}

getUserGithub('Shystra')