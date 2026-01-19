import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { MerchItem } from '../types';

const merchData: MerchItem[] = [
  { id: 1, name: "Invisibility Hoodie", price: "60 Galleons", image: "https://picsum.photos/seed/hoodie/400/400", tag: "Enchanted" },
  { id: 2, name: "Elixir Vessel", price: "25 Galleons", image: "https://picsum.photos/seed/tumbler/400/400", tag: "Rare" },
  { id: 3, name: "Rune Deskmat", price: "40 Galleons", image: "https://picsum.photos/seed/deskmat/400/400", tag: "Limited" },
  { id: 4, name: "Cursed Tee", price: "30 Galleons", image: "https://picsum.photos/seed/tee/400/400", tag: "" },
];

const Loot: React.FC = () => {
  return (
    <section id="loot" className="py-24 bg-dark-surface relative overflow-hidden">
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-700 pb-6">
          <div>
            <h2 className="font-serif text-5xl font-bold text-slate-100 mb-2">
              Black Market
            </h2>
            <p className="font-body text-slate-500 italic text-xl">"Artifacts for the modern wizard."</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-wicked-purple hover:text-white transition-colors font-serif uppercase tracking-widest text-sm mt-4 md:mt-0">
            View Collection <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {merchData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-dark border border-slate-800 hover:border-wicked-gold transition-colors duration-500 rounded-sm">
                
                {/* Floating Item */}
                <motion.div 
                    className="p-4"
                    whileHover={{ y: -5 }}
                >
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full aspect-square object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                </motion.div>

                {item.tag && (
                  <div className="absolute top-0 right-0 bg-wicked-purple text-white text-[10px] font-serif px-3 py-1 shadow-lg">
                    {item.tag}
                  </div>
                )}
                
                {/* Hover Action */}
                <div className="absolute bottom-0 left-0 right-0 bg-wicked-gold/90 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center cursor-pointer">
                    <span className="text-dark font-serif font-bold text-sm uppercase flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Acquire
                    </span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="font-serif text-lg text-slate-300 group-hover:text-wicked-green transition-colors">{item.name}</h3>
                <p className="text-sm text-wicked-gold font-serif mt-1">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loot;