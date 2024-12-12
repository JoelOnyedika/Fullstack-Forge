import Navbar from "../components/Navbar"
import Logo from "../assets/logo.jpeg"


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-xl w-full">
          <div className="mb-12 flex justify-center">
            <img 
        src={Logo}
              alt="FullStackForge Logo" 
              className="h-40 w-40 object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Project Successfully Generated!
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Congratulations! Your project is now set up with FullStackForge. 
            You're ready to start building amazing applications with ease.
          </p>

          <div className="flex justify-center space-x-4">
            <a 
              href="/login" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Go to Dashboard
            </a>
            <a 
              href="/docs" 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} FullStackForge. All rights reserved.
      </footer>
    </div>
  );
};

export default Home