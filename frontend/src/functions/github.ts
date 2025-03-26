export async function obterReadme(repoUrl: string) {
    console.log("Received repoUrl:", repoUrl); // Log the repoUrl
    if (!repoUrl || !repoUrl.includes("github.com/")) {
        throw new Error("Invalid repository URL");
    }
    const repositorio = repoUrl.split("github.com/")[1];
    const readmeUrl = `https://raw.githubusercontent.com/${repositorio}/main/README.md`;
    const resposta = await fetch(readmeUrl);
    return resposta.text();
}
