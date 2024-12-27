'use server'

export async function getNotices(): Promise<any[]> {
  try {
    const resp = await fetch(process.env.BASE_API_URL + '/api/notices');
    const respJson = await resp.json();

    if (!resp.ok) {
      throw new Error(respJson?.message || 'Failed to fetch notices');
    }

    return respJson.data;
  } catch (error) {
    console.error('Error fetching notices:', error);
    return [];
  }
}