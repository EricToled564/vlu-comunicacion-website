
'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({ icon: Icon, title, description, className = '' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`text-center space-y-4 ${className}`}
    >
      <div className="flex justify-center">
        <div className="p-3 bg-vlu-secondary/10 rounded-full">
          <Icon className="h-8 w-8 text-vlu-primary" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
