
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  number: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, number }: ServiceCardProps) => {
  return (
    <div className="w-full max-w-80 bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden group hover:shadow-[0px_0px_25px_rgba(0,0,0,0.15)] transition-all duration-300">
      <div className="w-24 h-24 bg-blue-500 rounded-full absolute -right-5 -top-7 group-hover:bg-blue-600 transition-colors duration-300">
        <p className="absolute bottom-6 left-7 text-white text-2xl font-bold">{number}</p>
      </div>
      <div className="fill-blue-500 w-12 group-hover:fill-blue-600 transition-colors duration-300">
        <Icon className="h-12 w-12 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
      </div>
      <h3 className="font-bold text-xl text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 leading-6">
        {description}
      </p>
      <ul className="space-y-2 pt-2">
        {features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-500 flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:bg-blue-600 transition-colors duration-300" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
