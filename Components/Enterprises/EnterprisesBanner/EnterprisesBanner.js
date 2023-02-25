import Link from "next/link";



const EnterprisesBanner = () => {
  return (
    <div>
      <div>

      </div>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img style={{ height: '500px' }} src="https://assets.asana.biz/transform/9e24ec4a-b1a0-4c2f-b2ee-9312878cd334/enterprise-hero?io=transform:fill,width:1440&format=webp" />
          <div>
<<<<<<< HEAD
            <h2 className="text-gray-400 text-2xl mb-5">Creative Project Manager Enterprises </h2>
            <h1 className="text-5xl ">Adapt and scale with confidence</h1>

            <p className="py-6 mt-7 mb-7 text-3xl">Find out why more than 80% of Fortune 100 companies use CPM.*</p>
=======
            <h2 className="text-blue-400 text-2xl mb-5">Creative Project Manager Enterprises </h2>
            <h1 className="text-5xl ">Adapt and scale with confidence</h1>

            <p className="py-6 mt-7 mb-7  text-blue-400  text-3xl">Find out why more than 80% of Fortune 100 companies use CPM.*</p>
>>>>>>> 57251e59d59d7c9bb7003a0a9ae77f806a215a4c
            <Link href='/SalesTeam/SalesTeam'>
              <button className="buttonColor rounded px-3 py-1 font-bold">Contact sales</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterprisesBanner;