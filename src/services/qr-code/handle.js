import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) {
        console.error('error on aplication');
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green('QR code generated with success'));
        console.log(qrcode);
    });

    
    


}


export default handle;