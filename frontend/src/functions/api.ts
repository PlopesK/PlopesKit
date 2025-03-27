const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
  try {
    const response = await fetch(`${baseURL}/${url}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}