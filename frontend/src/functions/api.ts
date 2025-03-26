const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
	console.log(`${baseURL}/${url}`)
	const response = await fetch(`${baseURL}/${url}`)
	const data = await response.json()
	console.log(data) // Log the response data for debugging
	return data
}
