import chalk from "chalk"

const promptQrCode = [

    {
        name: "link",
        description: chalk.green("Enter the link to generate QR code"),
        required: true
    },
    {
        name: "type",
        description: chalk.green("Escolha entre o tipo (1- NORMAL ou (2- TERMINAL"),
       pattern: /^[1-2]$/,
        message: chalk.red("Escolha entre 1 e 2"),
        required: true
    }
]

export default promptQrCode;