import { GetServerSideProps } from "next";
interface Props {
  data: any;
}

export default function Page({ data }: Props) {
  return <p></p>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const itemType = params?.itemType as string; // Extract the itemType parameter from the URL

  // Fetch data based on itemType, example using a fictional API endpoint
  const res = await fetch(`https://api.example.com/items?type=${itemType}`);
  const data = await res.json();
  if (!data || res.status !== 200) {
    return {
      notFound: true, // Causes Next.js to render a standard 404 page
    };
  }
  return {
    props: { data }, // Passed to the page component as props
  };
};
