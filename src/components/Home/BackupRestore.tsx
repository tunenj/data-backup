import InstantRecovery from '@/components/Home/InstantRecovery';
import DowntimeSection from '@/components/Home/DownSection';


export default function RecoveryDowntimeWrapper() {
 return (
  <div>
   {/* Two-column layout */}
   <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-10 mt-12 lg:mt-16">
        {/* Left Section */}
     <div className="w-full lg:w-1/2 space-y-4">
         <InstantRecovery />
        </div>

        {/* Right Section */}
       <div className="w-full lg:w-1/2">
       <DowntimeSection />
      </div>
     </div>
      {/* Progress Bar under both sections */}
      <div className="flex justify-center"> 
     </div>
   </div>
 );
}

