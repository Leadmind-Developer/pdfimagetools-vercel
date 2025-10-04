import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ConversionSuccessScreen from '@/components/ConversionSuccessScreen';

const ConversionSuccessPage = ({ fileUrl, fileName, toolName }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50"
    >
      <ConversionSuccessScreen
        fileUrl={fileUrl}
        fileName={fileName}
        toolName={toolName}
        adType="banner"
        onBack={() => navigate(-1)}
      />
    </motion.div>
  );
};

export default ConversionSuccessPage;
