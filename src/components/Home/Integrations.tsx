import Image from "next/image";

export default function Integrations() {
  return (
    <section className="bg-[#6F0C15D4] rounded-t-[2.5rem] rounded-bl-[2.5rem] px-2 md:px-6 py-10 md:py-16 mb-14">
      <div className="max-w-[1200px] mx-auto overflow-x-auto">
        <h2 className="text-white font-bold text-2xl md:text-3xl text-center mb-10 font-poppins">
          Seamless Integrations
        </h2>
        <div
          className="
            grid 
            grid-cols-1       
            sm:grid-cols-2    
            md:grid-cols-3    
            justify-items-center 
          "
          style={{ minWidth: 'auto' }} /* Remove fixed min-width for responsiveness */
        >
          {/* Card 1 */}
          <div className="bg-white text-[#7c1d1d] border-6 border-[#7c1d1d] rounded-xl p-4 flex flex-col w-full max-w-[25rem] h-[20rem] md:mb-20">
            <div className="w-full h-24 md:h-32 bg-gray-200 rounded-md mb-4 shadow-sm flex items-center justify-center">
              <Image
                src="/integrations/hoducc.png"
                alt="HoduCC Connector"
                width={90}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="font-semibold text-[#7c1d1d] mb-1 font-poppins">
              HoduCC Connector
            </div>
            <p className="text-sm text-[#7c1d1d] font-poppins">
              Ingest call recordings straight from your contact-center queues - tagged by agent, campaign, or custom metadata.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#8a3c3c] border-4 border-white rounded-xl p-4 flex flex-col w-full max-w-[25rem] h-[20rem]">
            <div className="w-full h-24 md:h-32 bg-gray-200 rounded-md mb-4 shadow-sm flex items-center justify-center">
              <Image
                src="/integrations/aws.png"
                alt="AWS S3 & Glacier"
                width={180}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="font-semibold text-white mb-1 font-poppins">
              AWS S3 &amp; Glacier
            </div>
            <p className="text-sm text-white font-poppins">
              Archive your files in auto-tiered buckets for instant recall or cost-optimized cold storage.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#8a3c3c] border-4 border-white rounded-xl p-4 flex flex-col w-full max-w-[25rem] h-[20rem]">
            <div className="w-full h-24 md:h-32 bg-gray-200 rounded-md mb-4 shadow-sm flex items-center justify-center">
              <Image
                src="/integrations/aws.png"
                alt="AWS S3 & Glacier"
                width={300}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="font-semibold text-white mb-1 font-poppins">
              AWS S3 &amp; Glacier
            </div>
            <p className="text-sm text-white font-poppins">
              Archive your files in auto-tiered buckets for instant recall or cost-optimized cold storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
