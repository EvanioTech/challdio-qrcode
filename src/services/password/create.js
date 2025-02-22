import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(chalk.green("Password created"));
  const password = await handle();
  console.log(chalk.green(`Password: ${password}`));
 
}

export default createPassword;