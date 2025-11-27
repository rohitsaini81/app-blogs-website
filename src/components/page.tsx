import { notFound } from 'next/navigation';

export default async function Apps({ params }) {


    const { platform } = await params;
  console.log('Route params:', platform);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      
      

      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">hello folks{platform}</p>
        

    </div>
  );
}
