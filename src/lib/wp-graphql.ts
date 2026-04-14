export async function fetchGraphQL(query: string, variables = {}) {
  const headers = {
    'Content-Type': 'application/json',
  };

  try {
    const res = await fetch('https://www.digiads.gr/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      // Δυναμικό Fetch (Bust Cache) για να δούμε αν δουλεύει η μετατροπή του Backend:
      cache: 'no-store',
    });

    const json = await res.json();
    if (json.errors) {
      console.error('WPGraphQL Errors:', json.errors);
      throw new Error('Failed to fetch GraphQL API');
    }
    
    return json.data;
  } catch (error) {
    console.error('WPGraphQL Fetch Error:', error);
    return null;
  }
}
