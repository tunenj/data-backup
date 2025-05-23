import React from 'react';

const TrustedSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Instant Recovery Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Instant Recovery</h2>
            <p className="text-lg text-gray-600 mb-6">
              Never lose data with our secure, immutable backups.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Restore
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center">
                <span className="mr-2">[?]</span> Backup
              </button>
            </div>
          </div>

          {/* Downtime Section */}
          <div className="md:w-1/2 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Downtime?</h3>
            <p className="text-lg mb-6">
              Not on our watch. Restore files, apps, or entire systems in minutes—not hours.
            </p>
            <p className="mb-6">
              Solid, secure, scalable data resilience for SaaS, servers, and endpoints. Whether you backup to our cloud, your Azure instance, a local destination, or a third-party cloud, CrashPlan restores your data and your peace of mind.
            </p>
            <button className="text-blue-600 font-medium hover:text-blue-800 transition">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;