export async function obterReadme(repoUrl: string): Promise<string> {
    if (!repoUrl || !repoUrl.includes("github.com/")) {
        throw new Error("Invalid repository URL");
    }
    const repositorio = repoUrl.split("github.com/")[1];
    const readmeUrl = `https://raw.githubusercontent.com/${repositorio}/main/README.md`;
    try {
        const resposta = await fetch(readmeUrl);
        if (!resposta.ok) {
            throw new Error(`Failed to fetch README: ${resposta.statusText}`);
        }
        return resposta.text();
    } catch (error) {
        console.error("Error fetching README:", error);
        throw error;
    }
}