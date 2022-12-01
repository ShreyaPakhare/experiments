import Head from "next/head"

function Home() {
  return (
    <>
    <Head>
      <title>Diploma IT Experiments</title>
      <meta name="description" content="Now copying code became easy" />
    </Head>
    <main className="w-full min-h-[80vh] font-montserrat grid place-items-center">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl underline">
          Thank Me Later
        </h1>
      </div>
    </main>
    </>
  );
};

export default Home;