export async function generateStaticParams() {
  return [
    {
      slug: ["page-1", "sub-page-1"],
    },
    {
      slug: ["page-2", "sub-page-2"],
    },
  ];
}
export default function Home(props) {
  console.log(props);
  return <>{JSON.stringify(props.params.slug)}</>;
}
