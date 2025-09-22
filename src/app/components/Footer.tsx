// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-indigo-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Voice of the Voiceless</h3>
          <p className="mb-2">Call us: +1-206-156 2849</p>
          <p className="mb-2">Mail: Info.voiceofthevoiceless1@gmail.com</p>
          <p>Your Address here</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Donations','Features','Volunteer','About Us','Contact','FAQ','Help'].map(link => (
              <li key={link}>
                <Link href={`/#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:underline">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Branding */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <p className="text-indigo-100 mb-4">
            Whatever it is that you care about, there will be a charity working on it.
          </p>
          <p className="text-sm text-indigo-200">
            &copy; 2023 Voice of the Voiceless. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
