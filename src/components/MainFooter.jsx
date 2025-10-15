import { Facebook, Instagram, Twitter, Youtube, Globe2 } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="bg-gradient-r from-purple-400 to-purple-600 border-t border-purple-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Globe2 className="text-purple-500" size={26} />
            <h2 className="text-lg font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text">
              speakBridge
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            A platform where people across India can teach, learn, and celebrate
            their cultures and languages through communities, events, and shared
            experiences.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-purple-700">Home</a>
            </li>
            <li>
              <a className="hover:text-purple-700">Communities</a>
            </li>
            <li>
              <a className="hover:text-purple-700">Mentors</a>
            </li>
            <li>
              <a className="hover:text-purple-700">Quizzes</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text mb-3">
            Community
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-purple-700">Cultural Events</a>
            </li>
            <li>
              <a className="hover:text-purple-700">Workshops</a>
            </li>
            <li>
              <a className="hover:text-purple-700">Language Clubs</a>
            </li>
            <li>
              <a className="hover:text-purple-700">Regional Groups</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold bg-gradient-to-b from-purple-500 to-purple-100 text-transparent bg-clip-text mb-3">
            Connect with Us
          </h3>
          <div className="flex gap-4 mt-2">
            <a>
              <Facebook className="hover:text-purple-700" size={22} />
            </a>
            <a>
              <Instagram className="hover:text-purple-700" size={22} />
            </a>
            <a>
              <Twitter className="hover:text-purple-700" size={22} />
            </a>
            <a>
              <Youtube className="hover:text-purple-700" size={22} />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} speakBridge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
