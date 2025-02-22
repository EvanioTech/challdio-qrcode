import permitedCharacters from "./utils/permited-characters.js";

async function handle() {
    let characters = [];
    let password = "";

    const passwordLength = Number(process.env.LENGTH) || 8;

    characters = await permitedCharacters();

    for(let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
        
        
        
        
    }
    
    return password

}

export default handle;