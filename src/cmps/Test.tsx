// This component uses standard React hooks and is automatically SSR'd by Next.js,
// and it will be interactive on the client-side after hydration.

import { useState } from "react";

function InteractiveComponent({ initialData }: any) {
  const [data, setData] = useState(initialData); // State initialized with server-provided data
  const [loading, setLoading] = useState(false);

  // Client-side interaction: Fetch new data when a button is clicked
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("/api/data"); // Assume this is a client-side fetch to your API
    const newData = await response.json();
    setData(newData);
    setLoading(false);
  };

  return (
    <div>
      <h1>Server Rendered and Client Interactive Component</h1>
      {loading ? <p>Loading...</p> : <p>Data: {data}</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data server-side
  const res = await fetch("https://example.com/api/data");
  const initialData = await res.json();

  // Pass initial data to the component
  return { props: { initialData } };
}

export default InteractiveComponent;
