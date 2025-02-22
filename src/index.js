import prompt from "prompt";

import createQRcode from "./services/qr-code/create.js";

import mainPrompt from "./prompts/prompt-main.js";

async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1){
            await createQRcode();
        }
        if(choose.select == 2){
            console.log("PASSWORD");
        }
    });

    prompt.start();

}

main();