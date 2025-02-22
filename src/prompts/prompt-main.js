import chalk from "chalk";



const mainPrompt = [
    {
        name: 'select',
        description: chalk.bgGreenBright.yellow('Escolha a ferramenta (1 - QRCODE ou (2 - PASSWORD'), 
            pattern: /^[1-2]$/,
            message: chalk.red.italic('Escolha uma opção válida'),
            required: true,

    }

]


export default mainPrompt; 