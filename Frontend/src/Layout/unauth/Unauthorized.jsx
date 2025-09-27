import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Unauthorized = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200">
      <div className="text-center p-8 bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl max-w-lg mx-auto">
        {/* 404 Number with animation */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500 drop-shadow-lg"
        >
          404
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-gray-800 mb-3"
        >
          Oops! Page Not Found 😕
        </motion.h2>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          The page you’re looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Home Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
        >
          ⬅ Go Back Home
        </motion.button>
      </div>
    </div>
  )
}

export default Unauthorized
