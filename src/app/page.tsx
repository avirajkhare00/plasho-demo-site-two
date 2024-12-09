import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="text-white py-20 text-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black/30 py-20">
          <h1 className="text-5xl font-bold mb-4">Student Discounts</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">Get exclusive discounts and deals on your favorite brands with your student ID</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Student-First</h3>
              <p className="text-gray-600">Exclusive deals curated specifically for students</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Save More</h3>
              <p className="text-gray-600">Get up to 50% off on various products and services</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Easy Verification</h3>
              <p className="text-gray-600">Quick and simple student verification process</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h4 className="text-xl font-bold text-gray-800">Verify Your Status</h4>
                <p className="mt-2 text-gray-600">Upload your valid student ID or enrollment proof</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h4 className="text-xl font-bold text-gray-800">Get Verified</h4>
                <p className="mt-2 text-gray-600">Quick verification process</p>
              </div>
            </div>
            <div className="text-center">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h4 className="text-xl font-bold text-gray-800">Access Discounts</h4>
                <p className="mt-2 text-gray-600">Start saving with exclusive student deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Saving?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Join thousands of students who are already saving with our exclusive discounts</p>
          <a 
            href="/verify"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-600 transition-colors"
          >
            Verify Student Status
          </a>
        </div>
      </div>
    </main>
  );
}
