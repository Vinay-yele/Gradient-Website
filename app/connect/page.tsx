'use client';
import Footer from '@/components/Footer';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Connect() {
  const [showPopup, setShowPopup] = useState(false);

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/gradient.aiml', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/gradient-club', label: 'LinkedIn' },
  ];

  // Close popup automatically when it's shown
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 5000); // Close after 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [showPopup]);

  const handleMailTo = () => {
    // Show the popup
    setShowPopup(true);

    // Trigger the mailto after a short delay
    setTimeout(() => {
      const mailToLink = 'mailto:gradient.mel@bmsce.ac.in';
      window.open(mailToLink, '_blank');
    }, 500); // 500ms delay for better user experience
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-40 -left-64 w-96 h-96 bg-purple-700/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-700/10 rounded-full filter blur-3xl" />

      <Navbar />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Connect with Us
          </h1>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 120, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-purple-500/20 h-full"
          >
            <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500" />
            <div className="p-8 md:p-10">
              <h2 className="text-4xl font-bold mb-8 text-white">Get in Touch</h2>

              <div className="space-y-8">
                <motion.button
                  onClick={handleMailTo}
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-lg bg-purple-900/40 text-purple-400 mr-5 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-semibold text-purple-300 mb-1 group-hover:text-purple-400 transition-colors">
                      Email Us
                    </h3>
                    <p className="text-gray-300 text-xl group-hover:text-white transition-colors">
                      gradient.mel@bmsce.ac.in
                    </p>
                  </div>
                </motion.button>

                <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                  <div className="p-3 rounded-lg bg-purple-900/40 text-purple-400 mr-5 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-purple-300 mb-1">Visit Us</h3>
                    <p className="text-gray-300 text-xl">
                      Department of Machine Learning<br />
                      7th Floor, PJA Block<br />
                      B.M.S. College of Engineering<br />
                      Bengaluru - 560 019
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold text-purple-300 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl bg-gray-800/80 hover:bg-purple-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6 text-purple-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sponsorship Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm border border-purple-500/20 flex flex-col h-full"
          >
            <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div className="p-8 md:p-10 flex-1 flex flex-col">
              <h2 className="text-4xl font-bold mb-4 text-white">Partner With Us</h2>
              <p className="text-purple-300 text-2xl mb-6">
                Elevate your brand through strategic partnerships
              </p>

              <div className="flex-1 text-xl">
                <ul className="space-y-4 text-gray-300 mb-8">
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span>Access to top AI & ML talent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span>Mentorship opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span>Event sponsorships and visibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 rounded-full bg-purple-900/40 text-purple-400 mr-3 mt-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span>Showcase your technology</span>
                  </li>
                </ul>
              </div>

              <motion.a
                href="mailto:gradient.mel@bmsce.ac.in?subject=Sponsorship%20Inquiry%20-%20We%20Want%20to%20Partner%20with%20Gradient&body=Hello%20Gradient%20Team%2C%0A%0AWe%20are%20interested%20in%20exploring%20sponsorship%20opportunities%20with%20your%20organization.%0A%0APlease%20share%20more%20details%20about%20partnership%20options%20and%20how%20we%20can%20collaborate.%0A%0AThank%20you%2C"
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl flex items-center justify-center group transition-all duration-300 shadow-lg shadow-purple-900/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium text-lg">Become a Sponsor</span>
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Popup */}
        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 rounded-xl p-6 max-w-md mx-auto text-white space-y-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold">Opening Email</h3>
              <p>
                Please wait while we redirect you to your email client. If nothing happens, manually email us
                at <span className="text-purple-400">gradient.mel@bmsce.ac.in</span>.
              </p>
              <button
                className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}